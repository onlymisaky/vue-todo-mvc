<template>
  <todo-input v-model="title"
    @enter="enter" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

import TodoInput from "@/components/todo-input.vue";

@Component({
  components: {
    TodoInput
  }
})
export default class All extends Vue {
  title: string = "";
  enter(e: Event) {
    console.log(e);
  }
}
</script>

