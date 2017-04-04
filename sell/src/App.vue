<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/seller'}">商家</a>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  
  const ERR_OK = 0;
  
  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        // console.log(response);
        if (response.errno === ERR_OK) {
            this.seller=response.data;
            // console.log(this.seller);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./common/sass/mixin.scss";
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    @include border-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      a {
        // 使用display：block,a元素自动撑满盒子
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
      }
      a.active {
        color: rgb(240, 20, 20);
      }
    }
  }
</style>
