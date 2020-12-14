<template>
  <div class="search-wrap">
    <div class="search-head">
      <van-icon class="go-back" name="arrow-left" @touchend="$router.goBack()" />
      <van-search
        class="search-dom"
        v-model="value"
        :placeholder="word"
        show-action
        @search="onSearch"
        @input="onInput"
        @focus="onFocus"
      >
        <template #action v-if="showList">
          <span @touchend="onSearch(value)">搜索</span>
        </template>
        <template #action v-else>
          <van-icon
            id="shop-cart"
            name="cart-o"
            class="shop-cart"
            color="#ff1a90"
            @touchend="$router.push({name:'Cart'})"
            :badge="badge"
          />
        </template>
      </van-search>
    </div>
    <div class="like-list" v-if="likeWordList.length && showList">
      <van-list>
        <van-cell v-for="item in likeWordList" :key="item" @click="onSearch(item)">
          <template>
            <span class="custom-title" v-html="formatHTML(item)"></span>
          </template>
        </van-cell>
      </van-list>
    </div>
    <div class="history" v-if="likeWordList.length <=0 && showList">
      <my-history :historyList="searchList" @onSearch="onSearch" />
    </div>
    <div class="goods-list" v-if="!showList">
      <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="item in goodsList" :key="item.id">
          <list :item="item" :goodsObj="counteMap" />
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue';
import MyHistory from '@/components/History.vue';
import { mapState } from 'vuex';

export default {
  components: {
    List,
    MyHistory,
  },
  data() {
    return {
      word: '酒',
      value: this.word,
      showList: true,
      likeWordList: [],
      timer: null,
      page: 1,
      size: 6,
      loading: false,
      finished: false,
      isloading: false,
      goodsList: [],
      total: 0,
      searchList: [],
    };
  },
  created() {
    this.searchList = JSON.parse(localStorage.getItem('searchList')) || [];
  },
  methods: {
    async onLoad() {
      const { total, list } = await this.$http.getSerachWord(
        this.value,
        this.page,
        this.size,
      );
      this.goodsList = [...this.goodsList, ...list];
      console.log(total, list, this.goodsList);
      this.total = total;
      this.loading = false;
      if (this.goodsList.length >= this.total) {
        this.finished = true;
      } else {
        this.page += 1;
      }
    },
    formatHTML(value) {
      const reg = new RegExp(this.value, 'g');
      return value.replace(reg, this.value.fontcolor('#ff1a90'));
    },
    /** 选择 */
    onSearch(value) {
      if (value) {
        this.value = value;
      } else {
        this.value = this.word;
      }
      const result = this.searchList.find((item) => item.value === this.value);
      if (result) {
        result.time = new Date().getTime();
        this.searchList.sort((a, b) => b.time - a.time);
      } else {
        this.searchList.unshift({
          value: this.value,
          time: new Date().getTime(),
        });
        if (this.searchList.length > 13) {
          this.searchList.pop();
        }
      }

      localStorage.setItem('searchList', JSON.stringify(this.searchList));
      this.likeWordList = [];
      this.goodsList = [];
      this.page = 1;
      this.finished = false;
      this.onLoad();
      this.showList = false;
    },
    async onInput() {
      this.showList = true;
      if (this.value === '') {
        this.likeWordList = [];
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else {
        this.timer = setTimeout(async () => {
          const { result } = await this.$http.getLikeSearchList(this.value);
          this.likeWordList = result;
          console.log(this.likeWordList);
          clearTimeout(this.timer);
          this.timer = null;
        }, 300);
      }
    },
    onFocus() {
      this.showList = true;
    },
  },
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

<style lang="scss" scoped>
@import "@/assets/css/serach/serach.scss";
</style>
