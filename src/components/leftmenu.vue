<template>
  <section>
    <header>
      <slot name='header' :user_info = 'user_info' :school = 'school_info'></slot>
    </header>
    <ul class="left-menu">
      <li>主页</li>
      <li>我的账户</li>
      <li>历时记录</li>
    </ul>
  </section>
</template>
<script>
export default {
  data () {
    return {
      user_info:{
        name:'Long',
        nick_name:'vue'
      },
      school_info: {
        name:'hjluniversity',
        addr: 74,
      }
    }
  }
}
</script>
<style lang="css" scoped>
*{
  margin: 0;
  padding: 0;
}
.left-menu{
  width: 200px;
}
.left-menu li{
  margin-top: 5px;
  list-style: none;
  background :green;
  color: #ffffff;
}
</style>