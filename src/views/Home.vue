<template>
  <div class="container-fluid bg-dark p-0">
    <header class="intro d-flex">
      <aside class="side-left p-0">
        <header class="up text-light p-1">
          <p>AKBAR ISMAIL's portofolio</p>
        </header>
        <section class="dwn text-light p-1">
          <p class="scroll">scroll</p>
          <div>
            <i class="fas fa-long-arrow-alt-down"></i>
          </div>
        </section>
      </aside>
      <aside class="side-right d-flex">
        <section class=" hello d-flex  flex-column">
          <div class="lohha">
            <h1 class="he p-0 m-0">HE</h1>
            <H1 class="llo ">LLO<span class="dot">.</span> </H1>
          </div>
          <p class="ima text-light">i'm a fullstack developer</p>
        </section>
        <section class="medsos">
          <a href="https://www.instagram.com/akbarism_/"
            ><img src="../assets/img/ig-icon.png" class="ig"
          /></a>
          <a href="https://github.com/akbarism"
            ><img src="../assets/img/github-icon.png" class="github"
          /></a>
          <a href="https://www.facebook.com/ismaielz/"
            ><img src="../assets/img/fb-icon.png" class="fb"
          /></a>
        </section>
      </aside>
    </header>
    <Menu />
    <Footer />
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Footer from "../components/module/Footer";

export default {
  name: "Home",
  components: {
    Menu,
    Footer
  }
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
}
.intro {
  height: 625px;
}
.side-left {
  background: #e8534d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}
.dot {
  color: #e8534d;
  font-size: 200px;
}
.side-right {
  background: #f8f8f8;
  width: 50%;
}
.he {
  font-size: 200px;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
}
.llo {
  font-size: 200px;
  font-weight: 900;
  margin-top: -90px;
  font-family: Arial, Helvetica, sans-serif;
}
.ima {
  margin-top: -50px;
  margin-left: -240px;
  letter-spacing: 2px;
}
.hello {
  width: 100%;
  margin-top: 100px;
}
.lohha {
  margin-left: -220px;
}
.lohha h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.up {
  letter-spacing: 2px;
}
.dwn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.scroll {
  transform: rotate(90deg);
  margin-top: -70px;
  letter-spacing: 2px;
}
.medsos {
  width: 50px;
  height: 180px;
  margin-top: 50px;
}
.medsos img {
  display: flex;
  flex-direction: column;
  width: 35px;
  height: 35px;
  margin-bottom: 20px;
}
@media only screen and (max-width: 600px) {
  .intro {
    height: 680px;
  }
  .lohha {
    margin-left: -150px;
  }
  .medsos {
    margin-left: -50px;
  }
  .ima {
    display: none;
  }
  .he {
    font-size: 130px;
    font-weight: 900;
  }
  .llo {
    font-size: 130px;
    font-weight: 900;
    margin-top: -50px;
  }
}
</style>
