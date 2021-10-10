export interface Todo {
    id: string;
    desc: string;
    isCompleted: boolean;
}

export interface TodoState {
    todos: Todo[]
}