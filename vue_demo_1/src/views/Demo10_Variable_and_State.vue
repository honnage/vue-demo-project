<template>
  <div id="Demo10">
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>
    <div>timestamp: {{ timestamp }}</div>
    <button @click="timestamp = Date.now()">Update Timestamp</button>
    <button @click="count++">Update Count</button>
  </div>
</template>

<script>
export default {
  created() {
    this.timestamp = 0;
  },
  mounted() {
    setInterval(() => {
      //   this.count++;
      console.log("timestamp", this.timestamp);
    }, 100);
  },
  data() {
    return {
      count: 0 // local state
    };
  }
};
</script>

<style></style>
