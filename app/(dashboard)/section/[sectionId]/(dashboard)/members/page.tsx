import SearchInput from "@/components/search-input";
import prisma from "@/lib/db";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import Container from "./_components/container";


async function getSectionMembers(sectionId: string) {
  try {
    if (!sectionId) return null;

    const sectionMembers = await prisma.feedbackSection.findUnique({
      where: {
        id: sectionId,
      },
      select: {
        members: {
          select: {
            user: {
              select: {
                id: true,
                userName: true,
                image: true,
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
                userName: true,
                image: true,
                lastName: true,
                firstName: true,
              },
            },
          },
        },
      },
    });

    if (!sectionMembers) return null;

    return sectionMembers;
  } catch {
    return null;
  }
}

export default async function MembersPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const { sectionId } = params;

  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const sectionMembers = await getSectionMembers(sectionId);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="px-5 py-2">
      <SearchInput className="w-full px-0" />
      <Container
        currentUser={currentUser}
        admins={sectionMembers!.admins}
        members={sectionMembers!.members}
        sectionId={sectionId}
      />
    </div>
  );
}
