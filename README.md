# react_typescript_01  
Curso de React: escrevendo com Typescript  

#### Criando um Novo Projeto:  

```
npx create-react-app {name} --template typescript  
```
```
cd {name}  
```  
```
npm start  
```  

#### Instalando SASS
```
npm install --save-dev sass
```

#### Criando Componente via Classe (deprecated):  
```js
import React from 'react';

class Botao extends React.Component {
    render() {
        return (
            <button>
                Botãozinho
            </button>
        )
    }
}

export default Botao;
```

#### Criando Componente via Função:
```js
import React from 'react'

function Lista() {
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                <li>
                    <h3>React</h3>
                    <span>04:00:00</span>
                </li>
            </ul>
        </aside>
    )
}

export default Lista;
```

#### Criando Componente via Função Dinamicamente "Don't repeay yourself (DRY)":
```js
import React from 'react'

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
```
