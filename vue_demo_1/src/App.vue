<template>
  <div id="app">
    <Header />
    <Content />
    <Footer @onClock="onClock" title="Copyright 2021 by Passakorn" color="blue"/>
    <span class="clock">{{ time }}</span>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Content from "@/components/layout/Content.vue";
import moment from "moment";

export default {
  name: "app",
  data() {
    return {
      time: "",
    };
  },
  components: {
    Header,
    Content,
    Footer,
  },
  methods: {
    onClock(value) {
      // this.time = value;
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    },
  },
};
</script>

<style>
.content {
  color: violet;
}
.clock {
  font-size: 12px;
}

</style>
