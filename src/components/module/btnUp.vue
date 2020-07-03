<template>
  <div class="btn-up" id="upup" @click="topUp">
    <i class="fas fa-arrow-up"></i>
    Up
  </div>
</template>

<script>
export default {
  name: "btnUp",
  methods: {
    topUp() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    scrollFunction() {
      const topBtn = document.getElementById(".upup");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topBtn.style.dsiplay = "flex";
      } else {
        topBtn.style.dsiplay = "none";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.scrollFunction());
  }
};
</script>

<style>
.btn-up {
  position: fixed;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 50px;
  height: 50px;
  background: #e8534d;
  border-radius: 5px;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
}
</style>
