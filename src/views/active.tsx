
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

import TodoList from "@/components/todo-list.tsx";
import TodoListItem from "@/components/todo-list-item.tsx";
import { Todo } from "@/types/todo";

const TodoModule = namespace("todo");

@Component({
  components: {
    TodoList,
    TodoListItem
  }
})
export default class Active extends Vue {
  @TodoModule.Getter activeList!: Todo[];

  render() {
    return (
      <todo-list>
        {this.activeList.map(todo => {
          return (<todo-list-item slot="todoListItem" key={todo.id} todo={todo} />)
        })}
      </todo-list>
    )
  }
}

