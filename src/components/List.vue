<template>
  <div class="goods-info van-hairline--bottom">
    <div class="img-wrapper">
      <img :src="item.images[0]" ref="img" />
    </div>
    <ul class="info">
      <li class="title overflow-text">{{ item.title }}</li>
      <li class="desc overflow-text">{{ item.desc }}</li>
      <li class="tags">
        <span v-for="tags in item.tags" :key="tags">{{ tags }}</span>
      </li>
      <li class="price">
        <div class="price-item">
          <span class="price-num">¥{{ item.price }}</span>
          <span class="goods-num">
            <p v-if="goodsObj[item.id] >0" @touchend="counter(item.id,-1)">
              <img src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png" />
            </p>
            <p v-if="goodsObj[item.id] >0">{{ goodsObj[item.id] }}</p>
            <p @touchend="counter(item.id,1)">
              <img src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png" />
            </p>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Animate from '../tools/animate';

export default {
  props: ['item', 'goodsObj', 'nofly'],
  methods: {
    ...mapMutations(['storageChange']),

    counter(id, num) {
      //   console.log(id, num);
      this.storageChange({ id, value: num });
      if (num === -1) {
        return;
      }
      console.log(this.nofly);
      if (this.nofly) {
        return;
      }
      //   图片起点坐标
      const { left, top } = this.$refs.img.getBoundingClientRect();
      //   图片尺寸
      const { offsetWidth: width, offsetHeight: height } = this.$refs.img;
      // 获取终点dom
      const cart = document.getElementById('shop-cart');
      //   终点dom坐标
      const { top: cartT, left: cartL } = cart.getBoundingClientRect();
      //   终点坐标的width&height
      const { offsetWidth, offsetHeight } = cart;
      //   终点距离
      const endX = cartL + offsetWidth / 2;
      const endY = cartT + offsetHeight / 2;
      console.log(left, top, cartT, cartL);
      Animate({
        startX: left,
        startY: top,
        endX,
        endY,
        src: this.$refs.img.src,
        width,
        height,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/classify/list.scss";
</style>
