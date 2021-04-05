/**
 * 验证是否已登录的中间件
 */

export default function ({ redirect, store }) {
    // If the user is not authenticated
    if (store.state.user) {
        return redirect('/')
    }
}