<template>
  <div>
    <!-- 挂载点 -->
    <router-view></router-view>

    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/list">找房</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/layout/news">资讯</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/layout/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  data() {
    return {};
  },
};
</script>

<style></style>
