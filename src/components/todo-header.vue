<template>
  <header class="header">
    <h1>todos</h1>
    <todo-input v-model="title"
      @enter="onAddTodo" />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

import TodoInput from "@/components/todo-input.vue";

const TodoModule = namespace("todo");

@Component({
  components: {
    TodoInput
  }
})
export default class TodoHeader extends Vue {
  title: string = "";

  @TodoModule.Action
  addTodo!: (title: string) => void;

  onAddTodo() {
    this.addTodo(this.title);
    this.title = "";
  }
}
</script>
