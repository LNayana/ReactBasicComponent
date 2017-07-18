import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component{
    constructor(){
        super();//It calls React.Component
        this.name = 'Hello';
    }
    render(){
        return (
            <h1>{this.name}</h1>
        );
    }
}

class World extends React.Component{
    render(){
        return(
        <h1 className='foo'>World</h1>
        );
    }
}

class HelloWorld extends React.Component{
    render(){
        return (
        <div>
            <Hello />
            <World />
            </div>
        );
    }
}

ReactDOM.render(<HelloWorld/>,document.getElementById('root'));