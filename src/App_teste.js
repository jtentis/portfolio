import "./App.css";

function handleSubmit(e) {
    e.preventDefault()
    const {username, password } = e.target.elements
    console.log({username: username.value, password: password.value })
}
function App2(){
    const Teste = () => (
        <div className="App-header">
            <form onSubmit={handleSubmit}>
                <input className="texto" type="text" id="username"/>
                <input className="texto" type="text" id="password"/>
                <input className="button" type="submit" value="Login" />
            </form>
            <p>oi</p>
        </div>
    )
    return Teste();
}
  export default App2;