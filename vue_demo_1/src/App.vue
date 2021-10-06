<template>
  <div id="app">
    <ul>
      <li><router-link to="/"><button>Home</button></router-link></li>
      <li><router-link to="/demo1"><button> Demo1 Intro </button></router-link></li>
      <li><router-link to="/demo2"><button> Demo2 Events </button></router-link></li>
      <li><router-link to="/demo3"><button> Demo3 Data </button></router-link></li>
      <li><router-link to="/demo4"><button> Demo4 Binding </button></router-link></li>
      <li><router-link to="/demo5"><button> Demo5 Form & v-model </button></router-link></li>
    </ul>

    <router-view></router-view>

    <span class="title">123</span>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: ""
    };
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}

.title {
  font-size: 30px;
  color: green;
}
</style>

<style>
.content {
  color: violet;
}
</style>
