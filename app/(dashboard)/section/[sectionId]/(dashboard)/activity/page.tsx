import prisma from "@/lib/db";
import addUserObject, {
  ITransformedActivity,
} from "@/lib/product/add-user-object";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Container from "./_components/container";
import Card from "./_components/card";

async function getActivity(sectionId: string) {
  const section = await prisma.feedbackSection.findUnique({
    where: {
      id: sectionId,
    },
    select: {
      activity: true,
      members: {
        select: {
          user: {
            select: {
              id: true,
              image: true,
              userName: true,
              lastName: true,
              firstName: true,
            },
          },
        },
      },
      admins: {
        select: {
          user: {
            select: {
              id: true,
              image: true,
              email: true,
              userName: true,
              lastName: true,
              firstName: true,
            },
          },
        },
      },
    },
  });

  if (!section) return null;

  const activityLog = addUserObject(
    section.activity,
    section
  ) as ITransformedActivity[];

  return activityLog;
}
export default async function ActivityPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const activityLog = await getActivity(params.sectionId);

  if (activityLog)
    return (
      <section className="md:container px-5 py-5 mt-5">
        <Container>
          {activityLog.map(({ id, description, createdAt, author }) => (
            <Card
              key={id}
              description={description}
              createdAt={createdAt}
              author={author}
            />
          ))}
        </Container>
      </section>
    );
}
