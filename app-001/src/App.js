import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Frase } from "./components/Frase";
import { Numero } from "./components/Numero";

function App() {
  const [minhaPalavra, setMinhaPalavra] = useState("extrato");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> <p>Olá turma!!!</p>
      </header>
      <Frase palavra="teste1" />
      <Frase palavra={minhaPalavra} />
      <hr />
      <button
        onClick={() => {
          setMinhaPalavra("mudou");
        }}
      >
        Mudar Palavra
      </button>
      <hr />
      {Math.random() < 0.5 ? <Frase /> : <Numero />}
      <hr />
      {Math.random() < 0.5 && <Frase />}
    </div>
  );
}

export default App;
