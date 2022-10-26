# react_typescript_01  
Curso de React: escrevendo com Typescript  

#### Criando um novo projeto:  
  
npx create-react-app {name} --template typescript  
cd {name}  
npm start  

#### Criando componente:  
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
