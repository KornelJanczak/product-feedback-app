

export default function SortFeedbackSections(
  sortBy: string,
  feedbackSections: any
) {
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
        (a: any, b: any) => b.suggestions.length - a.suggestions.length
      );
      break;

    case "least-suggestions":
      feedbackSections.sort(
        (a: any, b: any) => a.suggestions.length - b.suggestions.length
      );
      console.log(feedbackSections);
      break;
  }
}
