import React from "react";

const BemVindo = (props) => {
    return (
        <div>
            <h2>Bem-vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos.</h3>
        </div>
    );
}

function App() {
    return (
        <div>
            Olá Mundo!
            <BemVindo nome ="Rafael" idade="28"/>
            <BemVindo nome ="José" idade="18"/>
        </div>
    );
}

export default App;