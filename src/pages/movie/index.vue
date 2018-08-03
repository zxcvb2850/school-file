<template>
  <div class="active-wrapper">
    <swiper
      class="swiper-wrapper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <div v-for="item in imgUrls" :key="item.id" class="banner-wrapper">
        <swiper-item>
          <img :src="item.url" class="slide-image" alt="">
        </swiper-item>
      </div>
    </swiper>
    <div class="nav">
      <div></div>
      <div></div>
      <div class="search"></div>
    </div>
    <div class="movie-content">
      <ul class="movie-box">
        <li class="now-movie">
          <div class="item-img">
            <img src="/static/img/movie-item1.jpg" alt="">
          </div>
          <div class="item-desc">
            <h2 class="title">战狼2</h2>
            <p class="title">被开除国籍的冷锋（吴京饰演）本市因找寻龙小云（余男饰演）来到非洲，但是却突然被卷入一场非洲国家的叛乱。因为国家之间政治立场...</p>
            <p><span class="type"></span> <span class="lick"><i class="icon icon-xihuan"></i>93%</span></p>
          </div>
          <a href="" class="item-ticket">选座购票</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgUrls: [{
          id: 1,
          url: require("../../assets/img/banner-1.jpg")
        }, {
          id: 2,
          url: require("../../assets/img/banner-1.jpg")
        }],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000
      };
    },
    methods: {}
  };
</script>
<style scoped lang="less">
  @import "~assets/style/index";

  .active-wrapper {
    background-color: @mainGroundColor;
    .swiper-wrapper {
      height: @height296;
      .banner-wrapper {
        img {
          width: 100%;
        }
      }
    }
    .nav {

    }
    .movie-content {
      margin: 0 auto;
      width: @height700;
      .now-movie {
        display: flex;
        height: @height300;
        box-shadow: @height2 @height2 @height6 @fontColor3;
        .item-img {
          width: @height276;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>

