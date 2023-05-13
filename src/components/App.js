import Jogo from "./Jogo";
import Chute from "./Chute";
import Letras from "./Letras";
import { useState } from "react";
import words from "../palavras";

export default function App() {

  const [error_count, setErrorCount] = useState(0);
  const [word, setWord] = useState({ hidden: '__________', color: 'black' });
  const [letters, setLetters] = useState([...alphabet]);
  console.log(word);

  return (
    <div className="App">
      <Jogo props={{ error_count, word, words, letters, setWord, setLetters, setErrorCount }} />
      <Letras props={{ error_count, word, alphabet, letters, setWord, setLetters, setErrorCount }} />
      <Chute props={{ alphabet, word, setErrorCount, setWord, setLetters }} />
    </div>
  );
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];