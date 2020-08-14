<template>
  <div>
    <h2>This is index</h2>
    <p>count: {{count_num}}</p>
    <button @click="add">add count</button> 
    <button @click="index_add">index add count</button> 
    <button @click="start_actions"> 异步加10 </button> 
    <button @click="start_actions"> es6解构传参数加10 </button> 
    <p>text: {{index_text}}</p>
    <p>map_text: {{map_text}}</p>
    <!-- <p>mapState同名属性{{same_name}}</p> -->
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
  export default {
    mounted(){
      console.log(this.$store.state.index_text);
      console.log(this.concat_text,'concat_text');
      
    },
    computed : {
      count_num () {
        console.log(this);
        return this.$store.state.count
      },
      concat_text () {
        // getters 属性，相当于computed
        return this.$store.getters.concat_text;
      },
      // 直接生成计算属性
      ...mapState({
        index_text: state => state.index_text,
        map_text: (state) => {
          return state.map_text;
        },
      }),
      /** 同名属性之际调用 **/
      // ...mapState([
      //   // 映射 this.same_name 为 store.state.same_name
      //   'same_name'
      // ])

    },
    methods:{
      // 将index_add  映射为  this.$store.commit('countadd') 
      ...mapMutations({
        index_add: 'countadd'
      }),
      add(){
        this.$store.commit('countadd')
      },
      start_actions(){
        this.$store.dispatch('async_add',10)
      },
      // action 调用
      start_actions_es6 () {
        this.$store.dispatch('async_es6',10)
      }
    }
  }
</script>

<style lang=scss>
  button{
    margin: 0 5px;
  }
</style>