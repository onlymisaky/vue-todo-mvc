import { Vue, Component } from "vue-property-decorator";
import { namespace, State } from "vuex-class";

import { Todo, TodoStore } from "@/types/todo";

const TodoModule = namespace("todo");

@Component
export default class TodoFooter extends Vue {
  routes: { name: string; label: string }[] = [
    {
      name: "all",
      label: "All"
    },
    {
      name: "active",
      label: "Active"
    },
    {
      name: "completed",
      label: "Completed"
    }
  ];

  @State(state => state.todo.todoList)
  todoList!: Todo[];

  @TodoModule.Getter
  activeList!: Todo[];

  @TodoModule.Mutation("REMOVE_COMPLETED_TODO")
  removeCompletedTodo!: TodoStore.CommitRemoveCompletedTodo;

  get remaining(): number {
    return this.activeList.length;
  }

  onRemoveCompleted() {
    this.removeCompletedTodo();
  }

  render() {
    return (
      <footer class="footer" vShow={this.todoList.length}>
        <span class="todo-count">
          <strong>{this.remaining}</strong>
          item left
        </span>
        <ul class="filters">
          {this.routes.map(route => {
            return (
              <li key={route.name}>
                <router-link to={{ name: route.name }}>
                  {route.label}
                </router-link>
              </li>
            )
          })}
        </ul >
        <button class="clear-completed"
          onClick={this.onRemoveCompleted}
          vShow={this.todoList.length > this.remaining} >
          Clear completed
        </button>
      </footer>
    )
  }

}
