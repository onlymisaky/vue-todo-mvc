import { Vue, Component, Watch } from "vue-property-decorator";

import TodoHeader from "@/components/todo-header.tsx";
import TodoMain from "@/components/todo-main.tsx";
import TodoFooter from "@/components/todo-footer.tsx";
import { State } from 'vuex-class';
import { Todo } from './types/todo';
import { saveTodos } from "@/utils/store";

@Component({
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
})
export default class App extends Vue {

  @State(state => state.todo.todoList)
  todoList!: Todo[];

  @Watch('todoList', { deep: true, immediate: true })
  todoListChange(todos: Todo[]) {
    saveTodos(todos);
  }


  render() {
    return (
      <section class="todoapp">
        <todo-header />
        <todo-main />
        <todo-footer />
      </section>
    )
  }
}
