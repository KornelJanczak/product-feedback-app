"use server";
import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import createActivityForFeedbackSection from "@/lib/product/helpers/create-activity";
import { leaveFromSectionSchema } from "@/schemas/@product-actions-schemas";
import { revalidatePath } from "next/cache";

export const leaveFromFeedbackSection = action(
  leaveFromSectionSchema,
  async ({ userId, sectionId }) => {
    try {
      if (!userId || !sectionId) throw new Error("Unvalid data!");

      const feedbackSection = await prisma.feedbackSection.findUnique({
        where: {
          id: sectionId,
        },
        select: {
          admins: {
            select: {
              userId: true,
            },
          },
          members: {
            select: {
              userId: true,
            },
          },
        },
      });

      if (!feedbackSection)
        throw new Error("This feedback section doesn't exist!");

      const isMember = feedbackSection.members.some(
        (member) => member.userId === userId
      );

      const isAdmin = feedbackSection.admins.some(
        (admin) => admin.userId === userId
      );

      const deletedValues = {
        userId: userId,
        feedbackSectionId: sectionId,
      };

      //if user is a member delete he from members
      if (isMember) {
        const deletedMember = await prisma.userToFeedbackSection.delete({
          where: {
            userId_feedbackSectionId: deletedValues,
          },
        });

        await createActivityForFeedbackSection(
          sectionId,
          userId,
          "User left from feedback section"
        );

        return { success: deletedMember };
      }

      if (isAdmin) {
        const sectionHasAdmins = feedbackSection.admins.length > 1;

        const deletedAdmin = await prisma.adminToFeedbackSection.delete({
          where: {
            userId_feedbackSectionId: deletedValues,
          },
        });

        // Check if user is a last admin
        if (!sectionHasAdmins) {
          const randomIndex = Math.floor(
            Math.random() * feedbackSection.members.length
          );

          const randomMember: { userId: string } | undefined =
            feedbackSection.members[randomIndex];

          // If the admin is the last user of section delete section
          if (!randomMember) {
            const deletedSection = await prisma.feedbackSection.delete({
              where: {
                id: sectionId,
              },
            });

            return { success: deletedSection };
          }

          // At otherwise, add admins privilege to random member

          const randomMemberValues = {
            userId: randomMember.userId,
            feedbackSectionId: sectionId,
          };

          const deleteUserAsMember = await prisma.userToFeedbackSection.delete({
            where: {
              userId_feedbackSectionId: randomMemberValues,
            },
          });

          if (!deleteUserAsMember) throw new Error("Finding new admin failed!");

          const createUserAsAdmin = await prisma.adminToFeedbackSection.create({
            data: randomMemberValues,
          });

          await createActivityForFeedbackSection(
            sectionId,
            userId,
            "User left from feedback section"
          );

          return { success: createUserAsAdmin };
        } else {
          return { success: deletedAdmin };
        }
      }
    } catch (err) {
      throw new Error("Something went wrong!");
    } finally {
      revalidatePath("/");
    }
  }
);
