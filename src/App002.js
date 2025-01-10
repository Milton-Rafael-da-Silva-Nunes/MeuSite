import React, { Component } from "react";
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event) {
        const { nome, email, senha } = this.state;// Descontrução

        if (nome !== '' && email !== '' && senha !== '') {
            alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha}`);
        } else {
            this.setState({ error: 'Ops! Preencha todos os campos' });
        }

        event.preventDefault(); // Não deixa apagar os campos digitados (mantem o padrão)
    }

    render() {
        return (
            <div>

                <h1>Cadastro de Usuário</h1>

                {this.state.error && <p id="error">* {this.state.error} *</p>}

                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={this.state.nome}
                        onChange={(event) => this.setState({ nome: event.target.value })}></input>

                    <br />

                    <label>E-mail:</label>
                    <input type="text" name="email" value={this.state.email}
                        onChange={(event) => this.setState({ email: event.target.value })} id="email"></input>

                    <br />

                    <label>Senha:</label>
                    <input type="password" name="senha" value={this.state.senha}
                        onChange={(event) => this.setState({ senha: event.target.value })}></input>

                    <br />

                    <button type="submit">Cadastrar</button>

                </form>

            </div>
        );
    }
}

export default App;