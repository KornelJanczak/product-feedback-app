import {
  ActivityToFeedbackSection,
  CommentsToFeedback,
  FeedbackToFeedbackSection,
} from "@prisma/client";

interface UserObject extends IAuthor {
  email: string;
}

interface IFeedbackSection {
  members: any[];
  admins: any[];
}

interface IFeedbackSectionWithComments extends FeedbackToFeedbackSection {
  comments: CommentsToFeedback[];
}

export interface ITransformedFeedbackSection
  extends IFeedbackSectionWithComments {
  author: UserObject;
}

export default function addUserObject(
  transformedData: IFeedbackSectionWithComments[] | ActivityToFeedbackSection[],
  feedbackSection: IFeedbackSection
) {
  const dataWithUserObject = transformedData.map((suggestion) => {
    const members = feedbackSection.members.map((member) => {
      if (member.user.id === suggestion.authorId) {
        return { ...member.user, isAdmin: false };
      }
    });

    const admins = feedbackSection.admins.map((admin) => {
      if (admin.user.id === suggestion.authorId) {
        return { ...admin.user, isAdmin: true };
      }
    });

    return {
      ...suggestion,
      author: members[0] || admins[0],
    };
  });

  return dataWithUserObject;
}
