import instance from "./apis"
import { State, TodosState } from "../type/types"

export const fetchTodos = async():Promise<TodosState> => {
  const response = await instance.get(`todos`)
  return response.data
}

export const addTodo = async(tosoState:string):Promise<State> => {
  const response = await instance.post(`todos`,{todo: tosoState})
  return response.data
}

export const updateTodo = async(tosoState:State):Promise<State> => {
  const response = await instance.put(`todos/${tosoState.id}`,{todo: tosoState.todo, isCompleted:tosoState.isCompleted})
  return response.data
}

export const deleteTodo = async(tosoState:string):Promise<State> => {
  const response = await instance.delete(`todos/${tosoState}`)
  return response.data
}
