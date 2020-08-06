<template>
  <div>
    <p>index</p>
    <p>count: </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    mounted(){
      console.log(this.$store.state.index_text);
    },
    cpmputed : mapState({
      count_num () {
        return this.$store.state.count
      },
      map_text: state => state.map_text
    }),
    // cpmputed : {
    //   count_num () {
    //     return this.$store.state.count
    //   },
    // },
    methods:{
      add(){
        // this.$store.commit
      },
    }
  }
</script>

<style>

</style>