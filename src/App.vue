<template>
  <div id="app">
    <router-view />
    <btnUp />
  </div>
</template>

<script>
import btnUp from "../src/components/module/btnUp";

export default {
  components: {
    btnUp
  }
};
</script>
<style>
@font-face {
  font-family: "arialbd";
  src: url("../src/assets/font/arialbd.ttf") format("ttf");
}
* {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
