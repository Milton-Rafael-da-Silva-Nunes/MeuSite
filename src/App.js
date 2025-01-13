import React, { useState } from "react";

function App() {

    const [tarefas, setTarefas] = useState([
        'Pagar a conta de Luz',
        'Estudar ReactJS Hookas'
    ]);

    const [input, setInput] = useState('');

    function handleAdd() {
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>
                        {tarefa}
                    </li>
                ))}
            </ul>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button type="button" onClick={handleAdd}>Adicionar</button>

        </div>
    );
}

export default App;