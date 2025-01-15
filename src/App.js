import React, { useState, useEffect, useMemo } from "react";

function App() {

    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    function handleAdd() {
        setTarefas([...tarefas, input]);
        setInput('');
    }

    // Use memo executa o LENGTH toda vez que ele for add
    // Com isso não precisa executar o RETURN toda vez que for add uma tarefa nova.
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