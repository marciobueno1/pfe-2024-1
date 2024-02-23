import logo from "./logo.svg";
import "./App.css";
import { Frase } from "./components/Frase";
import { Numero } from "./components/Numero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Olá turma!!!</p>
        {Math.random() < 0.5 ? <Frase /> : <Numero />}
        <hr />
        {Math.random() < 0.5 && <Frase />}
      </header>
    </div>
  );
}

export default App;
