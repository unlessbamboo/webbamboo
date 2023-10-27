<template>
  <div class="csscontainer-wrapper">
    <div class="csscontainer" ref="csscontainer">
      <div class="split left" @mouseenter="splitEnterLeft" @mouseleave="splitLeaveLeft">
        <h2>PlayStation 5</h2>
        <a href="#" class="btn">Buy Now</a>
      </div>

      <div class="split center" @mouseenter="splitEnterCenter" @mouseleave="splitLeaveCenter">
        <h3>分割页面随鼠标移动测试页面</h3>
        <div class="page-content">
          <p>这是一个测试div宽度跟随鼠标进行移动动画的测试页面.</p>
          <ul>
            <li>css的变量定义在多个vue页面中不能定义相同变量, 例如:root, 否则可能会产生冲突</li>
            <li>按钮使用absolute进行居中定位确保里面的a链接标签居中</li>
            <li>左右两个页面通过before伪元素设置一个100%高宽的背景色</li>
          </ul>

          <h4 id="改动" style="color: red">改动</h4>
          <ol>
            <li>将两屏分割更改为三屏, 同时调整中间的绝对定位的left值确保能够另外两屏能够联动调整</li>
          </ol>
        </div>
      </div>

      <div class="split right" @mouseenter="splitEnterRight" @mouseleave="splitLeaveRight">
        <h2>Genshin Impact</h2>
        <a href="#" class="btn">Go To</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitLandPage",
  methods: {
    splitEnterLeft() {
      this.$refs.csscontainer.classList.add("hover-left");
    },
    splitLeaveLeft() {
      this.$refs.csscontainer.classList.remove("hover-left");
    },
    splitEnterCenter() {
      this.$refs.csscontainer.classList.add("hover-center");
    },
    splitLeaveCenter() {
      this.$refs.csscontainer.classList.remove("hover-center");
    },
    splitEnterRight() {
      this.$refs.csscontainer.classList.add("hover-right");
    },
    splitLeaveRight() {
      this.$refs.csscontainer.classList.remove("hover-right");
    },
  },
};
</script>

<style scoped>
h2,
h3 {
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

.csscontainer-wrapper {
  height: 100vh;
  overflow: hidden;
  margin: 0;

  --left-bg-color: rgba(87, 84, 236, 0.7);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --center-bg-color: rgba(125, 43, 43, 0.8);
  --left-btn-hover-color: rgba(87, 84, 236, 1);
  --right-btn-hover-color: rgba(28, 122, 28, 1);
  --hover-width: 60%;
  --minimize-width: 20%;
  --transition-speed: 1s;
}

.csscontainer {
  /* 通过relative确保子元素能够绝对定位进行居中处理 */
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
}

.page-content {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);

  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  width: 100%;
  padding: 1.5rem;
}

.btn {
  /* 确保btn后续的子节点居中 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* btn自身的居中 */
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);

  color: #fff;
  border: #fff solid 0.2rem;
  padding: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  width: 15rem;
  text-decoration: none;
  text-transform: uppercase;
}

.split.left .btn:hover {
  background-color: var(--left-btn-hover-color);
  border-color: var(--left-btn-hover-color);
}

.split.right .btn:hover {
  background-color: var(--right-btn-hover-color);
  border-color: var(--right-btn-hover-color);
}

.split.center .btn:hover {
  background-color: var(--right-btn-hover-color);
  border-color: var(--right-btn-hover-color);
}

/* 通过设置50%宽度, 从而让左右两边各占一半屏幕 */
.split {
  position: absolute;
  width: 33.33%;
  height: 100%;
  overflow: hidden;
}

.split.left {
  left: 0;
  /* background: url("") no-repeat center / cover; */
}

.split.left::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--left-bg-color);
}

.split.center {
  left: 33.33%;
}

.split.center::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--center-bg-color);
}

.split.right {
  right: 0;
  /* background: url("") no-repeat center / cover; */
}

.split.right::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 43, 43, 0.8);
}

.split.left,
.split.right,
.split.center,
.split.center::before,
.split.left::before,
.split.right::before {
  transition: all 1s ease-in-out;
}

.hover-left .left {
  width: var(--hover-width);
}

.hover-left .right,
.hover-left .center {
  width: var(--minimize-width);
}

.hover-left .center {
  left: 60%;
}

.hover-right .right {
  width: var(--hover-width);
}

.hover-right .left,
.hover-right .center {
  width: var(--minimize-width);
}

.hover-right .center {
  left: 20%;
}

.hover-center .center {
  width: var(--hover-width);
  left: 20%;
}

.hover-center .left,
.hover-center .right {
  width: var(--minimize-width);
}

@media (max-width: 800px) {
  h2 {
    font-size: 2rem;
    top: 30%;
  }
  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>
