<template>
  <li class="todo"
    :class="{'completed': todo.completed, 'editing': editing}">
    <div class="view">
      <input type="checkbox"
        class="toggle"
        :checked="todo.completed"
        @change="onToggleState">
      <label @dblclick="onDbClick">{{todo.title}}</label>
      <button class="destroy"
        @click="onDel"></button>
    </div>
    <input type="text"
      class="edit"
      @blur="onModifyTitle"
      @keyup.esc="onCancelModify"
      :value="todo.title"
      ref="input">
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Todo } from "@/models/todo";

const TodoModule = namespace("todo");

@Component({})
export default class TodoListItem extends Vue {
  @Prop({
    required: true
  })
  private readonly todo!: Todo;

  @TodoModule.Action("modifyTodo")
  modifyTodo!: (todo: Todo) => void;

  @TodoModule.Action("delTodo")
  delTodo!: (todo: Todo) => void;

  editing: boolean = false;
  $refs!: {
    input: HTMLInputElement;
  };

  onToggleState(e: Event) {
    const completed: boolean = (e.target as HTMLInputElement).checked;
    this.modifyTodo({ ...this.todo, completed });
  }
  onDbClick(): void {
    this.editing = true;
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
  }
  onModifyTitle(e: Event): void {
    this.editing = false;
    const title: string = (e.target as HTMLInputElement).value;
    this.modifyTodo({ ...this.todo, title });
  }
  onCancelModify() {
    this.$refs.input.value = this.todo.title;
    this.editing = false;
  }
  onDel(): void {
    this.delTodo(this.todo);
  }
}
</script>
