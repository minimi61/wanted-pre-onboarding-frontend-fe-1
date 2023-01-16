import * as React from 'react';
import { useState } from 'react'
import styled from 'styled-components'
import { useTodoContext } from '../hooks/TodoContext'
import instance from '../api/apis'
import { State } from '../hooks/types';

const TodoItem = ({ todo, idx }:{todo:State, idx: string}) => {
  const useContext = useTodoContext();
  const [openInput, setOpenInput] = useState(false);
  const [inputContent, setInputContent] = useState('')
  const onChangeText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value)
  }
  const clickUpdate = () => {
    setOpenInput(!openInput)
  }


  const updateTask = async() => {
    if (inputContent==='') { setOpenInput(!openInput) }
    if (inputContent) {
      await instance.put(`todos/${idx}`,{todo:inputContent, isCompleted:todo.isCompleted})
      .then(res=> useContext?.updateTodoItem(res.data))

      setOpenInput(false)
    }
  }
  const deleteTask = async() => {
    await instance.delete(`todos/${idx}`)
    useContext?.delTodoItem(idx)
  }
  
  return (
    <TodoUl>
      {openInput ? 
        <TodoLi><input value={inputContent} onChange={onChangeText}/></TodoLi>
        :
        <TodoLi> {todo.todo}</TodoLi> 
      }
          <div>
        {openInput ?<Btns onClick={updateTask}>✔</Btns> : <Btns onClick={clickUpdate}>🖍</Btns> }
            <Btns onClick={deleteTask}>❌</Btns>
          </div>
        </TodoUl>
  )
}

const TodoUl = styled.ul`
  display: flex;
  justify-content: space-between;
`

const TodoLi = styled.li`
    color: ${(props) => props.theme.color};

`

const Btns = styled.button`
  margin-left: 10px;
  cursor: pointer;
`

export default TodoItem