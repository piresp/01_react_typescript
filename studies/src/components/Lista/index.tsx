import style from './Lista.module.scss';
import Item from './Item';
import { Itarefa } from '../../types/tarefa';

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void 
}

export default function Lista({ tarefas, selecionaTarefa } : Props) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        { ...item }
                        key={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}