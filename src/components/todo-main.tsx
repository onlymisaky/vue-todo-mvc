import { Vue, Component } from "vue-property-decorator";
import { namespace, State } from "vuex-class";
import { TodoStore, Todo } from "@/types/todo";
const TodoModule = namespace("todo");

@Component
export default class TodoMain extends Vue {
  @State(state => state.todo.todoList)
  todoList!: Todo[];

  @TodoModule.Getter
  completedList!: Todo[];

  @TodoModule.Mutation("TOGGLE_ALL_TODO")
  toggleAllTodo!: TodoStore.CommitToggleAllTodo;

  get allDone(): boolean {
    return this.completedList.length === this.todoList.length;
  }
  set allDone(completed: boolean) {
    this.toggleAllTodo(completed);
  }

  render() {
    return this.todoList.length ?
      (
        <section class="main">
          <input id="toggle-all"
            type="checkbox"
            class="toggle-all"
            vModel={this.allDone} />
          <label for="toggle-all">Mark all as complete</label>
          <router-view />
        </section>
      )
      : null;
  }
}

