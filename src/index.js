import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem.js'; // relative path

class TodoList extends React.Component{
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.state={
            tasks:[
                {
                 name:'Buy Milk',
                    completed:false
                },
                {
                 name:'Buy Cheese',
                    completed:false
                },
                {
                 name:'Buy Sweets',
                    completed:false
                },
                {
                 name:'Buy Snacks',
                    completed:false
                }
            ]
        }
    }
    changeStatus(index){
        console.log(this.state.tasks[index]);
        //Below code to toggle this.state.tasks.completed value
        var tasks=this.state.tasks;
        var task = tasks[index];
        task.completed= !task.completed;
//set the modified value into original this.state to reflect the changes 
this.setState({tasks:tasks});        
    }
    render(){
        return (
            <ul>
            {
                this.state.tasks.map((task,index) => {
                return <TodoItem key={task.name} clickHandler={this.changeStatus} index={index} detail={task} />
                })
                
            }
            </ul>
        );
    }
}
                
ReactDOM.render(<TodoList/>,document.getElementById('root'));