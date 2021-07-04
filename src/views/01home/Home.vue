<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <Swiper>
      <swiper-item v-for="item in results">
        <a :href="item.url">{{item.username}}
          <img :src="item.email" alt="" >
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import {getHomeUserJson} from "network/home";  // 面向home.js发送网络请求
  // import Swiper from 'components/common/swiper/Swiper'  // 轮播图
  // import SwiperItem from 'components/common/swiper/SwiperItem'  // 轮播图
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        // results: null
        results: []
        // title: [],
        // content: []
      }
    },
    created() {
      console.log('创建Home');
      // 1.请求多个数据
      getHomeUserJson().then(res => {
        console.log(res);
        this.results = res.data;  // 防止函数执行完后，返回对象被回收
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
