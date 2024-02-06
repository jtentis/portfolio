import logo from "./logo.svg";
import "./App.css";

let string = "Variável";

function App() {
    const teste = (valor) => (
      <div className="App">
        <header className="App-header">
          <div className="form">
            <label>
              Nome <input className="texto" type="text"/>
            </label>
            <label>
              Email <input className="texto" type="email"/>
            </label>
            <label>
              Password <input className="texto" type="password"/>
            </label>
            <label>
              <input className="button" type="submit"/>
            </label>
          </div>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>{valor}</p>
          </div>
        </header>
      </div>
    );
    return teste(string);
  }
  export default App;