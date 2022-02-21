<template>
  <div class="home">
    <v-container>
      <TodoAdd @onSibmit="addTask" />
      <TodoList :todos="todos" />
    </v-container>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoAdd from "@/components/TodoAdd.vue";
export default {
  name: "Home",

  components: {
    TodoList,
    TodoAdd,
  },
  methods: {
    addTask(value) {
      this.todos.push({
        id: Math.random,
        title: value,
        components: false,
      });
      this.taskTextField = "";
    },
  },
  data() {
    return {
      taskTextField: "",
      todos: [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
      ],
    };
  },
};
</script>
