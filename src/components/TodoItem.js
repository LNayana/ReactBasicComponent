import React from 'react';

//commented below code as this is stateless we don't need class component. Instead we will use stateless functional component
/*class TodoItem extends React.Component{
    render(){
        return (
            <li onClick={ () =>{ this.props.clickHandler(this.props.index);}} className={this.props.detail.completed ? 'completed':''}>{this.props.detail.name}</li>
        );
    }
}*/


const TodoItem = (props) => {
    return (
        <li onClick={ () =>{ props.clickHandler(props.index);}} className={props.detail.completed ? 'completed':''}>{props.detail.name}</li>
    );
}

export default TodoItem;