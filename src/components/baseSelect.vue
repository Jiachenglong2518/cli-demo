<template>
  <!-- <el-select v-model="localValue" placeholder="请选择">
    <el-option
      v-for="(man,index) in item.family"
      :key="index"
      :label="man.name"
      :value="man.id">
    </el-option>
  </el-select> -->
  <input type="text" v-model="t">
</template>
<script>

export default ({
  props:{
    item:{},
    value: {
      type: [Number, Object],
      default: null
    },
  },
  data () {
    return {
      t:'s'
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue === '' ? null : newValue)
      }
    }
  },
  mounted () {
    console.log(this.item);
  }
})
</script>
