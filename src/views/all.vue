<template>
  <todo-list>
    <todo-list-item slot="todo-list-item"
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo" />
  </todo-list>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";

import TodoList from "@/components/todo-list.vue";
import TodoListItem from "@/components/todo-list-item.vue";
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
}
</script>
