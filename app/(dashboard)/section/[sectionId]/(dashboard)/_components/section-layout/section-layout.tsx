import { ReactNode, Suspense } from "react";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Background from "./background";
import MainInformation, { MainInformationSkeleton } from "./main-information";
import ActionPanel, { ActionPanelSkeleton } from "./action-panel";
import { ImageBackgroundSkeleton } from "@/components/image-uploading/image-background-skeleton";
import SectionRoutes, { SectionRoutesSkeleton } from "./section-routes";

async function getFeedbackSection(currentUserId: string, sectionId: string) {
  try {
    if (!currentUserId) return redirect("/login");

    const feedbackSection = await prisma.feedbackSection.findUnique({
      where: {
        id: sectionId,
      },
      select: {
        activity: true,
        title: true,
        bgImage: true,
        members: {
          select: {
            user: {
              select: {
                image: true,
                id: true,
                userName: true,
                lastName: true,
                firstName: true,
                email: true,
              },
            },
          },
        },
        admins: {
          select: {
            user: {
              select: {
                image: true,
                id: true,
                userName: true,
                lastName: true,
                firstName: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!feedbackSection) return null;

    const sectionUsers = [
      ...feedbackSection.members,
      ...feedbackSection.admins,
    ];

    const userIsMemberOrAdminOfSection = sectionUsers.some(
      ({ user }) => user.id === currentUserId
    );

    if (!userIsMemberOrAdminOfSection)
      throw new Error("You don't have permission to this section");

    return feedbackSection;
  } catch {
    return null;
  }
}

export default async function SectionLayout({
  params,
  currentUser,
}: {
  params: { sectionId: string };
  currentUser: ICurrentUser | null;
}) {
  const { sectionId } = params;

  if (!currentUser) return redirect("/login");

  const feedbackSection = await getFeedbackSection(currentUser.id, sectionId);

  if (!feedbackSection) {
    throw Error("We can't find this section!");
  }

  if (feedbackSection) {
    const currentUserIsAdmin = feedbackSection.admins.some(
      ({ user }) => user.id === currentUser.id
    );

    const sectionUsers = [
      ...feedbackSection.members,
      ...feedbackSection.admins,
    ];

    return (
      <>
        <Suspense
          fallback={<ImageBackgroundSkeleton className="h-52 lg:h-80" />}
        >
          <Background
            image={feedbackSection?.bgImage}
            sectionId={sectionId}
            sectionTitle={feedbackSection.title}
            currentUserIsAdmin={currentUserIsAdmin}
          />
        </Suspense>
        <div className="sm:flex sm:flex-row sm:w-full pb-4 bg-basicWhite ">
          <Suspense
            fallback={
              <MainInformationSkeleton membersNumber={sectionUsers.length} />
            }
          >
            <MainInformation
              title={feedbackSection.title}
              sectionUsers={sectionUsers}
            />
          </Suspense>
          <Suspense fallback={<ActionPanelSkeleton />}>
            <ActionPanel
              currentUser={currentUser}
              sectionUsers={sectionUsers}
              sectionId={sectionId}
              currentUserIsAdmin={currentUserIsAdmin}
            />
          </Suspense>
        </div>
        <Suspense fallback={<SectionRoutesSkeleton />}>
          <SectionRoutes sectionId={sectionId} />
        </Suspense>
      </>
    );
  }
}
