import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

import { TodoStore } from "@/types/todo.ts";
import TodoInput from "@/components/todo-input.tsx";

const TodoModule = namespace("todo");

@Component({
  components: {
    TodoInput
  }
})
export default class TodoHeader extends Vue {
  title: string = "";

  @TodoModule.Action
  addTodo!: TodoStore.DispatchAddTodo;

  onAddTodo() {
    if (this.title.trim()) {
      this.addTodo(this.title);
      this.title = "";
    }
  }

  render() {
    return (
      <header class="header">
        <h1>todos</h1>
        <todo-input vModel={this.title} onEnter={this.onAddTodo} />
      </header>
    )
  }
}

