import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            names:['User 1','User 2','User 3']
        }
    }
    render(){
        return (
            <ul>
            {
                this.state.names.map(function(name){
                return <TodoItem key={name} detail={name} />
                })
                
            }
            </ul>
        );
    }
}

class TodoItem extends React.Component{
    render(){
        return (
            <li>{this.props.detail}</li>
        );
    }
}
                
ReactDOM.render(<TodoList/>,document.getElementById('root'));