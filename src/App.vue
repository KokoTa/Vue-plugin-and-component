<template>
  <div id="app">
    <div id="nav">
      <h1>Catalog</h1>
      <template v-for="(key, value, index) in links">
        <router-link class="link" :class="{ active: active === index }" :to="key" :key="index" @click.native="handleChoose(index)">{{value}}</router-link>
      </template>
    </div>
    <router-view class="show-screen" />
  </div>
</template>

<script>
import links from './links.js'

export default {
  data() {
    return {
      links,
      active: -1
    }
  },
  methods: {
    handleChoose(index) {
      this.active = index;
    }
  }
}
</script>


<style lang="scss">
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
}

#nav {
  width: 200px;
  height: 100%;
  background: purple;
  overflow: auto;
  text-align: center;
  color: white;
  .link {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    background: pink;
    line-height: 5;
    color: white;
    cursor: pointer;
    transition: .25s ease;
  }
  .active {
    background: coral;
  }
}

.show-screen {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 200px;
  right: 0;
  background: lightblue;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
