import React, { useState } from "react";
import { Dado } from "./Dado";

const geraValorDado = () => Math.floor(Math.random() * 6) + 1;

export const PainelDado = () => {
  const [dado, setDado] = useState(geraValorDado());
  const [exibirImgDado, setExibirImgDado] = useState(true);

  const handleClickJogar = () => {
    const valor = geraValorDado();
    setDado(valor);
  };

  const handleClickExibirImgDado = () => {
    setExibirImgDado(!exibirImgDado);
  };

  return (
    <div>
      <Dado valor={dado} exibirImg={exibirImgDado} />
      <button onClick={handleClickJogar}>Jogar Dado</button>
      <button onClick={handleClickExibirImgDado}>
        Exibir / Ocultar Imagem Dado
      </button>
    </div>
  );
};
