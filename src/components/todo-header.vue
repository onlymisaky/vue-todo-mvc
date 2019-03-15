<template>
  <header class="header">
    <h1>todos</h1>
    <todo-input v-model="title"
      @enter="onAddTodo" />
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

import TodoInput from "@/components/todo-input.vue";

@Component({
  components: {
    TodoInput
  }
})
export default class TodoHeader extends Vue {
  title: string = "";

  onAddTodo() {
    this.$store.dispatch("addTodo", this.title);
    this.title = "";
  }
}
</script>
