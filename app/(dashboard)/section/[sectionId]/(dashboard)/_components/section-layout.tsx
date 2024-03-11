import { ReactNode, Suspense } from "react";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Nav from "@/components/nav/navbar";
import Background from "./background";
import NoResult from "@/components/no-result";
import MainInformation, { MainInformationSkeleton } from "./main-information";
import ActionPanel, { ActionPanelSkeleton } from "./action-panel";
import { ImageBackgroundSkeleton } from "@/components/image-uploading/image-background-skeleton";
import SectionRoutes from "./section-routes";

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
  children,
  params,
}: {
  children: ReactNode;
  params: { sectionId: string };
}) {
  const currentUser = await getCurrentUser();

  const { sectionId } = params;

  if (!currentUser) return redirect("/login");

  const feedbackSection = await getFeedbackSection(currentUser.id, sectionId);

  if (!feedbackSection) {
    return (
      <NoResult
        title="We can't find this section!"
        description="If you wan't manage your product with friends, create your own section!"
      />
    );
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
        <Nav />
        <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
          <section className="px-0 md:container lg:w-full lg:px-0 ">
            <Suspense fallback={<ImageBackgroundSkeleton className="h-44" />}>
              <Background
                image={feedbackSection?.bgImage}
                sectionId={sectionId}
                sectionTitle={feedbackSection.title}
                currentUserIsAdmin={currentUserIsAdmin}
              />
            </Suspense>

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

            <SectionRoutes sectionId={sectionId} />
          </section>
          {children}
        </main>
      </>
    );
  }
}
