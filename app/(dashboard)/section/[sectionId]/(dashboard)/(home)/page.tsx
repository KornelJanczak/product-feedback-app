import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Container from "./_components/container";
import Card from "./_components/card";
import { Suspense } from "react";
async function getSuggestions(sectionId: string) {
  if (!sectionId) return null;

  const section = await prisma.feedbackSection.findUnique({
    where: {
      id: sectionId,
    },
    select: {
      suggestions: true,
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

  const suggestions = section.suggestions.map((suggestion) => {
    const members = section.members.map((member) => {
      if (member.user.id === suggestion.authorId) {
        return { ...member.user, isAdmin: false };
      }
    });

    const admins = section.admins.map((admin) => {
      if (admin.user.id === suggestion.authorId) {
        return { ...admin.user, isAdmin: true };
      }
    });

    return { ...suggestion, author: members[0] || admins[0] };
  });


  console.log(section.suggestions[0]);
  
  if (!section) return null;

  return suggestions;
}

export default async function SectionDashboard({
  params,
}: {
  params: { sectionId: string };
}) {
  const { sectionId } = params;
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const suggestions = await getSuggestions(sectionId);

  if (!suggestions) return <div></div>;

  if (suggestions)
    return (
      <section className="md:container px-5 py-5">
        <Suspense fallback={<p>Loading...</p>}>
          <Container>
            {suggestions.map((suggestion) => (
              <Card
                key={suggestion.id}
                currentUserId={currentUser.id}
                {...suggestion}
              />
            ))}
          </Container>
        </Suspense>
      </section>
    );
}
