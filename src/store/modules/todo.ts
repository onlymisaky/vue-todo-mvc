import { StoreOptions } from 'vuex';

interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

const todoState: StoreOptions<{todoList: Todo[]}> = {
  state: {
    todoList: []
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
}

export default todoState;
