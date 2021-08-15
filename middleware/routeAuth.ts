import { Middleware } from '@nuxt/types'

const publicRoutes = ['index', 'login']

const routeAuth: Middleware = ({ $accessor, route, redirect }) => {
  const { isLoggedIn } = $accessor.auth

  if (!isLoggedIn && !publicRoutes.includes(route.name!)) {
    return redirect('/login')
  }
}

export default routeAuth
