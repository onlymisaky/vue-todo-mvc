<template>
  <todo-list v-if="completedList.length">
    <todo-list-item slot="todo-list-item"
      v-for="todo in completedList"
      :key="todo.id"
      :todo="todo" />
  </todo-list>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

import TodoList from "@/components/todo-list.vue";
import TodoListItem from "@/components/todo-list-item.vue";
import { Todo } from "@/types/todo";

const TodoModule = namespace("todo");

@Component({
  components: {
    TodoList,
    TodoListItem
  }
})
export default class Completed extends Vue {
  @TodoModule.Getter completedList!: Todo[];
}
</script>
