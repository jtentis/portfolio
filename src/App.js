import logo from "./logo.svg";
import "./App.css";

let string = "arroz";

function App() {
  const teste = (valor) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{valor}</p>
        <a
          className="App-link"
          href="https://localhost/moodle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Moodle
        </a>
      </header>
    </div>
  );
  return teste(string);
}

export default App;
