import firebase from 'firebase/app'
import { ActionTree, MutationTree } from 'vuex/types'

import { RootState } from '.'

interface State {
  isLoggedIn: boolean
  userName: string | null
  user?: any
}
export const state = (): State => ({
  isLoggedIn: false,
  userName: null,
})

export type AuthState = ReturnType<typeof state>

export const mutations: MutationTree<AuthState> = {
  setLoggedIn: (state) => (state.isLoggedIn = true),
  setLoggedOut: (state) => (state.isLoggedIn = false),
  setUserName: (state, name: string) => (state.userName = name),
}

export const actions: ActionTree<AuthState, RootState> = {
  logOut({ commit }) {
    commit('setLoggedOut')
    commit('setUserName', null)
    this.$router.push({ name: 'login' })
  },

  logIn({ commit }, user: firebase.User) {
    commit('setUserName', user.displayName || user.email)
    commit('setLoggedIn')
    this.$router.push({ name: 'profile' })
  },

  onAuthStateChanged({ dispatch, state }, user: { authUser: firebase.User }) {
    console.debug('onAuthStateChangedAction: ', user) // eslint-disable-line
    const { isLoggedIn } = state

    if (user.authUser) {
      dispatch('logIn', user.authUser)
    } else if (isLoggedIn) {
      dispatch('logOut')
    }
  },
}
