export const highlightSubstring = (text: string, substring: string) => {
  const startIndex = text.toLowerCase().indexOf(substring.toLowerCase());
  const endIndex = startIndex + substring.length;
  return (
    <p className="font-normal">
      {text.slice(0, startIndex)}
      <strong className="font-bold">{text.slice(startIndex, endIndex)}</strong>
      {text.slice(endIndex)}
    </p>
  );
};
