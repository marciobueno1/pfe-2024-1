import React, { useState } from "react";
import { Dado } from "./components/Dado";

const geraValorDado = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  const [dado, setDado] = useState(geraValorDado());

  const handleClickJogar = () => {
    const valor = geraValorDado();
    setDado(valor);
  };

  return (
    <>
      <h1 className="title">Jogo de Dados</h1>
      <Dado valor={dado} />
      <button onClick={handleClickJogar}>Jogar Dado</button>
    </>
  );
}
