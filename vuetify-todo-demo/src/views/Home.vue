<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col col="10">
          <v-text-field name="name" label="label" id="id" v-model="taskTextField"></v-text-field>
        </v-col>

        <v-col col="2">
          <v-btn block color="success" @click="addTask">Add</v-btn>
        </v-col>
      </v-row>

      <TodoList :todos="todos" />

      
    </v-container>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue"
export default {
  name: "Home",

  components: {
    TodoList
  },
  methods: {
    addTask(){
      this.todos.push({
        id: Math.random,
        title: this.taskTextField,
        components: false
      })
      this.taskTextField = ""
    }
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
