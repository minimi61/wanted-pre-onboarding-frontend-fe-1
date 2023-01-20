import * as React from 'react';
import { useState } from 'react'
import styled from 'styled-components'
// import { useTodoContext } from '../api/TodoContext'
import { State } from '../type/types';
import { updateTodo,deleteTodo } from '../api/RQapi';
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

const TodoItem = ({ todo, idx }: { todo: State, idx: string }) => {
  // const useContext = useTodoContext();
   //RQ Mutations
   const queryClient = useQueryClient()

  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['todos'])
    }
  })
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['todos'])
    }
  })
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
    
    ///ContextAPI
    // if (inputContent) {
    //   await instance.put(`todos/${idx}`,{todo:inputContent, isCompleted:todo.isCompleted})
    //   .then(res=> useContext?.updateTodoItem(res.data))
    const todoData:State = {
      id:idx,
      todo:inputContent,
      isCompleted: todo.isCompleted,
      // userId: todo.userId
    }
    if (inputContent) {
      //RQ버전
      updateMutation.mutate(todoData)
    }
    setOpenInput(false)
    }
    
  
  const deleteTask = async () => {
    //ContextAPI
    // await instance.delete(`todos/${idx}`)
    // useContext?.delTodoItem(idx)

    //RQ버전
    deleteMutation.mutate(idx)
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