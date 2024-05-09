<template>
  <div class="pa-6">
    <v-row
      align="start"
      no-gutters
    >
      <v-col>
        <h1>PrimeVue examples</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Example1 />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Example1 from './PrimeVueExamples/Example1.vue';
export default {
  components: {
    Example1
  },
  name: 'PrimeVue'
}
</script>
