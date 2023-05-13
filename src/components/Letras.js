import removeDiacritics from "../core";

export default function Letras({ props: { error_count, word, alphabet, letters, ...setters } }) {
    const pressedKey = (letter) => {
        setters.setLetters([...letters, letter]);
        const guessed_letters = removeDiacritics(word.hidden).split('').map(l =>
            [...letters, letter].includes(l) ? l : ' _').join('').includes(' _');

        if (!removeDiacritics(word.hidden).includes(letter)) {
            error_count++;
            setters.setErrorCount(error_count);
        }
        if (error_count === 6) {
            setters.setLetters([...alphabet]);
            setters.setWord({ ...word, color: 'red' });
        } else if (!guessed_letters) {
            setters.setWord({ ...word, color: 'green' });
        }

    };

    return (
        <div className="letters">
            {alphabet.map(l =>
                <button key={l} onClick={() => pressedKey(l)} disabled={letters.includes(l)} >{l}</button>)}
        </div>
    );
}
