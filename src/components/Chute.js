import removeDiacritics from "../core";


export default function Chute({ props: { alphabet, word, ...setters } }) {
    const toGuess = event => {
        event.preventDefault();
        const guess = event.target.guess.value;
        if (removeDiacritics(guess.toLowerCase()) === removeDiacritics(word.hidden)) {
            setters.setLetters([...alphabet]);
            setters.setWord({ ...word, color: 'green' });
        } else if (guess !== '' && guess !== undefined && guess !== null) {
            setters.setErrorCount(6);
            setters.setLetters([...alphabet]);
            setters.setWord({ ...word, color: 'red' });
        }
    };

    return (
        <div className="guess">
            <form onSubmit={toGuess}>
                <label htmlFor="guess">Já sei a palavra! </label>
                <input id="guess" name="guess" type="text" required />
                <input type="submit" value="Chutar" disabled={word.hidden.includes('__') || word.color !== "black"} />
            </form>
        </div>
    );
}