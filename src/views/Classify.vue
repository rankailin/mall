<template>
  <div class="classify-wrapper">
    <div class="classify-header">
      <div class="classify-search" @touchend='goSearch'>
        <van-icon size="28px" name="search" />
        <span>{{ searchWord }}</span>
      </div>
      <one-tab />
    </div>
    <div class="classify-list">
      <sidetab :sideList='sideList'/>
      <div class="classify-goods-list">
        <goods-list v-if="showContent" />
        <van-loading type="spinner" color="#ff1a90" size="1rem" vertical v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import OneTab from '../components/OneNavigation.vue';
import Sidetab from '../components/Sidetab.vue';
import GoodsList from '../components/GoodsList.vue';

export default {
  components: {
    OneTab,
    Sidetab,
    GoodsList,
  },
  data() {
    return {
      searchWord: '吃了香蕉,好拉屎~~',
    };
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    goSearch() {
      this.$router.push({
        name: 'Search',
      });
    },
  },
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
      sideList: (state) => state.sideList,
    }),
  },
  watch: {
    showContent() {
      if (this.showContent) {
        this.resetGoodsList();
        this.getGoodsList({ type: this.sideList[0], page: 1, sort: 'all' });
      }
    },
  },
};
</script>

<style lang='scss' socped>
@import "@/assets/css/classify/classify.scss";
</style>
