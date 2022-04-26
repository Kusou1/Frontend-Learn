import { User } from '@/api/user'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 声明 State 类型
export interface State {
  count: number
  user: User | null
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 123,
    user: JSON.parse(window.localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUser (state, user: User) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
