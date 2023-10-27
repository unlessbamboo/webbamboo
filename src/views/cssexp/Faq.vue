<template>
  <div class="faqcontainer-wrapper">
    <div class="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div class="faq active" ref="faqactive">
        <h3 class="faq-title">点击的时候展开并设置背景</h3>
        <p class="faq-text">外边距塌陷: 垂直外边距相遇时会合并为一个外边距, 其大小等于两个合并外边距的较大者</p>
        <p class="faq-text">
          外边距塌陷: 一个块级元素位于其父元素的顶部并且具有margin top时, 其外边距会穿透到父元素, 解决办法:
          父元素设置内边距, 添加边框, 设置overflow
        </p>
        <button class="faq-toggle" @click="activeFaq">
          <i class="fa fa-chevron-down"></i>
          <i class="fa fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  methods: {
    activeFaq() {
      this.$refs.faqactive.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.faqcontainer-wrapper {
  background-color: #f0f0f0;
  height: 100vh;
  overflow: hidden;
}

h1 {
  margin: 50px 0 30px;
  text-align: center;
}

.faq-container {
  max-width: 600px;
  margin: 0 auto;
}

.faq {
  background-color: transparent;
  border: 1px solid #9fa4a8;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.3 ease;
}

.faq.active {
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

.faq.active::before,
.faq.active::after {
  content: "\f075";
  font-family: "Font Awesome 4 Free";
  color: #2ecc71;
  font-size: 7rem;
  position: absolute;
  opacity: 0.2;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.faq.active::before {
  color: #3498db;
  top: -10px;
  left: -30px;
  transform: rotateY(180deg);
}

.faq-title {
  margin: 0 35px 0 0;
}

.faq-text {
  display: none;
  margin: 30px 0 0;
}

.faq.active .faq-text {
  display: block;
}

.faq-toggle {
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;
}

.faq-toggle:focus {
  outline: 0;
}

.faq-toggle .fa-times {
  display: none;
}

.faq.active .faq-toggle .fa-times {
  color: #fff;
  display: block;
}

.faq.active .faq-toggle .fa-chevron-down {
  display: none;
}

.faq.active .faq-toggle {
  background-color: #9fa4a8;
}
</style>
