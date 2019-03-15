import { Module } from 'vuex';
import { Todo } from '@/models/todo';

const todoModule: Module<{ todoList: Todo[] }, any> = {
  namespaced: true,
  state: {
    todoList: []
  },
  getters: {
    todoIdList: state => state.todoList.map(todo => todo.id)
  },
  mutations: {
    ADD_TODO(state, todo: Todo) {
      state.todoList.push(todo)
    },
    MODIFY_TODO(state, payload: { index: number, todo: Todo }) {
      state.todoList.splice(payload.index, 1, payload.todo);
    },
    DEL_TODO(state, index: number) {
      state.todoList.splice(index, 1);
    }
  },
  actions: {
    addTodo({ getters, commit }, title: string) {
      let id: number = 1;
      if (getters.todoIdList.length) {
        id = Math.max(...getters.todoIdList) + 1;
      }
      commit('ADD_TODO', { id, title, completed: false });
    },
    modifyTodo({ commit, state }, todo: Todo) {
      let index = state.todoList.findIndex(item => item.id === todo.id)
      commit('MODIFY_TODO', { index, todo });
    },
    delTodo({ commit, state }, todo: Todo) {
      const index = state.todoList.indexOf(todo);
      commit('DEL_TODO', index);
    }
  }
}

export default todoModule;
