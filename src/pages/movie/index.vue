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
        <li class="now-movie" v-for="movie in moviceData" :key="movie.id">
          <div class="item-img">
            <img :src="movie.img" alt="">
          </div>
          <div class="item-desc">
            <h2 class="title">{{movie.title}}</h2>
            <p class="desc">{{movie.desc}}</p>
            <p class="evaluate">
              <span class="type">{{movie.type}}</span>
              <span class="lick"><span class="icon icon-xihuan"></span>{{movie.like}}</span>
            </p>
          </div>
          <div class="item-ticket"><a href="" class="btn">选座购票</a></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgUrls: [
          {
            id: 1,
            url: require("../../assets/img/banner-1.jpg")
          }, {
            id: 2,
            url: require("../../assets/img/banner-1.jpg")
          }
        ],
        moviceData: [
          {
            id: 1,
            title: "战狼2",
            desc: "被开除国籍的冷锋（吴京饰演）本市因找寻龙小云（余男饰演）来到非洲，但是却突然被卷入一场非洲国家的叛乱。因为国家之间政治立场...",
            type: "3D",
            like: "90%",
            img: require("../../assets/img/movie-item1.jpg")
          }, {
            id: 2,
            title: "战狼2",
            desc: "被开除国籍的冷锋（吴京饰演）本市因找寻龙小云（余男饰演）来到非洲，但是却突然被卷入一场非洲国家的叛乱。因为国家之间政治立场...",
            type: "3D",
            like: "90%",
            img: require("../../assets/img/movie-item1.jpg")
          }, {
            id: 3,
            title: "战狼2",
            desc: "被开除国籍的冷锋（吴京饰演）本市因找寻龙小云（余男饰演）来到非洲，但是却突然被卷入一场非洲国家的叛乱。因为国家之间政治立场...",
            type: "3D",
            like: "90%",
            img: require("../../assets/img/movie-item1.jpg")
          }, {
            id: 4,
            title: "战狼2",
            desc: "被开除国籍的冷锋（吴京饰演）本市因找寻龙小云（余男饰演）来到非洲，但是却突然被卷入一场非洲国家的叛乱。因为国家之间政治立场...",
            type: "3D",
            like: "90%",
            img: require("../../assets/img/movie-item1.jpg")
          }, {
            id: 5,
            title: "战狼2",
            desc: "被开除国籍的冷锋（吴京饰演）本市因找寻龙小云（余男饰演）来到非洲，但是却突然被卷入一场非洲国家的叛乱。因为国家之间政治立场...",
            type: "3D",
            like: "90%",
            img: require("../../assets/img/movie-item1.jpg")
          }
        ],
        movie: require("../../assets/img/movie-item1.jpg"),
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
      padding: @height10 0;
      margin: 0 auto;
      width: @height700;
      .now-movie {
        margin: @height20 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: @height300;
        box-shadow: @height2 @height2 @height6 @fontColor3;
        background-color: @mainIconColor;
        overflow: hidden;
        .bor-radius(@height20);
        .item-img {
          flex: @height194 0 0;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-desc {
          padding: 0 @height10;
          flex: 1;
          .title {
            font-weight: 600;
            font-size: @fontSize16;
            color: @fontColor1;
          }
          .desc {
            margin: @height4 0;
            font-size: @fontSize14;
            .word-ellipsis(5);
          }
          .evaluate {
            display: flex;
            color: @auxiliaryColor;
            font-size: @fontSize16;
            span {
              flex: 1;
              &.icon {
                padding: 0 @height8;
              }
            }
          }
        }
        .item-ticket {
          flex: 0 0 @height170;
          .btn {
            padding: @height12 @height8;
            width: @height150;
            font-size: @fontSize16;
            text-align: center;
            color: @mainIconColor;
            background: linear-gradient(70deg, @mainColor2, @mainColor1);
            .bor-radius(@height40);
          }
        }
      }
    }
  }
</style>

