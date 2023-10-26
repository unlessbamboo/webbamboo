<template>
  <div class="container" @click="disableSearch">
    <div class="search" ref="search">
      <input type="text" class="input" ref="searchInput" placeholder="Search..." />
      <button class="btn" @click="showSearch"><i class="fa fa-search"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    showSearch() {
      this.$refs.search.classList.toggle("active");
      this.$refs.searchInput.focus();
    },
    // 鼠标点击外围插件的时候缩小搜索框
    disableSearch(event) {
      if (!this.$refs.search.contains(event.target)) {
        this.$refs.search.classList.remove("active");
      }
    },
  },
};
</script>

<style scoped>
.container {
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.search {
  position: relative;
  height: 50px;
}

.search .input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.3s ease;
}

.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.btn:focus,
.input:focus {
  outline: none;
}

.search.active .input {
  width: 200px;
}

.search.active .btn {
  transform: translateX(198px);
}
</style>
