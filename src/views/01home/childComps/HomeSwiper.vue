<template>
  <Swiper>
    <swiper-item v-for="item in swipers">
      <a :href="item.url">
<!--        <img :src="item.content" alt="" >-->
        <div>{{item.title}}</div>
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  // import Swiper from 'components/common/swiper/Swiper'  // 轮播图
  // import SwiperItem from 'components/common/swiper/SwiperItem'  // 轮播图
  // import {Swiper, SwiperItem} from 'components/common/swiper'

	export default {
		name: "HomeSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
      swipers: {
		    type: Array,
        default() {
		      return []
        }
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      }
    }
	}
</script>

<style scoped>

</style>
