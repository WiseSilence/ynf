<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :results="results" />
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";

  import {getHomeUserJson} from "network/home";
  import {getHomeBlog} from "../../network/home";  // 面向home.js发送网络请求

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },

    data() {
      return {
        // results: null
        results: [],
        recommends: [],
        // title: [],
        // content: []
      }
    },

    created() {
      console.log('创建Home');
      // 1.请求多个数据
      getHomeBlog().then(res => {
        console.log(res);
        this.results = res.data;  // 防止函数执行完后，返回对象被回收
        this.recommends = res.data;  // 防止函数执行完后，返回对象被回收
        // this.title = res.data[0].title;  // 防止函数执行完后，返回对象被回收
        // this.content = res.data[0].content;  // 防止函数执行完后，返回对象被回收
      })
    }
  }
</script>

<style scoped>
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>
