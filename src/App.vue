<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Vuetify />
        <PrimeVue />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vuetify from './components/Vuetify.vue'
import PrimeVue from './components/PrimeVue.vue';

export default {
  name: 'App',
  components: {
    Vuetify,
    PrimeVue
  },

  data: () => ({
     //
  })
}
</script>
