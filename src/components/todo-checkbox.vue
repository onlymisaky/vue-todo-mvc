<template>
  <input type="checkbox"
    class="toggle"
    v-model="model"
    :checked="checked"
    @change="onChange">
</template>

<script lang="ts">
// todo
import { Vue, Component, Prop, Model, Emit } from "vue-property-decorator";
@Component({})
export default class TodoCheckbox extends Vue {
  @Model("toggle-checked", { type: Boolean, required: true })
  private readonly checked!: boolean;

  selfModel: boolean = false;
  get model(): boolean {
    return this.selfModel;
  }
  set model(val: boolean) {
    this.toggleChecked(val);
    this.selfModel = val;
  }

  onChange(e: Event): void {
    const checked: boolean = (e.target as HTMLInputElement).checked;
    this.toggleChecked(checked);
  }

  @Emit()
  toggleChecked(checked: boolean) {
    return checked;
  }
}
</script>
