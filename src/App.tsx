import { Vue, Component } from "vue-property-decorator";

import TodoHeader from "@/components/todo-header.tsx";
import TodoMain from "@/components/todo-main.tsx";
import TodoFooter from "@/components/todo-footer.tsx";

@Component({
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
})
export default class App extends Vue {
  render() {
    return (
      <section class="todoapp">
        <todo-header />
        <todo-main />
        <todo-footer />
      </section>
    )
  }
}
