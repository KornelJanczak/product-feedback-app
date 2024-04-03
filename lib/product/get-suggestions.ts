import prisma from "../db";
import addUserObject, {
  ITransformedFeedbackSection,
} from "@/lib/product/helpers/add-user-object";

interface IGetSuggestions {
  sectionId: string;
  currentUserId: string;
  titleFilter?: string;
  categoryFilter?: string;
}

export default async function getSuggestions({
  sectionId,
  currentUserId,
  titleFilter,
  categoryFilter,
}: IGetSuggestions) {
  if (!sectionId) return null;

  const feedbacks = await prisma.feedbackToFeedbackSection.findMany({
    where: {
      feedbackSectionId: sectionId,
      title: {
        contains: titleFilter,
      },
      category: categoryFilter,
    },
    include: {
      comments: true,
    },
  });

  if (!feedbacks) return null;

  const section = await prisma.feedbackSection.findUnique({
    where: {
      id: sectionId,
    },
    select: {
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

  const suggestions = addUserObject(
    feedbacks,
    section
  ) as ITransformedFeedbackSection[];

  if (!section) return null;

  const currentUserIsAdmin = section.admins.some(
    ({ user }) => user.id === currentUserId
  );

  return { suggestions, currentUserIsAdmin };
}
