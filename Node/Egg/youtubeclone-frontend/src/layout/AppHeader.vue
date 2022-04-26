<template>
  <div class="sc-AxhUy JixXX">
    <div class="logo flex-row">
      <span><a href="/">YouTube Clone</a></span>
    </div>
    <div class="sc-AxjAm iVYHdX">
      <input class="search" type="text" placeholder="Search" value="" />
    </div>
    <ul>
      <template v-if="$store.state.user">
        <li>
          <div>
            <label for="video-upload" @click="isUploadShow = true">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                height="27"
                width="27"
                fill="#FFF"
                focusable="false"
              >
                <g>
                  <path
                    d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
                  ></path>
                </g>
              </svg>
            </label>
          </div>
        </li>
        <li>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            height="27"
            fill="#FFF"
            width="27"
          >
            <g>
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
              ></path>
            </g>
          </svg>
        </li>
        <li>
          <a href="/feed/my_videos">
            <img
              class="sc-AxhCb eSwYtm pointer"
              src="https://res.cloudinary.com/douy56nkf/image/upload/v1594060920/defaults/txxeacnh3vanuhsemfc8.png"
              alt="user-avatar"
          /></a>
        </li>
      </template>

      <template v-else>
        <li>
          <a href="">
            <span>SIGN IN</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>SIGN UP</span>
          </a>
        </li>
      </template>
    </ul>
  </div>

  <upload-video v-if="isUploadShow" @close="isUploadShow = false"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UploadVideo from '@/components/UploadVideo/index.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    UploadVideo
  },
  setup () {
    const isUploadShow = ref(false)
    return {
      isUploadShow
    }
  }
})
</script>
