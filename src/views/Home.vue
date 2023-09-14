<template>
  <div class="container">
    <div class="option-row-container">
      <div class="option-wrapper" @click="goTo('shop')">
        <el-card class="option">
          <a class="card-image font-neon">管理后台</a>
        </el-card>
      </div>

      <div class="option-wrapper" @click="goTo('blog')">
        <el-card class="option">
          <a class="card-image font-transparent">个人博客</a>
        </el-card>
      </div>
    </div>
    <div class="option-row-container">
      <div class="option-wrapper" @click="goTo('FlaskSwagger')">
        <el-card class="option">
          <a class="card-image card-swagger font-huerotate">FlaskSwagger</a>
        </el-card>
      </div>
      <div class="option-wrapper" @click="goTo('GinSwagger')">
        <el-card class="option">
          <a class="card-image card-swagger font-magic">GinSwagger</a>
        </el-card>
      </div>
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
      } else if (destination == "FlaskSwagger") {
        window.location.href = process.env.VUE_APP_SHOP_FLASK_HOST;
      } else if (destination == "GinSwagger") {
        window.location.href = process.env.VUE_APP_SHOP_GIN_HOST;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 20%;
  background-image: url(~@/assets/img/bg.jpg);
  background-size: 100%;
}

.option-row-container {
  height: 50%;
  padding: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid black;
}

.option-wrapper {
  transition: all 0.3s;
  border-radius: 5px;
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
  /* 将el-card背景设置为透明 */
  background-color: transparent;

  /* 删除边框 */
  border: none;
  box-shadow: none;
}

.option .card-image {
  width: 100%;
  display: block;

  font-size: 70px;
  font-weight: 900;
}

.option .card-swagger {
  font-size: 60px;
}

/* 透明背景, 只保留边框 */
.font-transparent {
  /* 设置背景 */
  color: transparent;
  /* 设置字体的边框 */
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
}

/* 发光字体 */
.font-neon {
  color: #fff;
  text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff, 0 0 100px #0ebeff, 0 0 200px #0ebeff;
  padding: 10px;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.4); /* 添加半透明的黑色背景 */
  border-radius: 8px; /* 为背景添加圆角 */
}

/* 渐变字体 */
.font-huerotate {
  color: transparent;
  background: linear-gradient(45deg, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
  background-clip: text;
  animation: huerotate 5s infinite;
}
@keyframes huerotate {
  100% {
    filter: hue-rotate(360deg);
  }
}

/* 类抖音效果 */
.font-magic {
  mask: radial-gradient(circle at 0% 0%, #000, transparent 50%);
  animation: scale 6s infinite;
}
@keyframes scale {
  0% {
    mask-size: 100% 100%;
  }
  60%,
  100% {
    mask-size: 150% 800%;
  }
}

.border-right {
  border-right: 1px solid black;
}
</style>
