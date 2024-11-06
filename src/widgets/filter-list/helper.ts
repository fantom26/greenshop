export const getSizeLetter = (name: string) => {
  const matches = name.match(/\((\w+)\)/g);
  return matches
    ? matches.map((match) => match.substring(1, match.length - 1)).join("")
    : "";
};
