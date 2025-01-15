import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {

    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    /*
    Aqui eu pego as minhas terefas salvas no meu STORAGE
    pego elas como JSON e converto para lista novamente.
    */
    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }

    }, []);

    /*
     UseEffect
     Aqui ele usar o localStorage para criar um mini bd para armazenar minhas tarefas. 

     Ele transforma a LISTA em string usando o JSON.stringfy
     */
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    /*
    UseCallback
    No final que tem o ARRAY eu preciso passar todos os HOOKS que estao sendo usados
    nessa função (TAREFAS= lista / INOUT= nova tarefa).
    */
    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input]);
        setInput('');
    }, [input, tarefas]) ;

    /* 
    UseMemo executa o LENGTH toda vez que ele for add
    Com isso não precisa executar o RETURN toda vez que for add uma tarefa nova.
    */
    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

    return (
        <div>

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>
                        {tarefa}
                    </li>
                ))}
            </ul>

            <br />
            <strong>Você tem {totalTarefas} tarefas!</strong>
            <br />

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button type="button" onClick={handleAdd}>Adicionar</button>

        </div>
    );
}

export default App;