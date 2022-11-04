# react_typescript_01  
Curso de React: escrevendo com Typescript  

### Criando um Novo Projeto:  
Instalando o projeto:  
```
npx create-react-app project_name --template typescript  
```
```
cd project_name  
```  
```
npm start  
```  
Instalando o SASS:  
```
npm install --save-dev sass  
```
Instalando typescript-plugin-css-modules:  
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

### Criando Componente via Classe (deprecated):
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

### Criando Componente via Função:
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

### Criando Componente via Função Dinamicamente "Don't repeay yourself (DRY)":
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
### Usando CSS Module para implementar estilos:
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
### Props como 'children' e por 'atributo convencional':
Declaração do componente, criado passando parâmetro ```<{ children:any }>```:
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
Declaração do componente, criado passandpo parâmetro convencional ```<{ texto: string }>```:
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
### SRP Single Responsability principle:
Neste bloco de codigo separamos a criação do ```<li></li>``` e tiramos a responsabilidade dela em conter as props. O mesmo é importado, vindo de uma subpasta de '/Lista'.  

``` key={ index } ``` é necessario para que o map "não se perca"  
``` { ...item } ``` retira a necessidade de chamar as props dentro de ``` <Item /> ``` como ``` <Item tarefa={item.tarefa} tempo={item.tempo} /> ```  
Diretorio: /Lista/index.tsx:  
```js
import style from './Lista.module.scss';
import Item from './Item'

export default function Lista() {
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
                    <Item
                        {...item}
                        key={index}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
```
-------------------
Passagem implicita de props na função:  

/Lista/Item/index.tsx  
```js
import style from '../Lista.module.scss'

export default function Item({ tarefa, tempo } : { tarefa: string, tempo: string }) {
    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}
```

### React Fragment:
Quando se cria um componente e o mesmo necessita de um **componente pai** deve se usar esta sintaxe para **"burlar"** o xml.  
Primeira forma utiliza-se ``` <React.Fragment> ... </React.Fragment>``` para tal necessidade.  
```js
import React from 'react'

export default function Relogio() {
    return (
        <React.Fragment>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
        </React.Fragment>
    )
}
```
-------------------
A segunda forma, mais limpa, utiliza-se as tags ```<> ... </>``` para alcançar o mesmo resultado.  
```js
export default function Relogio() {
    return (
        <>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
        </>
    )
}
```
### State:  
Nesta parte do codigo nós alteramos o estado do componente Lista para que a cada click ele adicione uma array pre-determinada nova.  
##### Setando Tarefas:
Agora, nossa necessidade é entender a função ``` useState() ```.  
O **primeiro** parâmetro ``` initialState: ``` indica o **estado inicial** do parâmetro passado, neste caso, passamos uma array com três elementos.  
O **segundo** parâmetro ``` React.Dispatch<React.SetStateAction ``` recebe o parâmetro de **alteração de estado**.  
```js
const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }])
```
Logo após declarar o array **tarefas** precisamos chamar o evento que mudará este estado, neste caso será o ``` onClick= ```. Após chamar o ``` onClick= ```, chamaremos uma função anônima representada por ``` () => { ... } ``` juntamente com o **segundo** parâmetro passado ``` setTarefas ```, dentro dele nós passaremos o array pre-existente ```...tarefas``` e o novo objeto que será introduzido ``` { tarefa: "Estudar Estado", tempo: "05:00:00"} ```.  
```js
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
```

### Pegando Parâmetros de Class Component: 

Dentro de class, antes de render(), temos que criar um objeto que vai conter as propriedades que queremos pegar, neste caso, será pego a 'tarefa' e o 'tempo'.  

```js
state = {
        tarefa: "",
        tempo: "00:00"
    }
```

Dentro da tag ``` <input /> ``` de tipo **"text"** definimos seu valor com o objeto criado a cima:  

```js
value={this.state.tarefa} 
```

E capturamos o objeto alterado pelo evento com a propriedade:  

```js
onChange={ evento => this.setState({ ...this.state, tarefa: evento.target.value })} 
```  

Na outra tag ``` <input /> ``` de tipo **"time"** definimos seu valor com o objeto criado a cima:  

```js
value={this.state.tempo} 
```

E capturamos o objeto alterado pelo evento com a propriedade:  

```js 
onChange={ evento => this.setState({ ...this.state, tempo: evento.target.value })} 
```  

Para mostrarmos no console o objeto capturado no submit devemos criar uma função que irá receber um **evento** de tipo **React.FormEvent**:    

```js
adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        console.log('state: ', this.state);
    }
```

Agora para que tudo isso funcione devemos mudar uma propriedade dentro da tag ``` <form> </form> ```. Passamos a função **bind** por conta de ser uma class compontent que não consegue acessar o atributo **this** de "fora de seu escopo":  

```js
onSubmit={this.adicionarTarefa.bind(this)} 
```

Segue o codigo completo:  

```js
import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        console.log('state: ', this.state);
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
                <Botao>
                    Botaozinho
                </Botao>
            </form>
        )
    }
}

export default Formulario;
```

### Passando Tipo Para Componente React:

Aqui nós queremos passar o tipo **submit** dentro de type no compontente **"Botão"** como descrito abaixo.  

```js
<Botao type="submit">
      Botaozinho
</Botao>
```
Para isso entraremos dentro do componente botão e passaremos o seguinte atributo que ele pode ou não receber:  

```js
React.Component<{ type?: "button" | "submit" | "reset" | undefined, children: any }>
```

Caso ele não receba nenhum parâmetro nós criaremos uma objeto constante antes de render para armazenar o type:  

```js
const { type = "button" } = this.props;
```

Segue o codigo completo do componente:  

```js
import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{ type?: "button" | "submit" | "reset" | undefined, children: any }> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
```

### Interface:

As interfaces são um forma de organizar nosso código e reaproveitar boa parte dele, para que não precisemos declarar as mesmas variaveis sempre.  
>
Como boa prática de programação é imprescindível criar uma pasta dentro de 'src/' chamada 'types/' para armazenar todas as interfaces criadas.  
O código a seguir representa a interface de tarefa, nomeada como 'Itarefa'.  

```js

export interface Itarefa {
    tarefa: string,
    tempo: string
}

```

Para importar, devemos receber 

'Itarefa[]' será utilizada em 'Formulario/index.tsx' e 'Lista/index.tsx'.  
>  
O codigo a seguir é utilizado em 'Lista/index.tsx' para receber os parâmetros utilizando a interface como forma de deixar o codigo mais sucinto.  

```js

export default function Lista({ tarefas } : { tarefas: Itarefa[] }) {
    ...
}

```

Agora o 'Itarefas[]' sendo utilizado dentro de 'Formulario/index.tsx'.  

```js

export default function Lista({ tarefas } : { tarefas: Itarefa[] }) {
    ...
}

```

```js

class Formulario extends React.Component<{ 
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    
    ...

}
```  
