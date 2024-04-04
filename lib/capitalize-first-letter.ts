const capitalizeFirstLetter = (tagName: string): string =>
  tagName.length > 0
    ? tagName.charAt(0).toUpperCase() + tagName.slice(1)
    : tagName;

export default capitalizeFirstLetter;
