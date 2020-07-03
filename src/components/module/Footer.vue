<template>
  <footer class="footer">
    <img src="../../assets/img/img-prfl.jpeg" alt="" />
    <section class="profile">
      <h5>Akbar Ismail</h5>
      <p>Arkademy Tech Education Platform</p>
      <p>
        Fullstack Developer who have a high desire to learn in developing web
        applications. Experienced in using vueJs, Reactjs, ExpressJS and also
        mastering various CSS framework such as; Bootsrap and Tailwind. A
        hardworking, creative person who likes to learn new things. Able to work
        with team or independent well.
      </p>
    </section>
    <section class="contact">
      <h5>Contact :</h5>
      <p class="m-0">Email : akbarismaiel@gmail.com</p>
      <p class="m-0">
        Linkedin :
        <a href="https://www.linkedin.com/in/akbarism/">linkedin/in/akbarism</a>
      </p>
      <p class="m-0">
        github :
        <a href="https://github.com/akbarism">github.com/akbarism</a>
      </p>
      <p>telephone : 083812609066</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  padding: 10px;
  border-top: 1px solid #f8f8f8;
}
.footer img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-position: center;
  margin-right: 20px;
  margin-top: 10px;
}
.profile {
  width: 600px;
  color: white;
  margin-right: 20px;
}
.contact {
  width: 300px;
  height: 150px;
  margin-left: 10px;
  color: white;
}
@media only screen and (max-width: 600px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }
  .profile {
    width: 300px;
  }
}
</style>
