import Botao from "../Botao";
import Relogio from "./Relogio";

export default function Cronometro() {
    return (
        <div>
            <p>escolha um card e inicie o Cronometro</p>
            <div>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}