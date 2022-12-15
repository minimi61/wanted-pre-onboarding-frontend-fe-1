import React, { useState } from 'react'
import styled from 'styled-components'
import TodoItem from '../components/TodoItem'
import { useTodoContext } from '../hooks/TodoContext'

const TodoMain = () => {
  const [todoTask, setTodoTask] = useState('')
  const { todoList,addTodoItem } = useTodoContext();
  console.log(todoList)
  const onchangeTodo = (e) => {
    // if(todoTask == '') return
    setTodoTask(e.target.value)
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!todoTask) return
    addTodoItem(todoTask)
    setTodoTask('')
  }
  console.log(todoTask)
  return (
    <form onSubmit={handleOnSubmit}>
      <TodoContainer>
        <TodoTitle>TODO</TodoTitle>
        <TodoInput
          type='text'
          value={todoTask}
          onChange={onchangeTodo}
        />
        <AddBtn type='submit'>➕</AddBtn>
        <ListPadding>{
          todoList.map((todo, index) => <TodoItem todo={todo} key={index} idx={index} />)}
        </ListPadding>
      </TodoContainer>
    </form>
  )
}

const TodoContainer = styled.div`
  color: ${(props) => props.theme.color};
`

const TodoTitle = styled.div`
   margin-top: 200px;
   margin-left: 270px;
   color: ${(props) => props.theme.color};
   font-size: 3rem;
`
const TodoInput = styled.input`
  width: 300px;
  margin-top: 100px;
  margin-left: 150px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
`

const AddBtn = styled.button`
   width: 40px;
   height: 40px;
   border-radius: 40px;
   margin-left: 30px;
   background-color:${(props) => props.theme.color}; ;
   color: ${(props) => props.theme.bgColor};
   cursor: pointer;
`
const ListPadding = styled.div`
  margin-top: 100px;
  margin-left: 130px;
  color: ${(props) => props.theme.color};
`
export default TodoMain