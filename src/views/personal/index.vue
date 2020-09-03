<template>
  <section>
    <h3>欢迎来到个人中心</h3>
    <left-menu></left-menu>
    <!-- <router-view></router-view> -->
  </section>
</template>
<script>
  import leftMenu from '../../components/leftmenu'
  export default {
    components : {
      'left-menu' : leftMenu
    }
  }
</script>