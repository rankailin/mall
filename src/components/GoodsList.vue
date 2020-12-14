<template>
  <div class="goods-list">
    <ul class="sort van-hairline--top-bottom">
      <li :class="{active:type==='all'}" @touchend="selectSort('all')">综合</li>
      <li :class="{active:type==='sale'}" @touchend="selectSort('sale')">销量</li>
      <li
        :class="{price:true,'price-up':type==='price-up','price-down':type === 'price-down'}"
        @touchend="selectSort('price')"
      >价格</li>
    </ul>
    <div class="list">
      <van-pull-refresh v-model="isloading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="goods-items" v-for="item in goodsList" :key="item.id">
            <list :item="item" :goodsObj="counteMap" />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import List from './List.vue';

export default {
  components: {
    List,
  },
  data() {
    return {
      type: 'all',
      page: 1,
      loading: false,
      finished: false,
      isloading: false,
    };
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    onRefresh() {
      this.isloading = true;
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = false;

      this.page = 1;
      this.resetGoodsList();
      this.getGoodsList({ page: this.page, sort: this.type });
      this.isloading = false;
    },
    async onLoad() {
      this.page += 1;
      this.loading = true;
      const result = await this.getGoodsList({
        page: this.page,
        sort: this.type,
      });
      if (result) {
        this.loading = false;
      } else {
        this.finished = true;
      }
    },
    selectSort(type) {
      if (type === 'all') {
        this.type = 'all';
      } else if (type === 'sale') {
        this.type = 'sale';
      } else if (this.type === 'price-up') {
        this.type = 'price-down';
      } else {
        this.type = 'price-up';
      }
      this.resetGoodsList();
      this.getGoodsList({ page: 1, sort: this.type });
    },
  },
  computed: {
    ...mapState({
      goodsList: (state) => state.goodsList,
      counteMap: (state) => state.counteMap,
    }),
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/css/classify/goodsList.scss";
</style>
