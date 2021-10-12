import { Todo, TodoState } from "../interfaces/interface";
import { Types } from "../types/Types";

type State = TodoState;

type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO" | "TOGGLE_TODO"; payload: { id: string } }
  | { type: "CLEAR_COMPLETED_TODO" }
  | { type: "SET_VISIBILITY_FILTER"; filter: string }
  | { type: "SWAP_TODO"; payload: Array<Todo> };

export const todoReducer = (state: State, action: TodoAction): State => {
  switch (action.type) {
    //Add todos
    case Types.add:
      return { ...state, todos: [...state.todos, action.payload] };

    //Filter out only todo that is active
    case Types.delete:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    //Toggle between completed and not completed todo
    case Types.toggle:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };

    //return  only not completed todos
    case Types.completed:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };

    case Types.swap:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
