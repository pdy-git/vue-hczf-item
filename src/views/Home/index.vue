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
        placeholder="请输入搜索关键词"
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
      <van-row gutter="20" align="center">
        <van-col span="6">
          <img src="@/assets/imgs/1.png" alt="" />
          <span>整租</span>
        </van-col>
        <van-col span="6" center>
          <img src="@/assets/imgs/2.png" alt="" />
          <span>合租</span>
        </van-col>
        <van-col span="6" center>
          <img src="@/assets/imgs/3.png" alt="" />
          <span>地图找房</span>
        </van-col>
        <van-col span="6" center>
          <img src="@/assets/imgs/4.png" alt="" />
          <span>去出租</span>
        </van-col>
      </van-row>
    </div>
    <!-- 租房小组 -->
    <van-cell :border="false" title="租房小组" value="更多" />
    <van-row>
      <van-col
        span="12"
        class="group-item"
        v-for="obj in resultText"
        :key="obj.id"
      >
        <img
          :src="imgsrc + obj.imgSrc"
          alt=""
          style="width: 50px; height: 50px"
        />
        <!-- <span>去出租对对对对</span> -->
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

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe {
  height: 212px;
}
img {
  width: 100%;
  height: 100%;
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
.group-item {
  display: flex;
  background-color: #fff;
  align-items: center;
}
.group-item p {
  margin-left: 8px;
}
</style>
