import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TodoList extends Vue {
  render() {
    return (
      <ul class="todo-list">
        {this.$slots.todoListItem}
      </ul>
    );
  }
}
