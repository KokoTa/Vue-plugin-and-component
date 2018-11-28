<template>
  <div class="vue-toast-wrap">
    <h1>Vue-toast-k test</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  mounted() {
    this.$vtk.show("我是一个插件")
  }
}
</script>

<style lang="scss" scoped>
.vue-toast-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>