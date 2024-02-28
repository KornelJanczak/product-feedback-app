import { redirect } from "next/navigation";
import FilterBar from "../_components/find-bar";
import Container from "./_components/container";
import getCurrentUser from "@/lib/user/get-current-user";
import prisma from "@/lib/db";
import Card from "./_components/card";

async function getFeedbackSections(currentUserId: string) {
  try {
    if (!currentUserId) return null;

    const userFeedbackSections = await prisma.feedbackSection.findMany({
      where: {
        OR: [
          {
            members: {
              some: {
                userId: currentUserId,
              },
            },
          },
          {
            admins: {
              some: {
                userId: currentUserId,
              },
            },
          },
        ],
      },
      include: {
        members: {
          include: {
            user: true,
          },
        },
        admins: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!userFeedbackSections) return null;
    console.log("______________________________________");

    console.log(userFeedbackSections, "SEKCJA FEEDBACKU");

    console.log("______________________________________");

    const changed = userFeedbackSections.map((section) => {
      return {
        id: section.id,
        title: section.title,
      };
    });

    return userFeedbackSections;
  } catch {
    return null;
  }
}

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const feedbackSections = await getFeedbackSections(currentUser.id);

  console.log(feedbackSections);

  return (
    <>
      <FilterBar />
      <Container>
        {feedbackSections &&
          feedbackSections.map(({ id, title, members, admins }) => (
            <Card
              key={id}
              id={id}
              title={title as string}
              members={members}
              admins={admins}
            />
          ))}
      </Container>
    </>
  );
}
