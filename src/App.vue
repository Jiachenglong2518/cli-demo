<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about"> About</router-link> 
      <router-link to="/for-key">  v-for:key</router-link> 
      <router-link to="/personal/index"> 个人中心</router-link> 
      <router-link to="/flex"> flex布局</router-link>
      <router-link to="/animation"> 动画</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('./assets/reset.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
