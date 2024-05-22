<template>
  <div class="p-6">
      <Chips 
        v-model="value" 
        :pt="{ 
          token: '!bg-blue-200',
        }"
        :ptOptions="{ 
          mergeSections: true, 
          mergeProps: true
        }"
        placeholder="+ Add Tag" 
        removeTokenIcon="pi pi-times"
      />
  </div>
</template>

<script setup>
import Chips from "primevue/chips";
import { ref } from "vue";

const value = ref();
</script>
