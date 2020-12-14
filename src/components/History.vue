<template>
  <div class="my-history">
    <h4 class="title">历史搜索</h4>
    <ul class="history">
      <li
        class="history-item overflow-text"
        v-for="history in historyList"
        :key="history.time"
        @click="onSearch(history.value)"
      >{{ history.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    historyList: {
      default() {
        return [];
      },
    },
  },
  methods: {
    onSearch(history) {
      console.log(history);
      this.$emit('onSearch', history);
    },
  },
};
</script>

<style lang='scss' scoped>
.my-history{
    // width: 345px;
    padding:0 23px;
     box-sizing: border-box;
    .title {
        width: 100%;
    }
    .history {
        width: 100%;
        align-items: center;
        padding:0 13px;
        box-sizing: border-box;
       .history-item {
          display: inline-block;
           margin: 0 6px;
           padding: 3px;
           background: #eee;
           color: #a1a1a1;
           border-radius: 6px;
       }
    }
}
</style>
