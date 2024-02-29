import { redirect } from "next/navigation";
import FilterBar from "../_components/find-bar";
import Container from "./_components/container";
import getCurrentUser from "@/lib/user/get-current-user";
import prisma from "@/lib/db";
import Card from "./_components/card";

async function getFeedbackSections(currentUserId: string) {
  try {
    if (!currentUserId) return null;

    const select = {
      id: true,
      userName: true,
      lastName: true,
      firstName: true,
      image: true,
      profile: true,
    };

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
          select: {
            user: {
              select,
            },
          },
        },
        admins: {
          select: {
            user: {
              select,
            },
          },
        },
      },
    });

    if (!userFeedbackSections) return null;

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
