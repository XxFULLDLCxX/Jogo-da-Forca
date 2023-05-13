import forca_0 from '../assets/img/forca0.png';
import forca_1 from '../assets/img/forca1.png';
import forca_2 from '../assets/img/forca2.png';
import forca_3 from '../assets/img/forca3.png';
import forca_4 from '../assets/img/forca4.png';
import forca_5 from '../assets/img/forca5.png';
import forca_6 from '../assets/img/forca6.png';

export default function Jogo({ props: { error_count, hidden_word, words, letters, ...setters } }) {
    const images = [forca_0, forca_1, forca_2, forca_3, forca_4, forca_5, forca_6];
    const choiceWord = () => {
        setters.setLetters({ ...letters, disabled: [] });
        setters.setHiddenWord(words[Math.floor(Math.random() * words.length)]);
    };
    const showGuessedLetters = (event) => {
        const guessed_letters = hidden_word.split('').map(l => letters.pressed.includes(l) ? l : ' _').join('');
        if (guessed_letters.includes(' _')) {
            console.log(event);
        }
        return guessed_letters;
    };
    return (
        <div className="game">
            <img src={images[error_count]} />
            <div>
                <button onClick={choiceWord}>Escolher Palavra</button>
                <p>{showGuessedLetters()}</p>
            </div>
        </div>
    );
}