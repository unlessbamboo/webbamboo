<template>
  <div class="csscontainer-wrapper">
    <div ref="insert">
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.key {
  background-color: #eee;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
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
