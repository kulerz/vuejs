<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="test" @click="test1()">全局方法</button>
    <button class="test" v-globalDirective="{en:'globalDirective', cn: '全局指令', enColor:'darkblue', cnColor:'black'}">全局指令</button>
    <button class="test" @click="test4()">实例方法</button>
  </div>
</template>

<script>
import Vue from 'vue'
import plugin from '../../src/plugin/plugin.js'
Vue.use(plugin)


export default {
  name: 'test',
  data () {
    return {
      msg: '插件测试页'
    }
  },
  methods: {
      test1: function () {
        Vue.myPlugin()
      },
      test4: function () {
        this.$myMethod();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.test {
    width: 100px;
    height: 30px;
}
</style>
