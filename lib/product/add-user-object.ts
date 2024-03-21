import {
  ActivityToFeedbackSection,
  FeedbackToFeedbackSection,
} from "@prisma/client";

interface IFeedbackSection {
  members: any[];
  admins: any[];
}

export default function addUserObject(
  transformedData: FeedbackToFeedbackSection[] | ActivityToFeedbackSection[],
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

    return { ...suggestion, author: members[0] || admins[0] };
  });

  return dataWithUserObject;
}
