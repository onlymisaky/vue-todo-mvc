<template>
  <todo-list>
    <todo-list-item slot="todo-list-item"
      v-for="todo in activeList"
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
export default class Active extends Vue {
  @TodoModule.Getter activeList!: Todo[];
}
</script>
