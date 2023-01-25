import { Dispatch } from "react"

export type State = {
    id: string,
    todo: string,
    isCompleted: boolean,
    userId?: number|undefined,
}
export type TodosState = State[];

export const defaultValue: State = {
    id: '',
    todo: '',
    isCompleted: false,
    userId: 0,
}

export type UserContextType = {
    todoList: State[],
    setTodoList: Dispatch<React.SetStateAction<State[]>>,
    addTodoItem: (newItem: State) => void,
    delTodoItem: (id: string) => void,
    updateTodoItem: (item: State) => void,
    todoListLength: number | undefined
}