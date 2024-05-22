<template>
  <div class="p-6">
      <Chips v-model="value" placeholder="+ Add Tag" />
  </div>
</template>

<script setup>
import Chips from "primevue/chips";
import { ref } from "vue";

const value = ref();
</script>
