<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
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

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
      ],
      title: 'Your Fridge',
      titleIcon: 'mdi-fridge-outline',
    }
  },
}
</script>
