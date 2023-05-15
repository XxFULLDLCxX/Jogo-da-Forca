import Jogo from "./Jogo";
import Chute from "./Chute";
import Letras from "./Letras";
import words from "../palavras";
import { useState } from "react";
import { GlobalStyle } from "../style";

export default function App() {
  const [error_count, setErrorCount] = useState(0);
  const [word, setWord] = useState({ hidden: "__________", color: "black" });
  const [letters, setLetters] = useState([...alphabet]);

  return (
    <>
      <GlobalStyle />
      <Jogo props={{ error_count, word, words, letters, setWord, setLetters, setErrorCount }} />
      <Letras props={{ error_count, word, alphabet, letters, setWord, setLetters, setErrorCount }} />
      <Chute props={{ word, alphabet, setWord, setLetters, setErrorCount }} />
    </>
  );
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
