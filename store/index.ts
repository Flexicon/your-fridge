import { getAccessorType } from 'typed-vuex'

import * as auth from './auth'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const accessorType = getAccessorType({
  state,
  modules: {
    auth,
  },
})
