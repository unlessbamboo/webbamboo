<template>
  <div class="conatiner-wrapper">
    <!-- 1. container内容等区域 -->
    <div class="container" ref="containerRef">
      <div class="circle-container">
        <div class="circle">
          <button id="close" @click="closeNav">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <button id="open" @click="openNav">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="content">
        <h1>旋转导航</h1>
        <small>unusebamboo</small>
        <p>这是一个旋转导航的测试示例页面，其分为两大区域: container, nav， 他们的功能介绍如下：</p>
        <ul>
          <li>container: 包含content和circle container，前者是主题内容介绍区域，后者是左上角绝对定位的导航开启区域</li>
          <li>nav: 导航区域</li>
        </ul>
        <p>整个页面实现如下的几个效果：</p>
        <ul>
          <li>a. content展示正常的图片文本内容</li>
          <li>b. 点击circle container则显示导航区域</li>
        </ul>

        <p>实际实现机制: 将整块div通过transform进行选择, 从而暴露出之前被隐藏的内容</p>

        <h2 id="问题">问题</h2>
        <ol>
          <li>
            在转换代码的的时候碰到fa无法生效的问题, 即使已经安装font-aewsome并且导入了css, 后来发现是class写错了,
            猜测可能原因是不同的fonts版本, 毕竟原始页面是直接通过URL导入版本可能更新.
          </li>
          <li>
            在Content的右边出现两个垂直竖线, 高度和内容区保持一致, 猜测可能是div.content样式问题.
            最后经过排查发现是div.content多了一个overflow-y的样式导致右侧出现了一个滚动条.
          </li>
          <li>
            nav采用固定定位的方式, 至于为何初始的时候nav下面的li会隐藏则是下属的li的样式导致的,
            主要是这个color为fff导致的, 并非z-index导致被content覆盖, 一开始以为是z-index导致被覆盖, 从而找了好久的问题
          </li>
        </ol>
      </div>
    </div>

    <!-- 2. 底部nav导航 -->
    <nav>
      <ul>
        <li>
          <i class="fa fa-home"></i>
          Home
        </li>
        <li>
          <i class="fa fa-user"></i>
          About
        </li>
        <li>
          <i class="fa fa-envelope"></i>
          Contact
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavRotating",
  methods: {
    openNav() {
      this.$refs.containerRef.classList.add("show-nav");
    },
    closeNav() {
      this.$refs.containerRef.classList.remove("show-nav");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

li {
  margin-left: 2em;
}
ul {
  margin-top: 1em;
  margin-bottom: 1em;
}
h1,
h2,
h3 {
  margin-bottom: 0.5em;
}

.conatiner-wrapper {
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
}

.container {
  background-color: #fafafa;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;

  transform-origin: top left;
  transition: transform 0.5s linear;
}

/* show-nav: 这是将整块container进行选择的最重要因素, 当然这里需要考虑到最底层画布的初始背景色

  这里表示: .container对应的元素 && 包含.show-nav类时的样式.
 */
.container.show-nav {
  transform: rotate(-20deg);
}

.circle-container {
  position: fixed;
  top: -100px;
  left: -100px;
}

.circle {
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
}

.circle button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
}

.circle button:focus {
  outline: none;
}

.circle button#open {
  left: 60%;
}

.circle button#close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
}

.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

.container.show-nav .circle {
  transform: rotate(-70deg);
}

nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  /* 确保层级最高 */
  z-index: 100;
}

nav ul {
  list-style-type: none;
  padding-left: 30px;
}

nav ul li {
  text-transform: uppercase;
  /* 颜色为白色, 从而跟conteng的背景色相融合, 在content进行偏移的时候就显示出来了, 6啊 */
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

nav ul li i {
  font-size: 20px;
  margin-right: 10px;
}

nav ul li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

nav ul li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}

.content {
  max-width: 1000px;
  margin: 50px auto;

  /* 隐藏不知道哪里出现的overflow-y */
  overflow-y: hidden;
}

.content h1 {
  margin: 0;
}

.content small {
  color: #555;
  font-style: italic;
}

.content p {
  color: #333;
  line-height: 1.5;
}

.content img {
  max-width: 100%;
}
</style>
