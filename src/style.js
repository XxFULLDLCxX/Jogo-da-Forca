import styled, { createGlobalStyle } from "styled-components";

export const Game = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    margin: 50px 38px 25px;
    height: 467px;
    width: 400px;
  }

  > div {
    padding-right: 53px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }

  button {
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;

    margin-left: auto;

    height: 60px;
    width: 200px;
    border-radius: 8px;
    background-color: #27ae60;
    border: none;
    outline: none;
  }

  p {
    color: #000000;
    font-family: "Noto Sans", sans-serif;
    font-size: 50px;
    font-weight: 700;
    line-height: 68px;
    letter-spacing: 0em;
    text-align: center;

    margin-right: 11px;

    height: 68px;
    width: max-content;
  }
`;

export const Guess = styled.div`
  form {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }

  label {
    color: #000000;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    height: 23px;
    width: 150px;
    flex-shrink: 0;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;

    width: 353px;
    height: 40px;

    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    outline: none;
  }

  input:disabled {
    background-color: #88aaaa;
  }

  button {
    color: #3c76a1;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    width: 100px;
    height: 40px;

    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
  }

  button:disabled {
    background-color: skyblue;
  }
`;

export const Letters = styled.div`
  height: 91px;
  width: 664px;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0 auto 25px;

  button {
    color: #39739d;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;

    width: 40px;
    height: 40px;

    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
  }

  button[disabled] {
    color: #798a9f;
    background-color: #9faab5;
    border: 1px solid #7aa7c7;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
`;
