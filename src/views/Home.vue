<template>
  <div class="container">
    <div class="carousel-container">
      <div class="carousel-container-ul">
        <!-- a. 向前的图标 -->
        <i class="el-icon-arrow-left carousel-arrow" @click="scroll(-1)"></i>

        <!-- b. 中间待滚动card -->
        <div class="options-container">
          <ul ref="carousel">
            <li>
              <div class="option-wrapper" @click="goTo('shop')">
                <el-card class="option">
                  <div class="card-label">项目</div>
                  <a class="card-image font-neon">管理后台</a>
                </el-card>
              </div>
            </li>
            <li>
              <div class="option-wrapper" @click="goTo('blog')">
                <el-card class="option">
                  <div class="card-label">博客</div>
                  <a class="card-image font-transparent">个人博客</a>
                </el-card>
              </div>
            </li>
            <li>
              <div class="option-wrapper" @click="goTo('flask')">
                <el-card class="option">
                  <div class="card-label">接口</div>
                  <a class="card-image card-swagger font-huerotate">Flask</a>
                </el-card>
              </div>
            </li>
            <li>
              <div class="option-wrapper" @click="goTo('django')">
                <el-card class="option">
                  <div class="card-label">接口</div>
                  <a class="card-image card-swagger font-magic">Django</a>
                </el-card>
              </div>
            </li>
            <li>
              <div class="option-wrapper" @click="goTo('gin')">
                <el-card class="option">
                  <div class="card-label">接口</div>
                  <a class="card-image card-swagger font-huerotate">Gin</a>
                </el-card>
              </div>
            </li>
          </ul>
        </div>

        <!-- c. 向后的图标 -->
        <i class="el-icon-arrow-right carousel-arrow" @click="scroll(1)"></i>
      </div>
    </div>

    <div class="footer-container">
      <footer>
        <p>
          <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">
            <img :src="require('@/assets/img/tb1.png')" alt="" style="width: 20px" />
          </a>
          <a href="https://beian.miit.gov.cn/" target="_blank" style="color: white; font-size: 20px">
            浙ICP备18007284号-1
          </a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoScrollInterval: null,
      currentScrollIndex: 0,
      maxScrollIndex: 2,
    };
  },
  methods: {
    goTo(destination) {
      if (destination == "shop") {
        // window.location.href = process.env.VUE_APP_SHOP_HOST;
        window.open(process.env.VUE_APP_SHOP_HOST, "_blank");
      } else if (destination == "blog") {
        // window.location.href = process.env.VUE_APP_BLOG_HOST;
        window.open(process.env.VUE_APP_BLOG_HOST, "_blank");
      } else if (destination == "flask") {
        // window.location.href = process.env.VUE_APP_SHOP_FLASK_HOST;
        window.open(process.env.VUE_APP_SHOP_FLASK_HOST, "_blank");
      } else if (destination == "gin") {
        // window.location.href = process.env.VUE_APP_SHOP_GIN_HOST;
        window.open(process.env.VUE_APP_SHOP_GIN_HOST, "_blank");
      } else if (destination == "django") {
        // window.location.href = process.env.VUE_APP_SHOP_DJANGO_HOST;
        window.open(process.env.VUE_APP_SHOP_DJANGO_HOST, "_blank");
      } else {
        window.open(process.env.VUE_APP_SHOP_DJANGO_HOST, "_blank");
      }
    },
    /* 根据direction来决定移动 */
    scroll(direction) {
      const carousel = this.$refs.carousel;
      const scrollAmount = 330;
      const step = direction * 10; // 每一帧滚动的距离
      const frames = scrollAmount / step; // 需要的帧数
      let frameCount = 0; // 当前帧数

      /* 添加动画效果 */
      const animateScroll = () => {
        carousel.scrollLeft += step;
        frameCount++;
        if (frameCount < frames) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
      // carousel.scrollLeft += scrollAmount * direction;
      this.currentScrollIndex = carousel.scrollLeft / scrollAmount;
    },
  },
  mounted() {
    this.autoScrollInterval = setInterval(() => {
      if (this.currentScrollIndex >= this.maxScrollIndex) {
        const carousel = this.$refs.carousel;
        this.currentScrollIndex = 0;
        carousel.scrollLeft = 0;
      } else {
        this.scroll(1);
      }
    }, 5000);
  },
  beforeDestory() {
    clearInterval(this.autoScrollInterval);
  },
};
</script>

<style scoped>
a {
  text-decoration: none; /* 移除下划线 */
  color: inherit; /* 使链接颜色与其父元素相同 */
  cursor: pointer; /* 通常，链接会有一个手形光标，但您可以根据需要调整 */
  background-color: transparent; /* 移除背景色 */
  font-style: inherit; /* 防止斜体样式 */
  font-weight: inherit; /* 防止加粗 */
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none; /* 移除默认的列表标记（例如，圆点） */
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between; /* 将主轴的空间分布在容器的两个子元素之间 */

  background-image: url(~@/assets/img/bg.jpg);
  background-size: 100%;
}

.carousel-container {
  margin: 10px auto;
}

.carousel-container-ul {
  display: flex;
  align-items: center;

  overflow: hidden;
  margin: 10px auto;
  overflow: hidden; /* 隐藏滚动条 */
  white-space: nowrap; /* 确保内容不换行 */
}

.carousel-arrow {
  cursor: pointer;
  font-size: 64px;
  padding: 0 10px;
  color: white;
  z-index: 1;
}

.options-container {
  margin-top: 100px;
  width: 990px;
}

.options-container ul {
  display: flex;
  flex-wrap: nowrap; /* 确保内容不换行 */
  overflow-x: hidden; /* 隐藏滚动条 */
}

.option-wrapper {
  transition: all 0.3s;
  border-radius: 5px;
  height: 60vh;
  overflow: hidden;

  width: 330px; /* 设置固定宽度 */
  display: inline-block; /* 让内容水平排列 */
}

.option-wrapper:hover {
  background-color: rgba(138, 150, 84, 0.4);
}

.option {
  /* 将el-card背景设置为透明 */
  background: rgba(255, 255, 255, 0.1);

  /* 删除el-card默认的边框 */
  box-shadow: none;
  border: none;
  position: relative;

  margin: 10px;

  /* 居中 */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  text-align: center;
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

.footer-container {
  padding-bottom: 20px;
  margin-bottom: 20px;
  text-align: center;
}

/* 透明背景, 只保留边框 */
.font-transparent {
  /* 设置背景 */
  color: transparent;
  /* 设置字体的边框 */
  -webkit-text-stroke: 3px #6d2901;
  text-stroke: 3px #6d2901;
}

/* 发光字体 */
.font-neon {
  color: #fff;
  text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff, 0 0 100px #0ebeff, 0 0 200px #0ebeff;
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

.card-label {
  position: absolute;
  top: 10px; /* 调整为所需的位置 */
  left: 10px; /* 调整为所需的位置 */
  color: #ab6e35;

  width: 80px;
  height: 80px;
  border-radius: 50%; /* 使其为圆形 */
  font-size: 32px; /* 字体大小 */
  background-color: rgba(249, 249, 249, 0.5); /* #f9f9f9 */

  /* 居中 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
