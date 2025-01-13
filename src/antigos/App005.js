import React, { Component } from "react";
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 1
        };

        this.iniciar = this.iniciar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    iniciar() {

    }

    limpar() {
        this.setState({numero: 0});
    }

    render() {
        return (
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img" />

                <a className="timer"> {this.state.numero.toFixed(1)} </a>

                <div className="areaBtn">

                    <a className="botao" onClick={this.iniciar}>iniciar</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>

                </div>
            </div>
        );
    }
}

export default App;