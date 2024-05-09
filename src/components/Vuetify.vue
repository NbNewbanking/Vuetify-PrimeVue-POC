<template>
  <v-row
    align="start"
    no-gutters
  >
    <v-col>
      <h1 class="text-h1">Vuetify 3 examples</h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-btn class="tw-mr-4" color="primary">Primary</v-btn>
      <v-btn class="mr-4" color="secondary">Secondary</v-btn>
      <v-btn class="tw-mr-4" elevation="24" size="x-large">Elevation 24</v-btn>
      <v-btn
        append-icon="mdi-account-circle"
        prepend-icon="mdi-check-circle"
      >
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>

        Button

        <template v-slot:append>
          <v-icon color="warning"></v-icon>
        </template>
      </v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-chip
        class="ma-2"
        color="cyan"
        closable
        label
      >
        <v-icon icon="mdi-twitter" start></v-icon>
        New Tweets
      </v-chip>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <Example1 />
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <Example2 />
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <Example3 />
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-badge :content="51">
        <v-icon icon="$vuetify" size="x-large"></v-icon>
      </v-badge>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <Example4 />
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-skeleton-loader type="article"></v-skeleton-loader>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <Example5 />
    </v-col>
  </v-row>
</template>

<script>
import Example1 from './vuetifyExamples/Example1.vue';
import Example2 from './vuetifyExamples/Example2.vue';
import Example3 from './vuetifyExamples/Example3.vue';
import Example4 from './vuetifyExamples/Example4.vue';
import Example5 from './vuetifyExamples/Example5.vue';
export default {
  components: {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5
  },
  name: 'Vuetify'
}
</script>
