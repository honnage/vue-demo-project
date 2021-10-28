<template>
  <div id="demo9">
      <h1>Lifecycle Hooks</h1>
      <span>{{ counter }}</span>
      <br>
      <button @click="add">Change</button>
  </div>
</template>

<script>
export default {
    name: "Demo9",
    data(){
        return {
            counter: 0
        }
    },
    methods:{
        add(){
            this.counter ++;
        }
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeDestroy(){
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    }
}
</script>

<style>

</style>