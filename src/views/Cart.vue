<template>
  <div class="shopping-cart-wrapper">
    <div class="cart-title">
      <van-nav-bar title="购物车" color="#ff1a90" fixed right-text="删除" @click-right="onDel" />
    </div>
    <div class="cart-list">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="check-box" v-for="item in cartList" :key="item.id">
          <van-checkbox class="checkbox" :name="item.id" checked-color="#ff1a90" />
          <list class="cart-goods" :item="item" :goodsObj="counteMap" :nofly="true" />
        </div>
      </van-checkbox-group>
    </div>
    <div class="settle-accounts">
      <van-submit-bar :price="allMoney" :button-text="`去结算(${totalNum})`" @submit="onSubmit">
        <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue';
import { Toast, Dialog } from 'vant';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    List,
  },
  data() {
    return {
      result: [],
      cartList: [],
      checked: false,
    };
  },
  created() {
    this.getCartData();
  },
  methods: {
    ...mapMutations(['storageChange']),
    checkAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
    },
    onSubmit() {},
    onSettleAccounts() {},
    async getCartData() {
      const result = Object.keys(this.counteMap);
      const data = await this.$http.getGoodsByIds(result.join());
      this.cartList = data.list;
    },
    async onDel() {
      if (this.result.length === 0) {
        Toast('请选择商品');
        return;
      }
      try {
        await Dialog.confirm({ message: '确认删除已选商品' });
        this.result.forEach((id) => {
          this.storageChange({ id, value: -Infinity });
          this.cartList = this.cartList.filter(
            (item) => !this.result.includes(item.id),
          );
        });
      } catch (error) {
        Toast('我已取消,继续购买');
      }
    },
  },
  computed: {
    allMoney() {
      const cartArr = this.cartList.filter((item) => this.result.includes(item.id));
      return cartArr.reduce((prev, next) => {
        const num = this.counteMap[next.id] || 0;
        return Math.round(num * next.price * 100) + prev;
      }, 0);
    },
    totalNum() {
      const cartArr = this.cartList.filter((item) => this.result.includes(item.id));
      const res = cartArr.reduce(
        (prev, next) => prev + (this.counteMap[next.id] || 0),
        0,
      );
      console.log(res, cartArr, this.cartList, this.result);
      return res;
    },
    ...mapState({
      counteMap: (state) => state.counteMap,
    }),
  },
  watch: {
    result() {
      if (this.result.length === this.cartList.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #eee;
  .cart-title {
    width: 100%;
    height: 50px;
  }
  .cart-list {
    position: absolute;
    width: 100%;
    top: 50px;
    padding: 10px 10px 100px 10px;
    box-sizing: border-box;
    z-index: 0;
    .check-box {
      display: flex;
      justify-content: center;
      padding-left: 13px;
      .checkbox {
        padding-right: 13px;
        flex-shrink: 0;
      }
      .cart-goods {
        width: 100%;
      }
    }
  }
  .settle-accounts {
    position: absolute;
    bottom: 50px;
  }
}
.van-submit-bar {
  bottom: 50px;
}
</style>
