<template>
  <div id="app" style="text-align: center">
    <h1>{{ $store.state.count }}</h1>
    <hr />
    <br />
    <ComA />
    <ComB />
  </div>
</template>

<script>
import ComA from "@/components/ComA.vue";
import ComB from "@/components/ComB.vue";
export default {
  name: "App",
  components: {
    ComA,
    ComB,
  },
};
</script>

<style></style>
