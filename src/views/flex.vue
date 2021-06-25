<template>
  <div class="flex-wrapper">
    <ul class="name-list">
      <li>剑来</li>
      <li>雪中</li>
      <li>第一</li>
    </ul>

  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .flex-wrapper{
    width: 1000px;
    margin: 0 auto;
    box-shadow: 0px 0px 7px #8c1616;
    .name-list{
      display: flex;
      justify-content: center;
      li{
        flex: 1;
        &:hover{
          background: #2054ae;
          color: #ffffff;
        }
      }
    }
  }
</style>