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
    <router-view :seller="seller" keep-alive></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  import {
    urlParse
  } from './common/js/util.js';
  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            console.log(queryParam);
            return queryParam.id;
          })()
        }
      };
    },
    created() {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        // console.log(response);
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          console.log(this.seller.id);
          // 给对象扩展属性
          this.seller = Object.assign({},this.seller,response.data);
          console.log(this.seller.id);
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
