import React from 'react';
import Botao from '../botao';
import './style.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione um estudo</label>
                    <input name="tarefa" id="tarefa" placeholder="O que você quer estudar" type="text"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">Tempo</label>
                    <input name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" type="time" required/>
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;