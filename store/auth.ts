import firebase from 'firebase/app'
import { ActionTree, MutationTree } from 'vuex/types'

import { RootState } from '.'

import { User } from '~/models'

interface State {
  isLoggedIn: boolean
  user: User | null
}
export const state = (): State => ({
  isLoggedIn: false,
  user: null,
})

export type AuthState = ReturnType<typeof state>

export const mutations: MutationTree<AuthState> = {
  setLoggedIn: (state) => (state.isLoggedIn = true),

  setLoggedOut: (state) => (state.isLoggedIn = false),

  setUser: (state, user: firebase.UserInfo) => {
    const { displayName, email, uid, photoURL } = user
    state.user = { displayName, email, uid, photoURL }
  },

  clearUser: (state) => {
    state.user = null
  },
}

export const actions: ActionTree<AuthState, RootState> = {
  logOut({ commit }) {
    commit('setLoggedOut')
    commit('clearUser')
    this.$router.push({ name: 'login' })
  },

  logIn({ commit }, user: firebase.UserInfo) {
    commit('setUser', user)
    commit('setLoggedIn')
    this.$router.push({ name: 'profile' })
  },

  onAuthStateChanged({ dispatch, state }, payload: { authUser: firebase.User }) {
    console.debug('onAuthStateChangedAction: ', payload) // eslint-disable-line
    const { isLoggedIn } = state

    if (payload.authUser) {
      dispatch('logIn', payload.authUser)
    } else if (isLoggedIn) {
      dispatch('logOut')
    }
  },
}
