<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home</h1>
    <v-flex class="mt-4">
      <Popup />
    </v-flex>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Popup from '../components/Popup.vue'
export default {
  name: 'Home',
  components: {
    Popup,
    // HelloWorld
  }
}
</script>
