<<<<<<< HEAD:studies/src/components/lista/index.tsx
import { useState } from 'react';
import style from './Lista.module.scss';
import Item from './Item'

export default function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }, {
        tarefa: 'Amilton',
        tempo: '00:30:00'
    }])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar Estado", tempo: "05:00:00"}])
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        { ...item }
                        key={ index }
                    />
                ))}
            </ul>
        </aside>
    )
}
=======
import { useState } from 'react';
import style from './Lista.module.scss';
import Item from './Item'

export default function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }, {
        tarefa: 'Cu',
        tempo: '00:30:00'
    }])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar Estado", tempo: "05:00:00"}])
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        { ...item }
                        key={ index }
                    />
                ))}
            </ul>
        </aside>
    )
}
>>>>>>> 652bfa9537c484c8e075b1ebf8cf2f997aea2891:studies/src/components/Lista/index.tsx
