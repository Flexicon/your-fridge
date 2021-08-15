<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <h1 class="mt-4 mb-5">Log in</h1>

      <v-form ref="form" v-model="valid" @submit.prevent="logInWithEmail">
        <v-text-field
          v-model="email"
          :disabled="busy"
          :rules="emailRules"
          label="E-mail"
          autocomplete="username"
        ></v-text-field>

        <v-text-field
          v-model="password"
          class="mb-5"
          :disabled="busy"
          type="password"
          :rules="passwordRules"
          label="Password"
          autocomplete="current-password"
        ></v-text-field>

        <v-btn class="mr-1" :loading="busy" type="submit" color="primary">Log in</v-btn>
        <v-btn :loading="busy" color="white" @click="logInWithGoogle">
          <img class="google-logo" src="~/assets/images/google-logo.svg" alt="Sign in with Google logo" />
          Sign in with Google
        </v-btn>
      </v-form>

      <v-alert v-if="apiError" class="mt-6" type="error">{{ apiError }}</v-alert>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase/app'

interface Refs {
  form?: Vue & { validate: () => boolean }
}

export default Vue.extend({
  data() {
    return {
      valid: false,
      apiError: null,
      busy: false,

      email: '',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      password: '',
      passwordRules: [(v: string) => !!v || 'Name is required'],
    }
  },

  head: {
    title: 'Log in',
  },

  computed: {
    form() {
      return (this.$refs as Refs).form
    },
  },

  methods: {
    logInWithEmail() {
      this.form?.validate()

      if (this.valid) {
        this.handleLogIn(() => this.$fire.auth.signInWithEmailAndPassword(this.email, this.password))
      }
    },

    logInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('email')

      this.handleLogIn(() => this.$fire.auth.signInWithPopup(provider))
    },

    async handleLogIn(loginFn: () => Promise<any>) {
      this.apiError = null
      this.busy = true

      try {
        await loginFn()
      } catch (err) {
        console.error('Failed to log in:', err) // eslint-disable-line

        if (err.message) {
          this.apiError = err.message
        }
      } finally {
        this.busy = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.google-logo {
  width: 48px;
  margin-left: -14px;
  margin-right: -5px;
}
</style>
