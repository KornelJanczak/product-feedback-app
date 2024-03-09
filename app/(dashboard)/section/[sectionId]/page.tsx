import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Nav from "@/components/nav/navbar";
import Background from "./_components/background";
import NoResult from "@/components/no-result";
import Header from "./_components/header";

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
        suggestions: true,
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

export default async function SectionPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const currentUser = await getCurrentUser();

  const { sectionId } = params;

  if (!currentUser) return redirect("/login");

  const feedbackSection = await getFeedbackSection(currentUser.id, sectionId);

  if (!feedbackSection)
    return (
      <NoResult
        title="We can't find this section!"
        description="If you wan't manage your product with friends, create your own section!"
      />
    );

  if (feedbackSection)
    return (
      <>
        <Nav />
        <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
          <section className="px-0 md:container lg:w-full lg:px-0 ">
            <Background image={feedbackSection?.bgImage} />
            <Header
              title={feedbackSection.title}
              admins={feedbackSection.admins}
              members={feedbackSection.members}
            />
          </section>
        </main>
      </>
    );
}
