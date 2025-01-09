import React, { Component } from "react";

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar() {
        var usaurio = document.getElementById('nome').value;
        this.setState({ nome: usaurio });
    }

    sair() {
        this.setState({ nome: '' });
    }

    render() {
        return (
            <div>
                <h2>Bem-vindo(a) {this.state.nome} </h2>
                <input id="nome"></input>

                <button onClick={this.entrar}>
                    Entrar
                </button>
                <button onClick={this.sair}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;