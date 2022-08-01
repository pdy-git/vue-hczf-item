<template>
  <div>
    <!-- 轮播图 -->
    <div class="box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="obj in resultImg" :key="obj.id"
          ><img :src="imgsrc + obj.imgSrc" alt=""
        /></van-swipe-item>
      </van-swipe>

      <!-- 头部搜索 -->
      <van-search
        class="van-search"
        v-model="value"
        show-action
        label="地址"
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">
            <van-icon name="location-o" size="20px" />
            <!-- 搜索 -->
          </div>
        </template>
      </van-search>
    </div>
    <!-- 跳转页面 -->
    <div style="text-align: center">
      <van-row align="center" class="home-main">
        <van-col span="6">
          <div class="am-flexbox-item">
            <img src="@/assets/imgs/1.png" alt="" />
          </div>
          <span>整租</span>
        </van-col>
        <van-col span="6" center>
          <div class="am-flexbox-item">
            <img src="@/assets/imgs/2.png" alt="" />
          </div>
          <span>合租</span>
        </van-col>
        <van-col span="6" center>
          <div class="am-flexbox-item">
            <img src="@/assets/imgs/3.png" alt="" />
          </div>
          <span>地图找房</span>
        </van-col>
        <van-col span="6" center>
          <div class="am-flexbox-item">
            <img src="@/assets/imgs/4.png" alt="" />
          </div>
          <span>去出租</span>
        </van-col>
      </van-row>
    </div>
    <!-- 租房小组 -->
    <van-cell
      :border="false"
      title="租房小组"
      size="large"
      value="更多"
      style="background-color: #eee"
    />
    <van-row class="home-comment">
      <van-col
        span="11"
        class="group-item"
        v-for="obj in resultText"
        :key="obj.id"
      >
        <img
          :src="imgsrc + obj.imgSrc"
          alt=""
          style="width: 50px; height: 50px"
        />
        <p>
          {{ obj.title }} <br />
          {{ obj.desc }}
        </p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { recommendImgAPI } from "@/api";
import { recommendHomeTextAPI } from "@/api";

export default {
  name: "MyItem",
  data() {
    return {
      value: "",
      resultImg: [],
      resultText: [],
      imgsrc: "http://liufusong.top:8080",
    };
  },
  async created() {
    const res = await recommendImgAPI();
    // console.log(res);
    this.resultImg = res.data.body;

    const res1 = await recommendHomeTextAPI();
    console.log(res1);
    this.resultText = res1.data.body;
  },

  methods: {
    onSearch() {},
    onCancel() {},
  },
};
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 212px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 100%;
  }
}

.am-flexbox-item {
  img {
    height: 60px;
    width: 60px;
  }

  span {
    font-size: 14px;
  }
}
.box {
  position: relative;
}
.van-search {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  background-color: transparent;
}
.home-main {
  padding-top: 10px;
  padding-bottom: 10px;
}
:deep(.home-comment) {
  background-color: #eee;
  padding-bottom: 10px;
  .group-item {
    display: flex;
    background-color: #fff;
    align-items: center;
    margin-left: 10px;
    margin-top: 10px;
    p {
      margin-left: 8px;
    }
  }
}
</style>
