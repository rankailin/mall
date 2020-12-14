<template>
  <div class="home">
    <router-view />
    <tab-bar />
  </div>
</template>

<script>
import TabBar from '../components/Tabbar.vue';

export default {
  name: 'Home',
  components: {
    TabBar,
  },
};
</script>
