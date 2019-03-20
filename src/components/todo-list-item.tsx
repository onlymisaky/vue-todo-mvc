import { Vue, Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Todo, TodoStore } from "@/types/todo";

const TodoModule = namespace("todo");

@Component({})
export default class TodoListItem extends Vue {
  @Prop({
    required: true
  })
  private readonly todo!: Todo;

  @TodoModule.Action("toggleTodo")
  toggleTodo!: TodoStore.DispatchToggleTodo;

  @TodoModule.Action("editTitle")
  editTitle!: TodoStore.DispatchEditTodoTitle;

  @TodoModule.Action("removeTodo")
  removeTodo!: TodoStore.DispatchRemoveTodo;

  editing: boolean = false;
  $refs!: {
    input: HTMLInputElement;
  };

  get id(): number {
    return this.todo.id;
  }

  onToggle(e: Event) {
    const completed: boolean = (e.target as HTMLInputElement).checked;
    this.toggleTodo({ id: this.id, completed });
  }
  onDbClick(): void {
    this.editing = true;
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
  }
  onEdit(e: Event): void {
    this.editing = false;
    const title: string = (e.target as HTMLInputElement).value;
    this.editTitle({ id: this.id, title });
  }
  onCancelModify() {
    this.$refs.input.value = this.todo.title;
    this.editing = false;
  }
  onRemove(): void {
    this.removeTodo(this.id);
  }

  render() {
    return (
      <li class={{ 'todo': 1, 'completed': this.todo.completed, 'editing': this.editing }}>
        <div class="view">
          <input type="checkbox"
            class="toggle"
            checked={this.todo.completed}
            onChange={this.onToggle} />
          <label onDblclick={this.onDbClick}>{this.todo.title}</label>
          <button class="destroy" onClick={this.onRemove}></button>
        </div>
        <input type="text"
          class="edit"
          onBlur={this.onEdit}
          onKeyup={this.onCancelModify}
          value={this.todo.title}
          ref="input" />
      </li>
    )
  }
}
