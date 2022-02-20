<template>
  <div id="app" style="text-align:center">
   <h1>{{$store.state.count}}</h1>
   <hr>
   <br>
   <ComA />
  </div>
</template>

<script>
import ComA from "@/components/ComA.vue"
export default {
  name: 'App',
  components: {
    ComA
  },
  mounted() {
    setInterval(() => {
      this.$store.state.count++;
    },1000)
  }
}
</script>

<style>

</style>
