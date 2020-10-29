<template>
  <section>
    <left-menu>
      <!-- 带有子组件值的插槽 -->
      <template v-slot:header = '{user_info, school}'> 
        <div class="">{{ user_info.name }}</div>
        <h2>{{school.name}}</h2>
        <!-- <h1>欢迎来到{{header_val.user_info.name}}个人中心</h1> -->
        <!-- <h2>{{header_val.user_info.name}}来自于{{header_val.school.name}}</h2> -->
      </template>
      <span>my name</span> 
    </left-menu>
  </section>
</template>
<script>
  import leftMenu from '../../components/leftmenu'
  export default {
    components : {
      'left-menu' : leftMenu
    },
  }
</script>