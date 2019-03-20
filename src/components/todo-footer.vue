<template>
  <footer class="footer"
    v-show="todoList.length">
    <span class="todo-count">
      <strong>{{remaining}}</strong> item left
    </span>
    <ul class="filters">
      <li v-for="route in routes"
        :key="route.name">
        <router-link :to="{name:route.name}">
          {{route.label}}
        </router-link>
      </li>
    </ul>
    <button class="clear-completed"
      @click="onRemoveCompleted"
      v-show="todoList.length > remaining">
      Clear completed
    </button>
  </footer>

</template>

<script lang="ts">
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
}
</script>
