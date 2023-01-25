export type State = {
    id: string,
    todo: string,
    isCompleted: boolean,
    userId?: number|undefined,
}
export type TodosState = State[]| undefined;

export const defaultValue: State = {
    id: '',
    todo: '',
    isCompleted: false,
    userId: 0,
}