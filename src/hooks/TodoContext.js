import React, { createContext,useContext,useState } from 'react';


const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [todoList, setTodoList] = useState([])
  
  const addTodoItem = (newItem) => {
    setTodoList([...todoList, { id: newItem.id, todo: newItem.todo, isCompleted: newItem.isCompleted, userId: newItem.userId }])
  }
  const delTodoItem = (id) => {
    const newList = todoList.filter((data, index) => data.id !== id)
    setTodoList(newList)
  }
  const updateTodoItem = (item) => {
    const changeData = todoList.map((data, idx) =>item.id === data.id ?  {id:item.id, todo: item.todo, isCompleted:item.isCompleted, userId: item.userId}: data)
    setTodoList(changeData)
  }
  let todoListLength = todoList.length

  const contextValue = {
    todoList,
    setTodoList,
    addTodoItem,
    delTodoItem,
    updateTodoItem,
    todoListLength
  }
  return  <TodoContext.Provider value={contextValue}>
    {children}
  </TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);
