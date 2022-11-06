import React, { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

const ToDoList = () => {
    const [todos, setTodos] = useState([])

    //add todo
    const addTodo = todo =>{
        if(!todo.text){
            return;
        }
        const newTodos = [todo,...todos]     //as same as    const newTodos = todos.push(todo)        
        setTodos(newTodos)
    }

    //remove todo
    const removeTodo = id =>{
        let updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    //completed todo
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(updatedTodos)
    }
  return (
    <div>
        <ToDoForm addTodo={addTodo}/>       {/*passing addTodo as a prop*/}
        <ToDo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
    </div>
  )
}

export default ToDoList