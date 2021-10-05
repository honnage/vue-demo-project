<template>
  <div>
    <h1>Data</h1>
    <button @click="count++; isLogin = true;">
        Count++
    </button>
    <div>{{ count }}</div>
    <div>{{ message }}</div>
    <div>{{ isLogin }}</div>
    <input type="text" placeholder="Enter a message" v-model="message" />
    <h2 v-if="message == 'hello' || isLogin == true">Yahoo</h2>
    <div>{{account}}</div>
    <div>{{courses}}</div>
    <ul>
        <li class="content" v-for="(item, index) in courses" :key="index">{{index + 1}}.{{item}}</li>
    </ul>

    <span class="title">5555</span>
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
      isLogin: false,
      account: {
        username: "admin",
        password: "1234"
      },
      courses:[
        "Angular",
        "VueJs",
        "ReactJS",
        "Fluter",
        "UXUI"
      ]
    };
  }
};
</script>

<style scoped>
    .title{
        color: red;
    }
</style>
