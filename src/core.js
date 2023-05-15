export function removeDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036F]|[\u0080-\u00FF]/g, "");
}

export function formatRevealWord(str, letters) {
  return str
    .split("")
    .map((l) => (letters.includes(removeDiacritics(l)) ? l : " _"))
    .join("");
}
