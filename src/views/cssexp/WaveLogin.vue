<template>
  <div class="csscontainer-wrapper">
    <div class="csscontainer">
      <h1>Please Login</h1>
      <form>
        <div class="form-control" v-for="control in loginControls" :key="control.id">
          <input :type="control.type" required />
          <label v-html="control.transformedLabel"></label>
        </div>

        <button class="btn">Login</button>
        <p class="text">
          <a href="#">Register</a>
        </p>
        <p class="text">
          问题1: vue中使用scoped时, Vue 会为模板中的每个 DOM 节点添加一个唯一的属性,
          但是使用v-for和v-html进行动态生成标签生成时, 就不会为这个动态标签设置data-v-xxx属性, 此时就会产生问题:
          即样式不生效. 
          <ol>
            <li>解决办法: 不适用scoped, 使用深度选择器, 使用动态组件 </li>
            <li>建议: 不建议使用v-html</li>
          </ol>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaveLogin",
  data() {
    return {
      loginControls: [
        { id: 1, type: "text", label: "Email", transformedLabel: "" },
        { id: 2, type: "password", label: "Password", transformedLabel: "" },
      ],
    };
  },
  created() {
    this.transformLabels();
  },
  methods: {
    transformLabels() {
      this.loginControls.forEach((control) => {
        control.transformedLabel = control.label
          .split("")
          .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
          .join("");
      });
      console.log(this.loginControls);
    },
  },
};
</script>

<style scoped>
.csscontainer-wrapper {
  background-color: steelblue;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.csscontainer {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
  width: 60vh;
}

.csscontainer h1 {
  text-align: center;
  margin-bottom: 30px;
}

.csscontainer a {
  text-decoration: none;
  color: lightblue;
}

.btn {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.btn:focus {
  outline: 0;
}

.btn:active {
  transform: scale(0.98);
}

.text {
  margin-top: 30px;
}

.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 100%;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label >>> span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 当点击输入框的时候产生动画效果 */
.form-control input:focus + label >>> span,
.form-control input:valid + label >>> span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>
