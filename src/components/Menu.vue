<template>
  <div class="point ">
    <Carousel />
    <div class="prtsc">
      <h4 class="text-light">click to see details</h4>
    </div>
    <div class="content">
      <div class="content-side">
        <section class="content-up p-3">
          <router-link to="point-of-sale" class="point-1">
            <div class="drag">
              <h5>Point of sale</h5>
              <p>Modern Cashier Web App</p>
            </div>
          </router-link>
        </section>
        <section class="content-up p-3">
          <router-link to="library" class="point-2">
            <div class="drag">
              <h5>Library</h5>
              <p>An Web App to borrow book with online system</p>
            </div>
          </router-link>
        </section>
      </div>
      <div class="content-side">
        <section class="content-up p-3">
          <router-link to="centimeter" class="point-3">
            <div class="drag">
              <h5>Centimeter</h5>
              <p>Web App realtime chat</p>
            </div>
          </router-link>
        </section>
        <section class="content-up p-3">
          <router-link to="carent" class="point-4">
            <div class="drag">
              <h5>Carent</h5>
              <p>Rental Car Online</p>
            </div>
          </router-link>
        </section>
        <!-- <footer class="foot mt-3"> <p class="m-2">Next project</p><i class="fas fa-long-arrow-alt-right"></i></footer> -->
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/module/Carousel.vue";

export default {
  name: "Menu",
  components: {
    Carousel
  }
};
</script>

<style scoped>
.point {
  /* background: #ffffff; */
  width: 100%;
  /* height: 1160px; */
}
.drag {
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  padding: 10px;
}
.drag h5 {
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
}
.drag p {
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
}
.point-1 {
  display: flex;
  align-items: flex-end;
  width: 500px;
  height: 250px;
  background: url("../assets/img/new-1.png");
  background-size: cover;
}
.point-2 {
  display: flex;
  align-items: flex-end;
  width: 500px;
  height: 250px;
  background: url("../assets/img/book2.png");
  background-size: cover;
}
.point-3 {
  display: flex;
  align-items: flex-end;
  width: 500px;
  height: 250px;
  background: url("../assets/img/chat-1.png");
  background-size: cover;
}
.point-4 {
  display: flex;
  align-items: flex-end;
  width: 500px;
  height: 250px;
  background: url("../assets/img/carrent-landing-login.gif");
  background-size: cover;
}
.point-1:hover {
  transform: scale(1.02);
  transition: 0.3s;
  box-shadow: 10px 15px 10px rgba(227, 240, 240, 0.12);
}
.point-2:hover {
  transform: scale(1.02);
  transition: 0.3s;
  box-shadow: 10px 15px 10px rgba(227, 240, 240, 0.12);
}
.point-3:hover {
  transform: scale(1.02);
  transition: 0.3s;
  box-shadow: 10px 15px 10px rgba(227, 240, 240, 0.12);
}
.point-4:hover {
  transform: scale(1.02);
  transition: 0.3s;
  box-shadow: 10px 15px 10px rgba(227, 240, 240, 0.12);
}
.content {
  display: flex;
  /* flex-direction: column; */
}
.content-side {
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 50%;
  height: 610px;
}
.content-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 100%;
}
.foot {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;
}
.prtsc {
  width: 100%;
  padding: 10px;
}
@media only screen and (max-width: 600px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .point-1 {
    width: 300px;
    height: 200px;
  }
  .point-2 {
    width: 300px;
    height: 200px;
  }
  .point-3 {
    width: 300px;
    height: 200px;
  }
  .point-4 {
    width: 300px;
    height: 200px;
  }
}
</style>
