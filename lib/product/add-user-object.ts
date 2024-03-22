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

interface IFeedbackSectionWithFeedbacks extends FeedbackToFeedbackSection {
  comments: CommentsToFeedback[];
}



export interface ITransformedFeedbackSection
  extends IFeedbackSectionWithFeedbacks {
  author: UserObject;
}

export interface ITransformedActivity extends ActivityToFeedbackSection {
  author: UserObject;
}

export default function addUserObject<
  T extends IFeedbackSectionWithFeedbacks[] | ActivityToFeedbackSection[]
>(transformedData: T, feedbackSection: IFeedbackSection) {
  const dataWithUserObject = transformedData.map((object) => {
    const members = feedbackSection.members.map((member) => {
      if (member.user.id === object.authorId) {
        return { ...member.user, isAdmin: false };
      }
    });

    const admins = feedbackSection.admins.map((admin) => {
      if (admin.user.id === object.authorId) {
        return { ...admin.user, isAdmin: true };
      }
    });

    return {
      ...object,
      author: members[0] || admins[0],
    };
  });

  return dataWithUserObject;
}
