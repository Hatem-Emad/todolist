import React, { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import axios from 'axios'
import { body } from 'express-validator'

const ToDoList = () => {
    const [todos, setTodos] = useState([])

    //add todo
    const addTodo =  todo =>{
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

    //get all todos
    const getTodos = async (_res) =>{
        try {
            const res = await fetch('/api/todos')
            const body = await res.json()
            console.log(body)
            const newTodos = [body, ...todos]           
            setTodos(newTodos)
        } catch (error) {
            console.error(error.message)
        }
        return(body)
    }

  return (
    <div>
        <h1 className='head'>To Do List</h1>
        <button onClick={getTodos}>geet meeeeee</button>
        <div>
            <ToDoForm addTodo={addTodo}/>       {/*passing addTodo as a prop*/}
            <ToDo todos={todos} getTodos={getTodos} removeTodo={removeTodo} completeTodo={completeTodo} />
        </div>
        <footer>Created by <a href="#">Hatem_Emad</a></footer>
    </div>
  )
}

export default ToDoList