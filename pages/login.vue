<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <h1 class="mt-4 mb-5">Log in</h1>

      <v-alert v-if="apiError" class="mt-3" type="error">{{ apiError }}</v-alert>

      <v-form v-model="valid" @submit.prevent="logIn">
        <v-text-field
          v-model="email"
          :disabled="busy"
          :rules="emailRules"
          label="E-mail"
          autocomplete="username"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :disabled="busy"
          type="password"
          :rules="passwordRules"
          label="Password"
          autocomplete="current-password"
        ></v-text-field>

        <v-btn :loading="busy" type="submit">Log in</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      valid: false,
      apiError: null,
      busy: false,

      email: 'user1@example.com',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

      password: 'testing1',
      passwordRules: [(v: string) => !!v || 'Name is required'],
    }
  },

  head: {
    title: 'Log in',
  },

  methods: {
    async logIn() {
      this.apiError = null
      this.busy = true

      try {
        await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
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


