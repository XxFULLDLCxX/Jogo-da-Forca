import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";
import words from "../palavras";

export default function App() {

  const [error_count, setErrorCount] = useState(0);
  const [hidden_word, setHiddenWord] = useState('quarentena');
  const [letters, setLetters] = useState({
    pressed: [],
    disabled: [...alphabet],
  });

  return (
    <div className="App">
      <Jogo props={{ error_count, hidden_word, words, letters, setHiddenWord, setLetters }} />
      <Letras props={{ error_count, hidden_word, alphabet, letters, setLetters, setErrorCount }} />
    </div>
  );
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];