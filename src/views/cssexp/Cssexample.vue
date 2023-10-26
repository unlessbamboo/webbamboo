<template>
  <!-- 页面功能: css示例链接页面 -->
  <div class="container">
    <div class="css-container">
      <ul>
        <li><router-link to="/cssexp/progress">css进度条示例</router-link></li>
        <li><router-link to="/cssexp/navrotating">旋转导航实例</router-link></li>
        <li><router-link to="/cssexp/search">搜索框实例</router-link></li>
        <li><router-link to="/cssexp/splitelangpage">切割页面实例</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style scope>
a {
  text-decoration: none; /* 移除下划线 */
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
  flex-direction: column; /* 设置弹性容器的主轴方向为垂直 */
  align-items: center; /* 在弹性容器的交叉轴上（此处为水平轴）居中对齐子元素 */
  justify-content: center; /* 在弹性容器的主轴上（此处为垂直轴）居中对齐子元素 */
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
</style>
