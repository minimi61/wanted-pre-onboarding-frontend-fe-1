import React, { createContext,useContext,useState } from 'react';

const initialTodo = [
  {
    id: 1,
    text: '과제 제출하기',
      }
]
let idNum = 1
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [todoList, setTodoList] = useState(initialTodo)

  const addTodoItem = (newItem) => {
    setTodoList([...todoList, { id: idNum++, text: newItem }])
  }
  const delTodoItem = (item) => {
    const newList = todoList.filter((_, index) => index !== item)
    setTodoList(newList)
  }
  const updateTodoItem = (content) => {
    
  }

  const contextValue = {
    todoList,
    addTodoItem,
    delTodoItem
  }
  return  <TodoContext.Provider value={contextValue}>
    {children}
  </TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);
