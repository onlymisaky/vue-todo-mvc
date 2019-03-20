
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";

import TodoList from "@/components/todo-list.tsx";
import TodoListItem from "@/components/todo-list-item.tsx";
import { Todo } from "@/types/todo";

@Component({
  components: {
    TodoList,
    TodoListItem
  }
})
export default class All extends Vue {
  @State(state => state.todo.todoList)
  todoList!: Todo[];

  render() {
    return (
      <todo-list>
        {this.todoList.map(todo => {
          return (<todo-list-item slot="todoListItem" key={todo.id} todo={todo} />)
        })}
      </todo-list>
    );
  }
}
