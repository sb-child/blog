export function countLines(s: string) {
  const lineBreakRegex = /\r\n|\r|\n/g;
  const matches = s.match(lineBreakRegex);
  return matches ? matches.length : 0;
}
