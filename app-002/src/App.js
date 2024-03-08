import React from "react";
import { PainelDado } from "./components/PainelDado";

export default function App() {
  return (
    <>
      <h1 className="title">Jogo de Dados</h1>
      <PainelDado />
      <hr />
      <PainelDado />
    </>
  );
}
