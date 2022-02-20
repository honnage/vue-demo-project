<template>
  <div id="comB">
    <h2>{{ $store.state.count }}</h2>
    <button @click="del">Del</button>
  </div>
</template>

<script>
export default {
  methods: {
    del() {
      this.$store.dispatch("delAction");
    },
  },
};
</script>

<style></style>
