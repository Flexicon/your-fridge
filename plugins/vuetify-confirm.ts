import Vue from 'vue'
import VuetifyConfirm from 'vuetify-confirm'
import { Plugin } from '@nuxt/types'

const vuetifyConfirmPlugin: Plugin = ({ app }) => {
  Vue.use(VuetifyConfirm, {
    vuetify: app.vuetify,
    persistent: true,
  })
}

export default vuetifyConfirmPlugin
