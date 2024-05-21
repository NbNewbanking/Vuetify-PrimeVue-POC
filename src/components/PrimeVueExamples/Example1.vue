<template>
  <div class="card p-fluid">
      <Chips v-model="value" placeholder="+ Add Tag" removeTokenIcon="pi pi-times" />
  </div>
</template>

<script setup>
import Chips from "primevue/chips";
import { ref } from "vue";

const value = ref();
</script>
