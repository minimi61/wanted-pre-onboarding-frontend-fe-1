import { Dispatch } from "react"
import { State } from "./types"

export type UserContextType = {
  todoList: State[],
  setTodoList: Dispatch<React.SetStateAction<State[]>>,
  addTodoItem: (newItem: State) => void,
  delTodoItem: (id: string) => void,
  updateTodoItem: (item: State) => void,
  todoListLength: number | undefined
}