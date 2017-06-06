<template>
  <div class="swiper-example">
    <swiper :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-prev"></div>
    </swiper>


  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          autoplayDisableOnInteraction: false,
          paginationClickable: true,
          centeredSlides: true,
          autoplay: 2500,
          spaceBetween: 30,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        }
      }
    }
    //定义这个sweiper对象


  }
</script>
<style scoped>
  .swiper-example{
    width: 80%;
    height: 300px;
    margin: 0 auto;
    background: #cccccc;
  }
  .swiper-container {
    background: #42b983;
    height: 300px;
    text-align: center;
  }
  .swiper-pagination{
    width: auto;
    height: 20px;
  }
</style>
