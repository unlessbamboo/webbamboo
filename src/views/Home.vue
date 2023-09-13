<template>
  <div class="container">
    <div class="option-wrapper" @click="goTo('shop')">
      <el-card class="option">
        <img src="https://image.unusebamboo.top/home/homeShop.png" class="card-image" />
      </el-card>
    </div>

    <div class="option-wrapper" @click="goTo('blog')">
      <el-card class="option">
        <img src="https://image.unusebamboo.top/home/homeBlog.png" class="card-image" />
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(destination) {
      console.log(destination);
      if (destination == "shop") {
        window.location.href = process.env.VUE_APP_SHOP_HOST;
      } else if (destination == "blog") {
        window.location.href = process.env.VUE_APP_BLOG_HOST;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 20%;
  background-image: url(~@/assets/img/bg.jpg);
  background-size: 100%;
}

.option-wrapper {
  width: 30%;
  height: 40%;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;

  /* 居中 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-wrapper:hover {
  background-color: rgba(138, 150, 84, 0.4);
}

.option {
  height: 50%;

  /* 删除边框 */
  border: none;
  box-shadow: none;
}

.card-image {
  height: 80%;
  width: 100%;
  object-fit: contain;
  display: block;
  margin-bottom: 50px;
}
</style>
