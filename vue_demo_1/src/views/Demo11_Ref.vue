<template>
  <div id="demo11">
      <h1 ref="title">Waiting for change by Ref</h1>
      <input ref="input1" type="text" placeholder="This will be focused automatically" />
  </div>
</template>

<script>
export default {    
    mounted(){
        this.$refs["title"].textContent = "Hello change Ref";
        this.$refs["input1"].focus();
        this.$refs["input1"].value="1234"
    }
};
</script>

<style>

</style>