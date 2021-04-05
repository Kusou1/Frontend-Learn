<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register"
              >Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }}
                {{ message }}
              </li>
            </template>
            <li>That email is already taken</li>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="user.username"
                placeholder="Your Name"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
                minlength="8"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, register } from "@/api/user";

// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware:'notAuthenticated',
  name: "LoginIndex",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      //错误信息
      errors: {},
    };
  },
  methods: {
    async onSubmit() {
      try {
        // 提交表单请求登录
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });

        // console.log(data);
        // 保存用户的登录状态
        // 同构渲染时要注意，不像平常的客户端渲染，他需要前后端都可以拿到这个登录状态

        this.$store.commit("setUser", data.user);

        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set("user", data.user);

        // 跳到首页
        this.$router.push("/");
      } catch (err) {
        // console.log("请求失败", err);
        this.errors = err.response.data.errors;
      }
    },
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  watch: {},
};
</script>
<style scoped>
</style>