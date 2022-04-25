import { request } from '@/utils/request'

interface CreateVideoInput {
  title: string
  description: string
  vodVideoId: string
}

interface VideoAuth {
  _id: string
  username: string
  avatar: string
  isSubscribed: boolean
  subscribersCount: number
}

export interface Video {
  _id: string
  title: string
  description: string
  vodVideoId: string
  commentsCount: number
  createdAt: string
  dislikesCount: number
  likesCount: number
  isLiked: boolean
  isDisliked: boolean
  viewsCount: number
  user: VideoAuth
}

interface VideoPayload {
  video: Video
}

export const createVideo = (data: CreateVideoInput) => {
  return request.post<VideoPayload>('/api/v1/videos', data)
}

export const getVideo = (videoId: string) => {
  return request.get<VideoPayload>(`/api/v1/videos/${videoId}`)
}
