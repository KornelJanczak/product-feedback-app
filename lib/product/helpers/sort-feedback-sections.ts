export default function sortFeedbackSections(
  sortBy: string,
  feedbackSections: any
) {
  console.log(feedbackSections);

  switch (sortBy) {
    case "least-members":
      feedbackSections.sort(
        (a: any, b: any) =>
          a.members.length +
          a.admins.length -
          (b.members.length + b.admins.length)
      );
      break;

    case "most-members":
      feedbackSections.sort(
        (a: any, b: any) =>
          b.members.length +
          b.admins.length -
          (a.members.length + a.admins.length)
      );
      break;

    case "most-suggestions":
      feedbackSections.sort(
        (a: any, b: any) => b.feedbacks.length - a.feedbacks.length
      );
      break;

    case "least-suggestions":
      feedbackSections.sort(
        (a: any, b: any) => a.feedbacks.length - b.feedbacks.length
      );
      console.log(feedbackSections);
      break;
  }
}
