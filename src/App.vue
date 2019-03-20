<template>
  <section class="todoapp">
    <todo-header />
    <todo-main />
    <todo-footer />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import TodoHeader from "@/components/todo-header.vue";
import TodoMain from "@/components/todo-main.vue";
import TodoFooter from "@/components/todo-footer.vue";

@Component({
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
})
export default class App extends Vue {}
</script>
