import { removeDiacritics } from "../core";
import { Guess } from "../style";

export default function Chute({ props: { alphabet, guess, letters, word }, setters }) {
  const toGuess = (event) => {
    event.preventDefault();
    if (removeDiacritics(guess.value.toLowerCase()) === removeDiacritics(word.hidden)) {
      setters.setWord({ ...word, color: "green", reveal: word.hidden });
      setters.setLetters({ ...letters, disabled: [...alphabet] });
      setters.setGuess({ ...guess, disabled: true });
    } else if (guess.value !== "" && guess.value !== undefined && guess.value !== null) {
      setters.setWord({ ...word, color: "red", reveal: word.hidden });
      setters.setLetters({ ...letters, disabled: [...alphabet], errors: 6 });
      setters.setGuess({ ...guess, disabled: true });
    }
  };
  console.log(word.hidden.includes("__") || word.color !== "black");

  return (
    <Guess>
      <form onSubmit={toGuess}>
        <label htmlFor="guess">Já sei a palavra! </label>
        <input
          data-test="guess-input"
          id="guess"
          name="guess"
          type="text"
          value={guess.value}
          onChange={(e) => setters.setGuess({ ...guess, value: e.target.value })}
          disabled={guess.disabled}
          required
        />
        <button data-test="guess-button" type="submit" disabled={guess.disabled}>
          Chutar
        </button>
      </form>
    </Guess>
  );
}
