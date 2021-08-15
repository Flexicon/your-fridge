<template>
  <v-row justify="center" align="center">
    <v-col>
      <h1 class="mt-4">Hi, {{ userDisplayName }}</h1>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Profile',
  },

  computed: {
    userDisplayName() {
      return this.$accessor.auth.userName
    },
  },
})
</script>


