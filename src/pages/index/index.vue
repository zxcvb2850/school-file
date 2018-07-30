<template>
  <div class="container">
    <!--<div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <p v-if="!userInfo.avatarUrl">
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">获取权限</button>
    </p>
    -->
    <scroll-view>
      <div class="card" v-for="(item,index) in listData" :key="item.id">
        <div class="list-item">
          <div class="item-img">
            <img src="/static/img/movie-item.jpg" lazy-load="true" alt="">
          </div>
          <div class="item-desc">
            <div class="desc-left">
              <p class="item-title">{{item.name}}</p>
              <p class="item-time">{{item.time}} 上映 | {{item.type}} | {{item.length}}</p>
              <h3 class="item-cinema">{{item.cinema}}</h3>
              <p class="item-addr">{{item.addr}}</p>
            </div>
            <p class="item-price"><span>￥</span>{{item.price}}<span>起</span></p>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  import card from "@/components/card";

  export default {
    data() {
      return {
        motto: "Hello World",
        userInfo: {},
        listData: [
          {
            id: 1,
            name: "杀破狼",
            time: "2017-08-17",
            type: "2D",
            length: "101分钟",
            cinema: "嘉裕国际影城武汉店",
            addr: "武昌区中山路与紫阳东路交汇处万金国际广场",
            price: "12.80"
          }, {
            id: 2,
            name: "杀破狼",
            time: "2017-08-17",
            type: "2D",
            length: "101分钟",
            cinema: "嘉裕国际影城武汉店",
            addr: "武昌区中山路与紫阳东路交汇处万金国际广场",
            price: "12.80"
          }, {
            id: 3,
            name: "杀破狼",
            time: "2017-08-17",
            type: "2D",
            length: "101分钟",
            cinema: "嘉裕国际影城武汉店",
            addr: "武昌区中山路与紫阳东路交汇处万金国际广场",
            price: "12.80"
          }, {
            id: 4,
            name: "杀破狼",
            time: "2017-08-17",
            type: "2D",
            length: "101分钟",
            cinema: "嘉裕国际影城武汉店",
            addr: "武昌区中山路与紫阳东路交汇处万金国际广场",
            price: "12.80"
          }
        ]
      };
    },
    created() {
      this.getSetting();
    },

    components: {
      card
    },

    methods: {
      getSetting() {
        let that = this;
        wx.getSetting({
          success: function(res) {
            if (res.authSetting["scope.userInfo"]) {
              wx.getUserInfo({
                success: function(res) {
                  console.log("用户已经授权过:", res.userInfo);
                  //用户已经授权过
                  that.userInfo = res.userInfo;
                }
              });
            } else {
              console.log("用户还未授权过");
            }
          }
        });
      },
      getUserInfo1() {
        console.log("click事件首先触发");
        // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
        // console.log(wx.canIUse('button.open-type.getUserInfo'))
        if (wx.canIUse("button.open-type.getUserInfo")) {
          console.log(1);
          // 用户版本可用
        } else {
          console.log("请升级微信版本");
        }
      },
      bindGetUserInfo(e) {
        if (e.mp.detail.rawData) {
          //用户按了允许授权按钮
          console.log(e.mp.detail.rawData);
          this.userInfo = JSON.parse(e.mp.detail.rawData);
          console.log(this.userInfo.nickName);
          console.log("用户按了允许授权按钮");
        } else {
          //用户按了拒绝按钮
          console.log("用户按了拒绝按钮");
        }
      }
    }
  };
</script>

<style scoped lang="less">
  @import "~assets/style/index";

  .container {
    background-color: @mainGroundColor;
    .card {
      margin: @height18 @height25;
      -webkit-border-radius: @height20;
      -moz-border-radius: @height20;
      border-radius: @height20;
      background-color: @mainIconColor;
      -webkit-box-shadow: @height10 @height8 @height10 #ccc;
      -moz-box-shadow: @height10 @height8 @height10 #ccc;
      box-shadow: @height10 @height8 @height10 #ccc;
      overflow: hidden;
    }
    .list-item {
      width: @height700;

      .item-img {
        width: @height700;
        height: @height400;

        img {
          width: @height700;
          height: @height400;
        }
      }

      .item-desc {
        padding: @height10 @height12;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .desc-left {
        flex: 1;
        max-width: @height480;
        line-height: @fontSize24;
        .item-title {
          font-size: @fontSize18;
        }

        .item-time {
          font-size: @fontSize14;
          color: @auxiliaryColor;
        }

        .item-cinema {
          font-size: @fontSize18;
          .no-wrap();
        }

        .item-addr {
          color: @fontColor3;
          font-size: @fontSize14;
          .no-wrap();
        }
      }
      .item-price {
        flex: 0 0 1;
        color: @auxiliaryColor;
        font-size: @fontSize22;
        span {
          font-size: @fontSize14;
        }
      }
    }
  }
</style>
