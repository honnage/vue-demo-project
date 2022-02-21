<template>
  <v-container>
    <v-row>
      <v-col col="10">
        <v-text-field
          name="name"
          label="label"
          id="id"
          v-model="taskTextField"
        ></v-text-field>
      </v-col>

      <v-col col="2">
        <v-btn block color="success" @click="addTask">Add</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TodoAdd",
  methods: {
    addTask() {
      this.$emit("onSibmit", this.taskTextField)
      this.taskTextField = ""
    },
  },
  data() {
    return {
      taskTextField: "",
    };
  },
};
</script>

<style></style>
