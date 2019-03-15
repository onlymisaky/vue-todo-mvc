import { StoreOptions } from 'vuex';

interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

const todoState: StoreOptions<{ todoList: Todo[] }> = {
  state: {
    todoList: []
  },
  getters: {
    todoIdList: state => state.todoList.map(todo => todo.id)
  },
  mutations: {
    ADD_TODO(state, todo: Todo) {
      state.todoList.push(todo)
    }
  },
  actions: {
    addTodo({ getters, commit }, title: string) {
      let id: number = 1;
      if (getters.todoIdList.length) {
        id = Math.max(...getters.todoIdList) + 1;
      }
      commit('ADD_TODO', { id, title, completed: false });
    }
  }
}

export default todoState;
