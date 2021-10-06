<template>
  <div id="demo4">
    <!-- <img v-bind:src="imageUrl" v-bind:height="height" /><br /> -->
    <a v-bind:href="link">My website</a><br />
    <a :href="link">My website</a>
    <div :class="[false ? error : '', important]">
      test
    </div>

    <div :style="{ color, fontSize }">
      BindingStyle
    </div>

    <div :style="isActive ? styleObj :'' ">
      Binding Style Obj
    </div>

    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  name: "Demo4",
  data() {
    return {
      height: 200,
      link: "http://google.com",
      error: "error_class",
      important: "important",
      color: "green",
      fontSize: "30px",
      styleObj:{
        backgroundColor: 'yellow',
        color: 'green'
      },
      isActive: false
    };
  }
};
</script>

<style>
.error_class {
  background-color: red;
  color: white;
}
.important {
  font-weight: 900;
}
</style>
