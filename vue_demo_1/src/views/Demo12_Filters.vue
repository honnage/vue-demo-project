<template>
  <div id="demo12">
      <h2>{{ 1234 }}</h2>
    <h2>{{ 1234 | currency("THB") }}</h2>
    <h2>{{ 20000000 | bytes }}</h2>
    <h2>{{ "hello" | capitalize({ onlyFirstLetter: true }) }}</h2>
    <h2>{{ "Passakorn" | uppercase }}</h2>
    <h2>{{ [1,2,3] | reverseArray }}</h2>
  </div>
</template>

<script>
export default {
  name: "Demo12",
  filters: {
    reverseArray(value) {
      return value.slice().reverse();
    }
  }
};
</script>

<style></style>
