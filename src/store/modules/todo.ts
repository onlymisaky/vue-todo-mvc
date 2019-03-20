import { Module } from 'vuex';
import { Todo, TodoStore } from '@/types/todo'

const todoModule: Module<TodoStore.State, any> = {
  namespaced: true,
  state: {
    todoList: []
  },
  getters: {
    idList: state => state.todoList.map(todo => todo.id),
    activeList: state => state.todoList.filter(todo => !todo.completed),
    completedList: state => state.todoList.filter(todo => todo.completed),
  },
  mutations: {
    ADD_TODO(state, todo: Todo) {
      state.todoList.push(todo)
    },
    EDIT_TODO_TITLE(state, { index, title }) {
      state.todoList[index].title = title;
    },
    TOGGLE_TODO(state, { index, completed }) {
      state.todoList[index].completed = completed;
    },
    TOGGLE_ALL_TODO(state, completed) {
      state.todoList.forEach(todo => todo.completed = completed);
    },
    REMOVE_TODO(state, index: number) {
      state.todoList.splice(index, 1);
    },
    REMOVE_COMPLETED_TODO(state) {
      let index = state.todoList.length - 1;
      while (index > -1) {
        if (state.todoList[index].completed) {
          state.todoList.splice(index, 1);
        }
        index--;
      }
    }
  },
  actions: {
    addTodo({ getters, commit }, title: string) {
      let id: number = 1;
      if (getters.idList.length) {
        id = Math.max(...getters.idList) + 1;
      }
      commit('ADD_TODO', { id, title, completed: false });
    },
    editTitle({ getters, commit }, { id, title }) {
      const index = getters.idList.findIndex((todoId: number) => todoId === id);
      commit('EDIT_TODO_TITLE', { index, title });
    },
    toggleTodo({ getters, commit }, { id, completed }) {
      const index = getters.idList.findIndex((todoId: number) => todoId === id);
      commit('TOGGLE_TODO', { index, completed });
    },
    removeTodo({ commit, state }, todo: Todo) {
      const index = state.todoList.indexOf(todo);
      commit('REMOVE_TODO', index);
    },
  }
}

export default todoModule;
