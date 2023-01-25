import instance from "./apis"
import { State, TodosState } from "../type/types"

export const fetchTodos = async (): Promise<TodosState> => {
  try {
    const response = await instance.get(`todos`)
    return response.data
  } catch(err){
    console.log('에러 발생')
  }
}

export const addTodo = async (tosoState: string): Promise<State | undefined> => {
  try {
    const response = await instance.post(`todos`, { todo: tosoState })
    return response.data
  } catch(err){
    console.log(err)
  }
}

export const updateTodo = async(tosoState:State):Promise<State |undefined> => {
  try {
  const response = await instance.put(`todos/${tosoState.id}`, { todo: tosoState.todo, isCompleted: tosoState.isCompleted })
  return response.data } catch(err){
    console.log(err)
  }
}

export const deleteTodo = async(tosoState:string):Promise<State|undefined> => {
  try {
  const response = await instance.delete(`todos/${tosoState}`)
  return response.data } catch(err){
    console.log(err)
  }
}
