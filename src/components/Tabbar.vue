<template>
  <van-tabbar active-color="#ffa190" fixed route inactive-color="#000">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search" :to="{name:'Classify'}">分类</van-tabbar-item>
    <van-tabbar-item
    id="shop-cart"
    icon="friends-o"
    :to="{name:'Cart'}"
    :badge="badge">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      counteMap: (state) => state.counteMap,
    }),
    badge() {
      const result = Object.values(this.counteMap).reduce(
        (pver, next) => pver + next,
        0,
      );
      console.log(result);
      if (result === 0) {
        return '';
      }
      if (result > 99) {
        return '99+';
      }
      return result;
    },
  },
};
</script>

<style>
</style>
