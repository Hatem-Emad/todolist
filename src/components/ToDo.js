import React from 'react'
import {TiTick, TiTimes} from 'react-icons/ti'
const ToDo = ({todos, removeTodo, completeTodo}) => {

  return todos.map((todo, index) =>
    <div className={todo.isCompleted? 'completed-todo' : 'normal-todo'}  key={index}>
        <div className='todo-text'>{todo.text}</div>
        <div className='todo-icons' key={todo.id}>
            <TiTick className='tick' onClick={() => {completeTodo(todo.id)}}></TiTick>
            <TiTimes className='cross' onClick={() => {removeTodo(todo.id)}}></TiTimes>
        </div>
    </div>
  )
}

export default ToDo