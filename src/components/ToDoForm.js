import React, { useState } from 'react'

const ToDoForm = ({addTodo}) => {
    const [input, setInput] = useState('')
    
    const handleChange = e => {
        setInput(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        addTodo({
            id: Math.round(Math.random() *10000),
            text: input,
            isCompleted: false
        })
        setInput('')
    }
  return (
    <div>
        <form className='todo-form'>
            <input className='input-text' type="text" placeholder='Add a todo' value={input} name='text' onChange={handleChange}/>
            <button className='submit-btn' type='submit' onClick={handleSubmit}>Add Todo</button>
        </form>
    </div>
  )
}

export default ToDoForm