import * as React from 'react';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { useTodoContext } from '../../api/TodoContext'
import instance from '../../api/apis'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { addTodo, fetchTodos } from '../../api/RQapi';
import { TodosState } from '../../type/types';
import { AxiosError } from 'axios';

const TodoMain = () => {
  ///ContextAPI
  // const useContext = useTodoContext()
  const queryClient = useQueryClient()

  //RQ Queries
  const {data,refetch} = useQuery(['todos'],fetchTodos)

  //RQ Mutations
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['todos'])
    },
  })
  
  ///contextAPI버전
  //첫 데이터 받아오기
  // useEffect(() => {
  //   try {
  //     instance.get(`todos`)
  //       .then((res)=> useContext?.setTodoList(res.data))
  //   }
  //   catch (err:any) {
  //     if (err.response.data.statusCode === 401) {
  //       alert("잘못된 접근입니다.");
  //     }
  //   }
  // }, [])

  const [todoTask, setTodoTask] = useState('')
  const onchangeTodo = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodoTask(e.target.value)
  }

  const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoTask) return
    // if (useContext?.todoListLength >= 15) return alert('15개 이하로 작성해주세요')

    ///contextAPI버전
    // instance.post(`todos`, { todo: todoTask })
    //   .then(res => useContext?.addTodoItem(res.data))
    
    //RQ버전
    mutation.mutate(todoTask)
    setTodoTask('')
  }

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
        <ListPadding>
          {data?.map((todo, index) => <TodoItem todo={todo} key={index} idx={todo.id} />)}
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
   margin-left: 40%;
   color: ${(props) => props.theme.color};
   font-size: 3rem;
`
const TodoInput = styled.input`
  width: 50%;
  margin-top: 100px;
  margin-left: 20%;
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
  width: 80%;
  margin-top: 100px;
  margin-left: 50px;
  color: ${(props) => props.theme.color};
`
export default TodoMain