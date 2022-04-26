<template>
  <div class="gspRov">
    <h2>Login to your account</h2>
    <form @submit.prevent="handleSubmit">
      <ul v-if="errors" class="errors">
        <li v-for="(error, index) in errors" :key="index">
          {{ `${error.field} ${error.message}` }}
        </li>
      </ul>
      <input v-model="user.email" type="email" placeholder="email" />
      <input v-model="user.password" type="password" placeholder="password" />
      <div class="action input-group">
        <span class="pointer">Signup instead</span>
        <button :disabled="isLoading">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { login } from '@/api/user'
import { defineComponent, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

const useLogin = () => {
  const router = useRouter()
  const store = useStore()
  const route = useRoute()
  const user = reactive({
    email: 'lpzmail@163.com',
    password: '123456'
  })
  const errors = ref([])
  const isLoading = ref(false)
  const handleSubmit = async () => {
    isLoading.value = true
    errors.value = []
    try {
      const { data } = await login(user)
      store.commit('setUser', data.user)
      const redirect = (route.query.redirect || '/') as string
      router.push(redirect)
    } catch (err) {
      if (err.response.status === 422) {
        errors.value = err.response.data.detail
      }
    }
    isLoading.value = false
  }
  return {
    user,
    handleSubmit,
    errors,
    isLoading
  }
}

export default defineComponent({
  name: 'LoginIndex',
  setup () {
    return {
      ...useLogin()
    }
  }
})
</script>
