export default function Letras({ props: { error_count, hidden_word, alphabet, letters, ...setters } }) {
    const pressedKey = (letter) => {
        setters.setLetters({
            pressed: [...letters.pressed, letter],
            disabled: [...letters.disabled, letter]
        });
        if (!hidden_word.includes(letter)) {
            error_count++;
            setters.setErrorCount(error_count);
        }
        if (error_count === 6) {
            setters.setLetters({
                pressed: [],
                disabled: [...alphabet]
            });
        }
    };

    return (
        <div className="letters">
            {alphabet.map(l =>
                <button key={l} onClick={() => pressedKey(l)} disabled={letters.disabled.includes(l)} >{l}</button>)}
        </div>
    );
}
