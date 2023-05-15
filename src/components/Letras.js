import { formatRevealWord, removeDiacritics } from "../core";
import { Letters } from "../style";

export default function Letras({ props: { alphabet, guess, letters, word }, setters }) {
  const pressedKey = (letter) => {
    const new_letters = { ...letters, pressed: [...letters.pressed, letter], disabled: [...letters.disabled, letter] };
    setters.setWord({ ...word, reveal: formatRevealWord(word.hidden, new_letters.pressed) });

    if (!removeDiacritics(word.hidden).includes(letter)) {
      new_letters.errors++;
    }
    if (new_letters.errors === 6) {
      guess.disabled = true;
      new_letters.disabled = [...alphabet];
      setters.setWord({ ...word, color: "red", reveal: word.hidden });
    } else if (!formatRevealWord(word.hidden, new_letters.pressed).includes(" _")) {
      guess.disabled = true;
      new_letters.disabled = [...alphabet];
      setters.setWord({ ...word, color: "green", reveal: word.hidden });
    }
    setters.setLetters({ ...new_letters });
  };

  return (
    <Letters>
      {alphabet.map((l) => (
        <button data-test="letter" key={l} onClick={() => pressedKey(l)} disabled={letters.disabled.includes(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </Letters>
  );
}
