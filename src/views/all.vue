<template>
  <section class="main">
    <ul class="todo-list"
      v-if="todoList.length">
      <todo-list-item v-for="todo in todoList"
        :key="todo.id"
        :todo="todo" />
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";

import TodoListItem from "@/components/todo-list-item.vue";
import { Todo } from "@/models/todo";

@Component({
  components: {
    TodoListItem
  }
})
export default class All extends Vue {
  @State(state => state.todo.todoList)
  todoList!: Todo[];
}
</script>
