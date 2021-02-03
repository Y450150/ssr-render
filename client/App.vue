<template>
  <div id="app">
    <span>times: {{ times }}</span>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "app",
  data: function () {
    return {
      times: 0,
    };
  },
  methods: {
    add: function () {
      this.times = this.times + 1;
    },
    sub: function () {
      this.times = this.times - 1;
    },
  },
});
</script>