<template>
  <v-list-item :to="to" @click="onClick">
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title v-text="title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      default: null,
    },
  },

  methods: {
    onClick() {
      this.$emit('click')
    },
  },
})
</script>
