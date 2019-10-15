<template>
  <el-row>
    <el-col :span="5">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <!-- <template slot="title">
            <i class="el-icon-location" />
            <span>导航一</span>
          </template> -->
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item
          index="3"
          disabled
        >
          <i class="el-icon-document" />
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col
      :span="6"
      :offset="6"
    >
      <div id="echart" />
    </el-col>
    <el-button @click="fn">按钮</el-button>
  </el-row>
</template>

<script>
import { get } from '@/api/axios'
import { Button, Select, Row, Col, Menu, MenuItem, MenuItemGroup, Submenu } from 'element-ui'
import { changeTitle } from 'util'
Vue.use(Button)
Vue.use(Select)
Vue.use(Col)
Vue.use(Row)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
export default {
  name: 'Home',
  data() {
    return {
      isShow: true
    }
  },
  watch: {
    DATA: function(older, newer) {
      console.log(older, newer)
    }
  },
  created() {
    get('/home/other/data/weatherInfo?city=杭州').then(res => {
      console.log(res.data.weather)
    })
    changeTitle('神奇的时间')
  },
  mounted() {
    var echarts = require('echarts')

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart'))
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    fn() {
      this.$toast({
        type: 'error',
        msg: '你好吐司哈哈哈哈哈哈哈或或或或或或或或或或或或或'
      })
    }
  }
}
</script>

<style lang="scss">
#echart {
  width: 300px;
  height: 300px;
}
</style>>
