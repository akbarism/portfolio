<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="2000">
        <div class="cover">
            <h1 class="head">Point Of Sale</h1>
        </div>
        <img src="../../assets/img/bg-pos.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-interval="2000">
          <div class="cover">
            <h1 class="head">Centimeter</h1>
        </div>
        <img src="../../assets/img/bg-chat.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-interval="2000">
          <div class="cover">
            <h1 class="head">Library</h1>
        </div>
        <img src="../../assets/img/bg-book.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
    name: "Carousel"
};
</script>

<style scoped>
.carousel-inner {
    position: relative;
    height: 450px;
}
.cover {
    width: 100%;
    height: 450px;
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    z-index: 2;
    text-align: center;
}
.head {
    color: #ffffff;
    font-family: 'Pacifico', cursive;
    font-size: 70px;
    margin-top: 160px;
}
</style>