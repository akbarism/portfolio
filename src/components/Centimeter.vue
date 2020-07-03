<template>
  <div class="point bg-dark">
    <div class="cover">
      <router-link to="/" class="back"
        ><i class="fas fa-home mr-4"></i
      ></router-link>
      <header class="title">
        <h1>Centimeter</h1>
        <p>
          A realtime web chat app. User can send messages instant in realtime.
          This web is built with a frameworl VueJs and Firebase as the backend.
        </p>
      </header>
      <section class="group-button">
        <a href="https://centimeter.netlify.app/"
          ><button class="web">Visit to web</button></a
        >
        <a href="https://github.com/akbarism/chat-realtime"
          ><button class="repo">Visit to repository</button></a
        >
      </section>
    </div>
    <div class="prtsc">
      <h3 class="text-light">Screenshoot Project</h3>
    </div>
    <div class="content">
      <div class="content-side">
        <section class="content-up p-3">
          <img
            src="../assets/img/chat-1.png"
            alt="login page"
            width="500px"
            height="250px"
          />
          <p class="text-light mt-2">Login Page</p>
        </section>
        <section class="content-up p-3">
          <img
            src="../assets/img/chat-3.png"
            alt="add item"
            width="500px"
            height="250px"
          />
          <p class="text-light mt-2">Home</p>
        </section>
      </div>
      <div class="content-side">
        <section class="content-up p-3">
          <img
            src="../assets/img/chat-2.png"
            alt="home"
            width="500px"
            height="250px"
          />
          <p class="text-light mt-2">Register Page</p>
        </section>
        <section class="content-up p-3">
          <img
            src="../assets/img/chat-5.png"
            alt="checkout"
            width="500px"
            height="250px"
          />
          <p class="text-light mt-2">Chat</p>
        </section>
        <router-link to="library" class="foot mt-3" @click="top">
          <p class="m-2">Next project</p>
          <i class="fas fa-long-arrow-alt-right"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Centimeter",
  methods: {
    top() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
.point {
  width: 100%;
}
.cover {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/img/bg-chat.jpg");
  background-position: center;
  height: 450px;
  background-size: cover;
  padding: 10px;
}
.title {
  display: flex;
  flex-direction: column;
  padding: 50px;
}
.title h1 {
  display: flex;
  justify-content: center;
  font-family: "Pacifico", cursive;
  color: #ffffff;
  font-size: 70px;
  margin-bottom: 30px;
}
.title p {
  color: white;
  font-size: 30px;
  text-align: center;
}
.group-button {
  display: flex;
  width: 100%;
  justify-content: center;
}
.web {
  width: 150px;
  border: none;
  background: #3470bf;
  color: #ffffff;
  padding: 10px 0;
  margin-right: 10px;
  border-radius: 5px;
}
.repo {
  width: 150px;
  border: none;
  background: #3470bf;
  color: #ffffff;
  padding: 10px 0;
  border-radius: 5px;
}
.repo:active {
  transform: scale(0.07);
}
.web:active {
  transform: scale(0.07);
}
.content {
  display: flex;
}
.content-side {
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 50%;
  height: 661px;
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
.back {
  color: #ffffff;
}
@media only screen and (max-width: 600px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .title {
    padding: 30px;
  }
  .title h1 {
    font-size: 50px;
  }
  .title p {
    font-size: 20px;
  }
  .content-up img {
    width: 300px;
    height: 200px;
  }
  .foot {
    width: 250px;
  }
}
</style>
