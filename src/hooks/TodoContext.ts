import React, { createContext, useContext, useState } from 'react';
import { State, UserContextType, defaultValue, TodosState } from './types';

const TodoContext = createContext<UserContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {

  const [todoList, setTodoList] = useState<State[]>([defaultValue])

  const addTodoItem = (newItem: State) => {
    setTodoList([...todoList, id: newItem.id, todo: newItem.todo, isCompleted: newItem.isCompleted, userId: newItem.userId])
  }

  const delTodoItem = (id: string) => {
    const newList = todoList.filter((data, index) => data.id !== id)
    setTodoList(newList)
  }
  const updateTodoItem = (item: State) => {
    const changeData = todoList.map((data, idx) => item.id === data.id ? { id: item.id, todo: item.todo, isCompleted: item.isCompleted, userId: item.userId } : data)
    setTodoList(changeData)
  }
  let todoListLength = todoList.length

  const contextValue: UserContextType = {
    todoList,
    setTodoList,
    addTodoItem,
    delTodoItem,
    updateTodoItem,
    todoListLength
  }
  return (<TodoContext.Provider value={ {contextValue} }>
    { children }
    < /TodoContext.Provider>)
}

export const useTodoContext = () => useContext(TodoContext);
