import forca_0 from '../assets/img/forca0.png';
import forca_1 from '../assets/img/forca1.png';
import forca_2 from '../assets/img/forca2.png';
import forca_3 from '../assets/img/forca3.png';
import forca_4 from '../assets/img/forca4.png';
import forca_5 from '../assets/img/forca5.png';
import forca_6 from '../assets/img/forca6.png';
import removeDiacritics from "../core";


export default function Jogo({ props: { error_count, word, words, letters, ...setters } }) {
    const images = [forca_0, forca_1, forca_2, forca_3, forca_4, forca_5, forca_6];
    const choiceWord = () => {
        setters.setLetters([]);
        setters.setErrorCount(0);
        setters.setWord({
            hidden: words[Math.floor(Math.random() * words.length)],
            color: 'black'
        });
    };
    return (
        <div className="game">
            <img src={images[error_count]} alt={`Imagem do Boneco na Forca, Errors Restantes ${6 - error_count}`} />
            <div>
                <button onClick={choiceWord}>Escolher Palavra</button>
                <p style={{ color: word.color }}>
                    {word.hidden.split('').map(l => letters.includes(removeDiacritics(l)) ? l : ' _').join('')}
                </p>
            </div>
        </div>
    );
}
