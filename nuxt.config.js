export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Your Fridge',
    title: 'Your Fridge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vuetify-confirm', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://typed-vuex.roe.dev/getting-started/getting-started-nuxt
    'nuxt-typed-vuex',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    // https://firebase.nuxtjs.org/
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBFl__wMJqK8AHImIeGZheYMURfVUs8BGM',
          authDomain: 'your-fridge-3201f.firebaseapp.com',
          projectId: 'your-fridge-3201f',
          storageBucket: 'your-fridge-3201f.appspot.com',
          messagingSenderId: '757396311286',
          appId: '1:757396311286:web:c2d2aa1f43a9916c20b0d7',
          measurementId: 'G-VVXK8CRJJS',
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'auth/onAuthStateChanged',
            },
            emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined,
          },
        },
      },
    ],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: 'routeAuth',
  },
}
