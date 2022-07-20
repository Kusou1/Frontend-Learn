<template>
  <div>
    <van-tabs v-model="activeTab" @click="changeTab">
       <van-tab v-for="(k, index) in types" :key="index" :title="Object.values(k)[0]" :name="Object.keys(k)[0]">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getNewsList">
            <van-cell v-for="item in news" :key="item.uniquekey" :title="item.title" >
              <template #icon>
                <img :src="item.thumbnail_pic_s" alt="" style="width: 5rem; height:4rem; margin-right:.4rem;">
              </template>
              <template #title>
                <span>{{item.title}}</span>
              </template>
              <template #label>
                <span>{{item.date}}</span>&nbsp;&nbsp;
                <span>{{item.author_name}}</span>
              </template>
            </van-cell>
          </van-list>
       </van-tab>
    </van-tabs>

    
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { newsList } from '@/api'

export default {
  name: "News",
  setup () {
    const state = reactive({
      type: "top",
      types: [
        { "top": "推荐" },
        { "guonei": "国内" },
        { "guoji": "国际" },
        { "yule": "娱乐" },
        { "tiyu": "体育" },
        { "junshi": "军事" },
        { "keji": "科技" },
        { "caijing": "财经" },
        { "shishang": "时尚" },
        { "youxi": "游戏" },
        { "qiche": "汽车" },
        { "jiankang": "健康" }
      ],
      activeTab: 0,
      page: 1,
      pageSize: 10,
      news: [],
      loading: false,
      finished: false
    })

    const router = useRouter()

    // 自定义函数
    const getNewsList = () => {
      state.loading = true;
      state.finished = false;
      newsList(state.type, state.page, state.pageSize).then(res => {
        if (res.error_code === 0) {
          console.log(res)
          state.news = res.result.data
          state.finished = true
          state.loading = false
        } else if (res.error_code === 10012) {
          alert('请求超过次数限制')
        } else {
          alert('请求失败')
        }
      }).catch(err => {
        console.log(err)
      })
    }

    const changeTab = (name, title) => {
      console.log(name, title)
      state.type = name
      getNewsList()
    }

    // 挂载完成
    onMounted (() => {
      // getNewsList()
    })

    return {
      ...toRefs(state),
      getNewsList,
      changeTab
    }
  },
}

</script>
<style lang="less" scoped>

</style>