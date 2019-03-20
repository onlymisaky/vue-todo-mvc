<template>
  <input autofocus
    autocomplete="off"
    :placeholder="placeholder"
    class="new-todo"
    :value="value"
    @input="onInput($event)"
    @keyup.enter="onEnter" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {
  @Model("change-value", { required: true })
  private readonly value!: string;

  @Prop({
    required: false,
    default: "What needs to be done?"
  })
  private readonly placeholder!: string;

  onInput(e: Event): void {
    const val = (e.target as HTMLInputElement).value;
    this.changeValue<string>(val);
  }
  @Emit("change-value")
  changeValue<T>(value: T): T {
    return value;
  }

  @Emit("enter")
  onEnter(e: Event): Event {
    return e;
  }
}
</script>
