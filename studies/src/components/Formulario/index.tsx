import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { Itarefa } from '../../types/tarefa';

class Formulario extends React.Component<{ 
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state }])
        this.setState({
            tarefa: "",
            tempo: "00:00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um estudo</label>
                    <input name="tarefa" id="tarefa" placeholder="O que você quer estudar" type="text"
                        value={this.state.tarefa} onChange={ evento => this.setState({ ...this.state, tarefa: evento.target.value })}/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" type="time" 
                        value={this.state.tempo} onChange={ evento => this.setState({ ...this.state, tempo: evento.target.value })} required/>
                </div>
                <Botao type="submit">
                    Botaozinho
                </Botao>
            </form>
        )
    }
}

export default Formulario;