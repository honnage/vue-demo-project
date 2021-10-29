<template>
  <div>
    <ul>
      <li><router-link to="/"><button>Home</button></router-link></li>
      <li><router-link to="/demo1"><button> Demo1 Intro </button></router-link></li>
      <li><router-link to="/demo2"><button> Demo2 Events </button></router-link></li>
      <li><router-link to="/demo3"><button> Demo3 Data </button></router-link></li>
      <li><router-link to="/demo4"><button> Demo4 Binding </button></router-link></li>
      <li><router-link to="/demo5"><button> Demo5 Form & v-model </button></router-link></li>
      <li><router-link to="/demo6"><button> Demo6 Slot </button></router-link></li>
      <li><router-link to="/demo7"><button> Demo7 Condition </button></router-link></li>
      <li><router-link to="/demo8"><button> Demo8 Loop </button></router-link></li>
      <li><router-link to="/demo9"><button> Demo9 LifeCycle </button></router-link></li>
      <li><router-link to="/demo10"><button> Demo10 Variable and State </button></router-link></li>
      <li><router-link to="/demo11"><button> Demo10 Ref </button></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Header"
}
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
</style>

<style>
.content {
  color: violet;
}
</style>