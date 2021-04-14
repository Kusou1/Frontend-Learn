<template>
  <div id="app">
    <h1>zhang</h1>
    <!-- 根路由的出口 -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      a: 1,
      b: "2",
      c: [],
      d: {
        a: 1,
        b: "2",
      },
    };
  },
  methods: {
    test() {
      //this.a.
      //this.b.
      //a下没有定义的方法ts会自动报错
      // this.a.abc();
    },
  },
})
</script>




<!--<script>
// 1. 编辑器给的类型提示
 // 2. TypeScript 编译期间的类型验证
export default {
  data() {
    return {
      a: 1,
      b: "2",
      c: [],
      d: {
        a: 1,
        b: "2",
      },
    };
  },
  methods: {
    test() {
      //this.a.
      //this.b.
      this.a.abc();
    },
  },
};
</script>-->


<style lang="scss" scoped>
</style>
