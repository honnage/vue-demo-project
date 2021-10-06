<template>
  <div id="Demo6">
    <Clock>
      <span style="color:red;">เวลาปัจจุบัน</span>
    </Clock>
    <Clock>
      <span style="color:green;">เวลาปัจจุบัน</span>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Demo6",
  components: {
    Clock
  }
};
</script>

<style></style>
