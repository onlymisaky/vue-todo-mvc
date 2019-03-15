<template>
  <todo-header />
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

import TodoHeader from "@/components/todo-header.vue";

@Component({
  components: {
    TodoHeader
  }
})
export default class All extends Vue {}
</script>

