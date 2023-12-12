export function splitStringWithWhitespace(str: string) {
  const wordsAndWhitespace = str.split(/\s+/);
  const result = [];
  for (let i = 0; i < wordsAndWhitespace.length; i++) {
    result.push(wordsAndWhitespace[i]);
    if (i !== wordsAndWhitespace.length - 1) {
      result.push(" ");
    }
  }
  return result;
}
