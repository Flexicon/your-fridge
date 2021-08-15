<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <nav-list-item icon="mdi-home" title="Home" to="/"></nav-list-item>
        <nav-list-item v-if="isLoggedIn" icon="mdi-account" title="Profile" to="/profile"></nav-list-item>
        <nav-list-item v-if="!isLoggedIn" icon="mdi-login" title="Log in" to="/login"></nav-list-item>
        <nav-list-item v-if="isLoggedIn" icon="mdi-logout" title="Log out" @click="logOut"></nav-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue" dark clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-icon>{{ titleIcon }}</v-icon>
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      drawer: false,
      title: 'Your Fridge',
      titleIcon: 'mdi-fridge-outline',
    }
  },

  computed: {
    isLoggedIn() {
      return this.$accessor.auth.isLoggedIn
    },
  },

  methods: {
    async logOut() {
      await this.$fire.auth.signOut()
    },
  },
})
</script>
