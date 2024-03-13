"use server";

import { action } from "@/lib/clients/safe-action-client";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { giveAdminRoleSchema } from "@/schemas/@product-actions-schemas";

export const giveAdminRoleInFeedbackSection = action(
  giveAdminRoleSchema,
  async ({ sectionId, adminId, memberId }) => {
    try {
      if (!sectionId || !adminId || !memberId) throw new Error("Invalid input");

      const currentUser = await getCurrentUser();

      if (!currentUser || currentUser.id !== adminId)
        throw new Error("Unauthorized");

      const feedbackSection = await prisma.feedbackSection.findUnique({
        where: { id: sectionId },
        select: {
          members: {
            select: {
              userId: true,
            },
          },
          admins: {
            select: {
              userId: true,
            },
          },
        },
      });

      if (!feedbackSection) throw new Error("Section not found");

      const isMember = feedbackSection.members.some(
        (member) => member.userId === memberId
      );

      if (!isMember) throw new Error("User is not a member of this section");

      const memberIsAdmin = feedbackSection.admins.some(
        (admin) => admin.userId === memberId
      );

      if (memberIsAdmin) throw new Error("User is already an admin");

      const currentUserIsAdmin = feedbackSection.admins.some(
        (admin) => admin.userId === adminId
      );

      if (!currentUserIsAdmin) throw new Error("You are not an admin");

      await prisma.feedbackSection.update({
        where: { id: sectionId },
        data: {
          members: {
            disconnect: {
              userId_feedbackSectionId: {
                userId: memberId,
                feedbackSectionId: sectionId,
              },
            },
          },
          admins: {
            connect: {
              userId_feedbackSectionId: {
                userId: memberId,
                feedbackSectionId: sectionId,
              },
            },
          },
        },
      });

      return { success: true };
    } catch {
      throw new Error("Giving admin failed!");
    }
  }
);
