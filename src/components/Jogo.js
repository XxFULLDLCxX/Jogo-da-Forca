import forca_0 from "../assets/img/forca0.png";
import forca_1 from "../assets/img/forca1.png";
import forca_2 from "../assets/img/forca2.png";
import forca_3 from "../assets/img/forca3.png";
import forca_4 from "../assets/img/forca4.png";
import forca_5 from "../assets/img/forca5.png";
import forca_6 from "../assets/img/forca6.png";
import { formatRevealWord } from "../core";
import { Game } from "../style";

export default function Jogo({ props: { word, words, guess, letters }, setters }) {
  const images = [forca_0, forca_1, forca_2, forca_3, forca_4, forca_5, forca_6];
  const chooseWord = () => {
    const hidden_word = words[Math.floor(Math.random() * words.length)];
    setters.setWord({ reveal: formatRevealWord(hidden_word, []), hidden: hidden_word, color: "black" });
    setters.setLetters({ pressed: [], disabled: [], errors: 0 });
    setters.setGuess({ value: "", disable: false });
  };
  return (
    <Game>
      <img
        data-test="game-image"
        src={images[letters.errors]}
        alt={`Imagem do Boneco na Forca, Errors Restantes ${6 - letters.errors}`}
      />
      <div>
        <button data-test="choose-word" onClick={chooseWord}>
          Escolher Palavra
        </button>
        <p data-test="word" style={{ color: word.color }}>
          {word.reveal}
        </p>
      </div>
    </Game>
  );
}
