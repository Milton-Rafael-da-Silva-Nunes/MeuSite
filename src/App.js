import React, { Component } from "react";

class Equipe extends Component {
    render() {
        return (
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
                <Social />
                <hr />
            </div>
        );
    }
}

class Sobre extends Component {
    render() {
        return (
            <div>
                <h2>olá sou o(a) {this.props.nome} </h2>
                <h3>Cargo: {this.props.cargo} </h3>
                <h3>Idade: {this.props.idade} </h3>
            </div>
        );
    }
}

const Social = () => {
    return (
        <div>
            <a href="http://facebook.com.br">Facebook </a>
            <a href="http://linkedin.com.br">linkeIn </a>
            <a href="http://youtube.com.br">Youtube </a>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheça nossa Equipe:</h1>
            <Equipe nome="Rafael" cargo="Programador" idade="28" />
            <Equipe nome="Amanda" cargo="Frond-end" idade="22" />
            <Equipe nome="Aynara" cargo="Agilista" idade="25" />
        </div>
    );
}

export default App;