<template>
  <Parcel :config="parcelConfig" :mountParcel="mountParcel" />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <router-link to="/foo">foo</router-link>
  <router-link to="/bar">bar</router-link>
  <router-view name="foo" />
</template>

<script>
// Parcel 用来创建公共 UI，涉及到跨框架共享 UI 时需要使用 Parcel。
// Parcel 的定义可以使用任何 single-spa 支持的框架，它也是单独的应用，需要单独启动，但是它不关联
// 路由。
// Parcel 应用的模块访问地址也需要被添加到 import-map 中，其他微应用通过 System.import 方法进行
// 引用。
// 需求：创建 navbar parcel，在不同的应用中使用它。
import HelloWorld from "./components/HelloWorld.vue";
import Parcel from "single-spa-vue/parcel";
import { mountRootParcel } from "single-spa";

export default {
  name: "App",
  components: {
    HelloWorld,
    Parcel,
  },
  data() {
    return {
      parcelConfig: window.System.import("@study/navbar"),
      mountParcel: mountRootParcel,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
