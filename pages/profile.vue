<template>
  <v-row justify="center" align="center">
    <v-col>
      <h1 class="mt-5">Your Profile</h1>

      <v-card class="mt-5" max-width="600">
        <div class="user-name-wrapper">
          <v-avatar v-if="userAvatar">
            <img :src="userAvatar" :alt="userDisplayName" />
          </v-avatar>

          <div>
            <v-card-title>
              <span>{{ userDisplayName }}</span>
            </v-card-title>
            <v-card-subtitle>{{ userEmail }}</v-card-subtitle>
          </div>
        </div>
      </v-card>
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
    userAvatar() {
      return this.$accessor.auth.user?.photoURL
    },

    userDisplayName() {
      const { user } = this.$accessor.auth

      return user?.displayName || user?.email
    },

    userEmail() {
      return this.$accessor.auth.user?.email
    },
  },
})
</script>

<style lang="scss" scoped>
.user-name-wrapper {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}
</style>
