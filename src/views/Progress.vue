<template>
  <!-- 页面功能: 进度指示器 -->
  <div class="container">
    <div class="progress-container">
      <div class="progress" id="progress"></div>
      <div class="circle active">1</div>
      <div class="circle">2</div>
      <div class="circle">3</div>
      <div class="circle">4</div>
    </div>
    <button class="btn" id="prev" disabled>Prev</button>
    <button class="btn" id="next">Next</button>
  </div>
</template>

<script></script>

<style scope>
.container {
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: ""; /* Mandatory with ::before */
  background-color: var(--line-border-empty); /* 进度尚未完成的颜色 */
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
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
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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
