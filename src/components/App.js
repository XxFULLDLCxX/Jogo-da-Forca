import Jogo from "./Jogo";
import Chute from "./Chute";
import Letras from "./Letras";
import words from "../palavras";
import { useState } from "react";
import { GlobalStyle } from "../style";

export default function App() {
  const [word, setWord] = useState({ hidden: "_ _ _ _ _ _ _ _", color: "black" });
  const [letters, setLetters] = useState({ pressed: [], disabled: [...alphabet], errors: 0 });
  const [guess, setGuess] = useState({ value: "", disabled: true });

  const setters = { setWord, setLetters, setGuess };

  return (
    <>
      <GlobalStyle />
      <Jogo props={{ guess, letters, word, words }} setters={setters} />
      <Letras props={{ alphabet, guess, letters, word }} setters={setters} />
      <Chute props={{ alphabet, guess, letters, word }} setters={setters} />
    </>
  );
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
