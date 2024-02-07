import logo from "./logo.svg";
import "./App.css";

let string = "Formulário";

// JavaScript for label effects only
function App() {
  const teste = (valor) => (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>{valor}</p>
        </div>
        <div className="form">
          <input className="texto" type="Nome" placeholder="Nome" />
          <input className="texto" type="email" placeholder="E-mail" />
          <input className="texto" type="password" placeholder="Senha" />
          <input className="button" type="submit" />
        </div>
      </header>
    </div>
  );
  return teste(string);
}
export default App;
