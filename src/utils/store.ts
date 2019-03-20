import { Todo } from "@/types/todo";

function loadTodos(): Todo[] {
  let todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos) as Todo[];
  }
  return [];
}

function saveTodos(todos: Todo[]): void {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export {
  loadTodos,
  saveTodos
}
