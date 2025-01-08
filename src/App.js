import React from "react";

const Equipe = (props) => {
    return(
        <div>
            <Sobre userName={props.nome} cargo={props.cargo} idade={props.idade}/>
            <MediaSocial fb={props.facebook}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.userName}</h2>
            <h4>Cargo: {props.cargo}</h4>
            <h4>idade: {props.idade}</h4>
        </div>
    );
}

const MediaSocial = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>LinkedIn </a>
            <a>YouTube </a>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheça nossa Equipe:</h1>    
            <Equipe nome="Rafael" cargo="Programador" idade="28" facebook="http://google.com.br"/>  
            <Equipe nome="José Maria" cargo="Agricultor" idade="65" facebook="http://google.com.br"/> 
            <Equipe nome="Maria Clara" cargo="Manicure" idade="32" facebook="http://google.com.br"/>     
        </div>
    );
}

export default App;