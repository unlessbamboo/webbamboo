<template>
  <!-- 页面功能: 进度指示器 -->
  <div class="container">
    <div class="container-wrapper">
      <div class="progress-container">
        <div class="progress" :style="{ width: progressWidth }" ref="progress"></div>
        <div
          v-for="(circle, index) in maxCircleNum"
          :key="index"
          :class="{ circle: true, active: index + 1 <= currentActive }">
          {{ index + 1 }}
        </div>
      </div>
      <button class="btn" @click="decrement" :disabled="currentActive === 1">Prev</button>
      <button class="btn" @click="increment" :disabled="currentActive === maxCircleNum">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentActive: 1,
      maxCircleNum: 4,
    };
  },
  computed: {
    progressWidth() {
      return ((this.currentActive - 1) / 3) * 100 + "%";
    },
  },
  methods: {
    increment() {
      this.currentActive++;
      if (this.currentActive > this.maxCircleNum) this.currentActive = this.maxCircleNum;
    },
    decrement() {
      this.currentActive--;
      if (this.currentActive < 1) this.currentActive = 1;
    },
  },
  mounted() {},
};
</script>

<style scope>
* {
  box-sizing: border-box;
}

/*
   定义了两个 CSS 自定义属性, 其中:root表示这些变量全局可用, 这样可能冲突
 */
.container {
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;

  /* 1. 占满全屏的淡灰色背景色; 2. flexbox模式, 确保其在主轴和交叉轴下的居中 */
  background-color: #f6f7fb;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  display: flex;
  justify-content: center;
  /* 交叉轴 */
  align-items: center;
}

.container-wrapper {
  text-align: center;
}

.progress-container {
  /* 弹性容器*/
  display: flex;
  /* 子元素之间平均分配空间 */
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
  z-index: 1;
}

/* 创建了一个宽度为100%、高度为4像素的水平条状伪元素，并将其垂直居中并放置在其他子元素的底部。这条线代表了进度条的背景，表示进度尚未完成的部分 */
.progress-container::before {
  content: ""; /* 伪元素内容 */
  background-color: var(--line-border-empty); /* 设置伪元素的背景颜色: 进度尚未完成的颜色 */

  /* 设置伪元素的宽度为其父元素的100%, 高度为4px, 从而产生一条灰色直线 */
  height: 4px;
  width: 100%;

  /* 将伪元素的上边缘定位到其父元素高度的中心，并将左边缘定位到父元素的左边缘 */
  position: absolute;
  top: 50%;
  left: 0;
  /* 通过 Y 轴的负偏移将伪元素向上移动其自身高度的 50%, 结合top, 确保伪元素在垂直方向居中 */
  transform: translateY(-50%);

  /* 确保这条灰色直线处于最低层级 */
  z-index: -1;
}

/*
  1. 进度指示器的基本样式是水平排列的四个圆形，这些圆形之间有一条线表示进度。
  2. 未完成的部分显示为一个浅色，完成的部分显示为一个深色
  3. 每个圆形的默认状态是空心的，而激活（或完成）状态是实心的
  4. 两个按钮具有基本的样式，以及在点击时的缩放效果
*/
.progress {
  background-color: var(--line-border-fill); /* 进度已完成的颜色 */

  /* 注意, 这个位置样式同上面的before伪元素必须保持一致 */
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  height: 4px;
  width: 0%;

  transition: 0.4s ease;
  z-index: -1;
}

/* 圆形 */
.circle {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;

  border: 3px solid var(--line-border-empty);
  transition: 0.4s ease;
}

.circle.active {
  border-color: var(--line-border-fill);
}

.btn {
  background-color: var(--line-border-fill);
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed;
}
</style>
