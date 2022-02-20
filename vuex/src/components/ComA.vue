<template>
  <div id="comA">
      <h2>{{$store.state.count}}</h2>
  </div>
</template>

<script>
export default {
 mounted() {
    setInterval(() => {
      this.$store.state.count--;
    },1000)
  }
}
</script>

<style>

</style>