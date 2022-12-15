import React, { useState } from 'react'
import styled from 'styled-components'
import { useTodoContext } from '../hooks/TodoContext'

const TodoItem = ({ todo, idx }) => {
  const { delTodoItem } = useTodoContext();
  const [openInput, setOpenInput] = useState(false);
  const [inputContent, setInputContent] = useState('')

  const onChangeText = (e) => {
    setInputContent(e.target.value)
  }
  const deleteTask = () => {
    delTodoItem(idx)
  }
  const updateTask = () => {
    if (!inputContent) setOpenInput(!openInput)
    
  }
  return (
    <TodoUl>
      {openInput ? 
        <li><input value={inputContent} onChange={onChangeText}/></li>
        :
        <li> {todo.text}</li> 
      }
          <div>
            <Btns onClick={updateTask}>🖍</Btns>
            <Btns onClick={deleteTask}>❌</Btns>
          </div>
        </TodoUl>
  )
}

const TodoUl = styled.ul`
  display: flex;
  justify-content: space-between;
`

const Btns = styled.button`
  margin-left: 10px;
  cursor: pointer;
`

export default TodoItem