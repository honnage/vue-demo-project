<template>
  <div>
    <h1>Data</h1>
    <button @click="count++; isLogin=true">Count++</button>
    <div>{{ count }}</div>
    <div>{{ message }}</div>
    <div>{{ isLogin }}</div>
    <input type="text" placeholder="Enter a message" v-model="message">
    <h2 v-if="message == 'hello' || isLogin == true ">Yahoo</h2>
  </div>
</template>

<script>
export default {
  name: "Demo3",
  mounted() {
    this.message = "Hello";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogin: false
    };
  }
};
</script>

<style></style>
