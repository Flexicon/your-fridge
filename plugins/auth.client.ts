import { Plugin } from '@nuxt/types'

const auth: Plugin = (_context) => {
  // context.$fire.auth.onAuthStateChanged((user) => {
  //   const { isLoggedIn } = context.$accessor.auth

  //   if (user) {
  //     console.debug('User: ', user); // eslint-disable-line
  //     context.store.dispatch('auth/logIn', user);

  //   } else if (isLoggedIn) {
  //     console.debug('User logged out') // eslint-disable-line
  //     context.store.dispatch('auth/logOut');

  //   } else {
  //     console.debug('Not authenticated'); // eslint-disable-line
  //   }
  // });
}

export default auth
