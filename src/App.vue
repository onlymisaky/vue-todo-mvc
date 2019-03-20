<template>
  <section class="todoapp">
    <todo-header />
    <todo-main />
    <todo-footer />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State } from "vuex-class";
import TodoHeader from "@/components/todo-header.vue";
import TodoMain from "@/components/todo-main.vue";
import TodoFooter from "@/components/todo-footer.vue";
import { saveTodos } from "@/utils/store.ts";
import { Todo } from "@/types/todo";

@Component({
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
})
export default class App extends Vue {
  @State(state => state.todo.todoList)
  todoList!: Todo[];

  @Watch("todoList", { deep: true, immediate: true })
  todoListChange(todos: Todo[]) {
    saveTodos(todos);
  }
}
</script>
