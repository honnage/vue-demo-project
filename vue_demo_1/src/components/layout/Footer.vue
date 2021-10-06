<template>
  <div id="footer" class="footer">
    <span :style="{ color }">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: ["title", "color"]
};
</script>

<style scoped>
.footer {
  padding-top: 16px;
  font-size: 20px;
  color: black;
}
</style>
