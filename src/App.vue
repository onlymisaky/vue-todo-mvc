<template>
  <section class="todoapp">
    <todo-header />
    <router-view />
  </section>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TodoHeader from "@/components/todo-header.vue";
@Component({
  components: {
    TodoHeader
  }
})
export default class App extends Vue {}
</script>
