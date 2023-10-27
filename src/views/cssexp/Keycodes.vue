<template>
  <div class="csscontainer-wrapper">
    <div class="keycontainer">
      <div>
        <div v-if="!showKey" class="key">Press any key to get the keyCode</div>
        <div v-if="showKey">
          <div class="key">
            {{ keyDisplay }}
            <small>event.key</small>
          </div>
          <div class="key red">
            {{ keyCode }}
            <small>event.keyCode (old)</small>
          </div>
          <div class="key green">
            {{ code }}
            <small>event.code (new)</small>
          </div>
        </div>
      </div>
    </div>
    <div class="keycontent">
      <h2>功能说明</h2>
      <p>自动识别当前键盘输入的任何按键并在屏幕上输出: key, keyCode, eventCode.</p>
      <ul>
        <li>通过flex, justify-content, align-items进行居中是常用的方式, 通过flex来进行div的排列也是常用的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keycodes",
  data() {
    return {
      showKey: false,
      keyDisplay: "",
      keyCode: "",
      code: "",
    };
  },
  methods: {
    handleKeydown(event) {
      this.keyDisplay = event.key === " " ? "Space" : event.key;
      this.keyCode = event.keyCode;
      this.code = event.code;

      if (!this.showKey) {
        this.showKey = true;
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style scoped>
.csscontainer-wrapper {
  background-color: #e1e1e1;
  height: 100vh;
  overflow: hidden;
  margin: 0;

  /* 确保子元素居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.keycontainer {
  height: 50%;
  /* 居中, 确保按键位置显示正常 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 设置一个单独的content说明区域 */
.keycontent {
  height: 50%;
  width: 600px;
  margin: 0 auto;
  text-align: left;
}

.keycontent h2 {
  margin-bottom: 0.5em;
}

.keycontent p {
  color: #333;
  line-height: 1.5;
}

li {
  margin-left: 2em;
  list-style-type: disc;
}

ul {
  margin-top: 1em;
  margin-bottom: 1em;
}

.key {
  background-color: #eee;
  margin: 10px;
  min-width: 150px;
  font-size: 20px;
  font-weight: bold;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  position: relative;
}

.key small {
  position: absolute;
  top: -24px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #555;
  font-size: 14px;
}

.red {
  color: #ab5052;
}

.green {
  color: #60986f;
}
</style>
