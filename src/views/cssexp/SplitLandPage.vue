<template>
  <div class="csscontainer-wrapper">
    <div class="csscontainer" ref="csscontainer">
      <div class="split left" @mouseenter="splitEnterLeft" @mouseleave="splitLeaveLeft">
        <h1>PlayStation 5</h1>
        <a href="#" class="btn">Buy Now</a>
      </div>

      <div class="split right" @mouseenter="splitEnterRight" @mouseleave="splitLeaveRight">
        <h3>分割页面随鼠标移动测试页面</h3>
        <div class="page-content">
          <p>这是一个测试div宽度跟随鼠标进行移动动画的测试页面.</p>
          <ul>
            <li>a. css的变量定义在多个vue页面中不能定义相同变量, 例如:root, 否则可能会产生冲突</li>
            <li>b. 按钮使用absolute进行居中定位确保里面的a链接标签居中</li>
            <li>c. 左右两个页面通过before伪元素设置一个100%高宽的背景色</li>
          </ul>
        </div>
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
h1,
h3 {
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
}

h1 {
  font-size: 4rem;
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
  --left-btn-hover-color: rgba(87, 84, 236, 1);
  --right-btn-hover-color: rgba(28, 122, 28, 1);
  --hover-width: 80%;
  --minimize-width: 20%;
  --transition-speed: 1s;
}

.csscontainer {
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
  color: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  border: #fff solid 0.2rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 15rem;
  padding: 1.5rem;
}

.split.left .btn:hover {
  background-color: var(--left-btn-hover-color);
  border-color: var(--left-btn-hover-color);
}

.split.right .btn:hover {
  background-color: var(--right-btn-hover-color);
  border-color: var(--right-btn-hover-color);
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.split.left {
  left: 0;
  background: url("https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
    no-repeat center / cover;
}

.split.left::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(87, 84, 236, 0.7);
}

.split.right {
  right: 0;
  background: url("https://images.unsplash.com/photo-1607853827120-6847830b38b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1762&q=80")
    no-repeat center / cover;
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
.split.left::before,
.split.right::before {
  transition: all 1s ease-in-out;
}

.hover-left .left {
  width: var(--hover-width);
  /* width: 75%; */
}

.hover-left .right {
  width: var(--minimize-width);
  /* width: 25%; */
}

.hover-right .right {
  width: var(--hover-width);
  /* width: 75%; */
}

.hover-right .left {
  width: var(--minimize-width);
  /* width: 25%; */
}

@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }
  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>
