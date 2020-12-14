<template>
  <div id="app">
    <transition
      :name="transitionName"
      :mode="this.$router.back ? 'out-in' : 'in-out'"
    >
      <router-view class="view-wrapper" />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: 'left',
    };
  },
  created() {
    console.log(this.$router.back);
    const counteMap = JSON.parse(localStorage.getItem('goods')) || {};
    this.$store.commit('setCounterMap', counteMap);
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Classify' && from.name === 'Search') {
        this.$router.back = true;
      }
      if (this.$router.back) {
        this.transitionName = 'right';
      } else {
        this.transitionName = 'left';
      }
      this.$router.back = false;
    },
  },
};
</script>
<style lang="scss">
.view-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: transform 0.3s linear;
}
.left-enter {
  transform: translate(100%, 0);
}
.right-leave-to {
  transform: translate(100%, 0);
}
</style>
