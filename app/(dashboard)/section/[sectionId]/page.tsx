import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Nav from "@/components/nav/navbar";

async function getFeedbackSection(currentUserId: string, sectionId: string) {
  try {
    if (!currentUserId) return redirect("/login");

    const feedbackSection = await prisma.feedbackSection.findFirst({
      where: {
        id: sectionId,
      },
      include: {
        activity: true,
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
        suggestions: true,
      },
    });

    if (!feedbackSection) return null;

    const sectionUsers = [
      ...feedbackSection.members,
      ...feedbackSection.admins,
    ];

    const userIsMemberOrAdminOfSection = sectionUsers.some(
      ({ userId }) => userId === currentUserId
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

  return (
    <>
      <Nav />
      <main className="bg-darkWhite lg:col-start-2 lg:col-end-5 lg:w-full">
        <section className="px-0 md:container lg:w-full lg:px-0 ">
          
        </section>
      </main>
    </>
  );
}
