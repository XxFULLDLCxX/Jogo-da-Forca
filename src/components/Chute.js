import removeDiacritics from "../core";
import { Guess } from "../style";

export default function Chute({ props: { alphabet, word, ...setters } }) {
  const toGuess = (event) => {
    event.preventDefault();
    const guess = event.target.guess.value;
    if (removeDiacritics(guess.toLowerCase()) === removeDiacritics(word.hidden)) {
      setters.setLetters([...alphabet]);
      setters.setWord({ ...word, color: "green" });
    } else if (guess !== "" && guess !== undefined && guess !== null) {
      setters.setErrorCount(6);
      setters.setLetters([...alphabet]);
      setters.setWord({ ...word, color: "red" });
    }
  };

  return (
    <Guess>
      <form onSubmit={toGuess}>
        <label htmlFor="guess">Já sei a palavra! </label>
        <input data-test="guess-input" id="guess" name="guess" type="text" required />
        <button data-test="guess-button" type="submit" disabled={word.hidden.includes("__") || word.color !== "black"}>
          Chutar
        </button>
      </form>
    </Guess>
  );
}
