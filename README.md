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

#### Instalando SASS:
```
npm install --save-dev sass
```

#### Instalando typescript-plugin-css-modules:
```
npm install -D typescript-plugin-css-modules
```
Dentro de tsconfig.json:  
```js
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

#### Criando Componente via Classe (deprecated):
Os desenvolvedores do React disseram que não pretendem continuar implementando novas funcionalidades para componentes criados por Classe.  
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
#### Usando CSS Module para implementar estilos
Usando este modulo, dentro do html do site se altera a classe do css criando um id após a classe, torna mais seguro a implementação de novas classes sem causar conflito.  

```js
import React from 'react'
import style from './Lista.module.scss';

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
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
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
#### Props como children e atributo convencional:
Declaração do componente, criado passando parâmetro **<{ children:any }>**.
```js
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{ children:any }> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
```
Chamando componente criado:
```js
<Botao>
    Botãozinho
</Botao>
```
-------------------
Declaração do componente, criado passandpo parâmetro convencional **<{ texto: string }>**
```js
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{ texto: string}> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;
```
Chamando componente criado:  
```js
<Botao
    texto="Botãozinho" 
/>
```
