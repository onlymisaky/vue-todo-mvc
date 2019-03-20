export interface Todo {
  id: number
  title: string
  completed: boolean
}

export namespace TodoStore {
  export interface State {
    todoList: Todo[]
  }

  export interface CommitAddTodo {
    (todo: Todo): void
  }
  export type CommitEditTodoTitle = (payload: { index: number, title: string }) => void;
  export type CommitToggleTodo = (payload: { index: number, completed: boolean }) => void;
  export type CommitToggleAllTodo = (completed: boolean) => void;
  export type CommitRemoveTodo = (index: number) => void;
  export type CommitRemoveCompletedTodo = () => void;

  export type DispatchAddTodo = (title: string) => void;
  export type DispatchEditTodoTitle = (payload: { id: number, title: string }) => void;
  export type DispatchToggleTodo = (payload: { id: number, completed: boolean }) => void;
  export type DispatchRemoveTodo = (id: number) => void;
}

