import { Dispatch, SetStateAction } from "react"

export type State = {
    id: string,
    todo: string,
    isCompleted: boolean,
    userId: number,
}
export type TodosState = State[];

export const defaultValue: State = {
    id: '',
    todo: '',
    isCompleted: false,
    userId: 0,
}
//export type TodosContextState = { todoList: [],
//setTodoList: ()=>void
// addTodoItem: () => {},
//  delTodoItem: () => {}, //updateTodoItem: () => {}};

export type UserContextType = {
    todoList: State[],
    // setContextState: ()=>void
    setTodoList: Dispatch<React.SetStateAction<State[]>>,
    addTodoItem: (newItem: State) => void,
    delTodoItem: (id: string) => void, updateTodoItem: (item: State) => void,
    todoListLength: number
}