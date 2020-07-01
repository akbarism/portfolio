<template>
  <footer class="footer">
      <img src="../../assets/img/img-prfl.jpeg" alt="">
      <section class="profile">
          <h5> Akbar Ismail</h5>
          <p>Arkademy Education Platform Tech</p>
          <p>Fullstack Developer who have a high desire to learn in
developing web applications. Experienced in using vueJs,
Reactjs, ExpressJS and also mastering various CSS
framework such as; Bootsrap and Tailwind. A hardworking,
creative person who likes to learn new things. Able to work
with team or independent well.</p>
      </section>
      <section class="contact">
          <h5>Contact :</h5>
       <p class="m-0">   Email : akbarismaiel@gmail.com</p>
        <p class="m-0">  Linkedin : linkedin/in/akbarism</p>
          <p>telefon: 083812609066</p>
      </section>
  </footer>
</template>

<script>
export default {
    name : "footer"
}
</script>

<style scoped>
.footer {
    display: flex;
    width: 100%;
    height: 200px;
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
    height: 150px;
    color: white;
    margin-right: 20px;
}
.contact {
    width: 300px;
    height: 150px;
    margin-left: 10px;
    color: white;
}

</style>