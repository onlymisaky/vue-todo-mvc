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

  onEnter(e: KeyboardEvent): void {
    if (e.keyCode === 13) {
      this.$emit('enter', e);
    }
  }

  render() {
    return (
      <input autofocus
        autocomplete="off"
        placeholder={this.placeholder}
        class="new-todo"
        value={this.value}
        onInput={this.onInput}
        onKeyup={this.onEnter} />
    );
  }

}

