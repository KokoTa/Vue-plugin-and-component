<template>
  <transition name="vue-toast-k-transition">
    <section class="vue-toast-k" v-if="show">
      <div class="vue-toast-k-box">
        <span class="vue-toast-k-text">{{ message }}</span>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      duration: 1000,
    };
  },
  watch: {
    show() {
      setTimeout(() => {
        this.show = false;
      }, this.duration);
    }
  }
}
</script>

<style>
.vue-toast-k {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(158, 158, 158, .8);
}
.vue-toast-k-box {
  color: white;
  background: black;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 20px white;
}
.vue-toast-k-transition-enter-active, .vue-toast-k-transition-leave-active {
  transition: opacity .5s;
}
.vue-toast-k-transition-enter, .vue-toast-k-transition-leave-to {
  opacity: 0;
}
</style>
