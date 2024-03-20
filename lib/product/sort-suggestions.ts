export default function sortSuggestions(
  suggestions: any,
  sortBy?: string | undefined
) {
  switch (sortBy) {
    case "most-likes":
      suggestions.sort((a: any, b: any) => b.likedBy.length - a.likedBy.length);
      break;
    case "least-likes":
      suggestions.sort((a: any, b: any) => a.likedBy.length - b.likedBy.length);
      break;
    case "most-comments":
      suggestions.sort(
        (a: any, b: any) => b.comments.length - a.comments.length
      );
      break;
    case "least-comments":
      suggestions.sort(
        (a: any, b: any) => a.comments.length - b.comments.length
      );
      break;
    default:
      suggestions.sort((a: any, b: any) => b.likedBy.length - a.likedBy.length);
      break;
  }
}
