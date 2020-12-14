<template>
  <div class="sidetab-wrapper" ref="sideTab">
    <div
      :class="{'sidetab-title':true,'active':index === i}"
      v-for="(side, i) in sideList"
      @touchend="menuMove(i,$event)"
      @touchmove="move = true"
      @touchstart="move = false"
      :key="side"
    >{{ i === 0?'全部':side }}</div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import tool from '../util/tools';

export default {
  props: ['sideList'],
  data() {
    return {
      index: 0,
      move: false,
    };
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
    menuMove(i, e) {
      if (this.move) {
        return;
      }
      this.index = i;
      const { sideTab } = this.$refs;
      const sideTabH = sideTab.offsetHeight;
      const itemT = e.target.getBoundingClientRect().top;
      const itemH = e.target.offsetHeight;
      tool.moveTo(
        sideTab.scrollTop,
        itemT + itemH / 2 - sideTabH / 2,
        sideTab,
        'scrollTop',
      );
      this.resetGoodsList();
      this.getGoodsList({ type: this.sideList[i], page: 1, sort: 'all' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/tabbar/sidetab.scss";
</style>
