<template>
  <div>
    <el-form v-model="formData"   class="demo-form-inline">
      <el-form-item :label="item.name" 
        v-for="(item, index) in formData.personList" 
        :key='item.id'
      >
        <baseSelect :item = 'item' v-model="item.fId"></baseSelect>
        <el-button type="danger" icon="el-icon-delete" circle size='small' @click="del(index)"></el-button>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
        <el-button @click="add">增加</el-button>
      </el-form-item>
    </el-form>
    <p v-for="item in list" :key="item.id"> {{item.name}} {{item.id}} </p>
    <button @click="change_index">修改顺序</button>
    <img src="https://user-gold-cdn.xitu.io/2019/7/30/16c3f20e0bfc9f24?imageslim" alt="">
  </div>
</template>
<script>
import baseSelect from '@/components/baseSelect.vue'
export default ({
  components :{
    baseSelect
  },
  data () {
    return {
      formData: {
        personList:[{
          id: 1, 
          name:'张三',
          fId: 11,
          family: [{
            id:11,
            name: '爸爸'
          }, {
            id:12,
            name: '妈妈'
          }, {
            id:13,
            name: '妻子'
          }]
        }, {
          id: 2, 
          name:'李四',
          fId: 12,
          family:[{
            id:11,
            name: '爸爸'
          }, {
            id:12,
            name: '妈妈'
          }, {
            id:13,
            name: '妻子'
          }]
        }, {
          id: 3, 
          name:'王五',
          fId: 13 ,
          family:[{
            id:11,
            name: '爸爸'
          }, {
            id:12,
            name: '妈妈'
          }, {
            id:13,
            name: '妻子'
          }]
        }]
      },
      list:[{
        id:1,
        name:'历史',
      }, {
        id:2,
        name:'生物',
      }, {
        id:3,
        name:'化学',
      }]
    }
  },
  methods: {
    add(){
      const obj = {
        id: 4, 
        name:'马六',
        fId: 13 ,
        family:[{
          id:11,
          name: '爸爸'
        }, {
          id:12,
          name: '妈妈'
        }, {
          id:13,
          name: '妻子'
        }]
      }
      this.formData.personList.push(obj)

    },
    del(index) {
      this.formData.personList.splice(index,1)
    },
    onSubmit(){
      console.log(this.formData);
    },
    change_index(){
      const a = this.list[0];
      this.list[0] = this.list[1];
      this.list[1] = a;
      console.log(this.list);
    }
  }
})
</script>
<style scoped lang='scss'>
  .demo-form-inline{
    width: 500px;
    margin: 0 auto;
  }
</style>
