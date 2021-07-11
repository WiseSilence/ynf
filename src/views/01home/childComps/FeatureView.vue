<template>
  <div class="feature">
<!--    <div class="feature-item" v-for="(item, index) in features">-->
      <a href="http://127.0.0.1:8000/users.json">
        <img src="~assets/img/home/recommend_bg.jpg" alt="">
<!--        <div>{{item.title}}</div>-->
      </a>
<!--    </div>-->
  </div>
</template>

<script>
	export default {
		name: "FeatureView",
    // props: {
		//   features: {
		//     type: Array,
    //     default: []
    //   }
    // }
	}
</script>

<style scoped>
  /*.feature {*/
  /*  display: flex;*/
  /*  margin-top: 10px;*/
  /*  font-size: 14px;*/
  /*  padding-bottom: 30px;*/
  /*  border-bottom: 10px solid #eee;*/
  /*}*/

  /*.feature-item {*/
  /*  flex: 1;*/
  /*  text-align: center;*/
  /*}*/

  .feature img {
    width: 100%;
    /*height: 80px;*/
    margin-bottom: 10px;
  }
</style>
