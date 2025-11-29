<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <UError
    :error="error"
    :clear="{
      size: 'xl',
      // icon: 'i-lucide-arrow-left',
      icon: 'si:arrow-left-circle-line text-2xl',
      class:
        'rounded-full px-6 py-3 bg-green-600 hover:bg-green-700 hover:scale-105 text-white transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer',
    }"
    :ui="{
      statusCode: 'text-9xl font-bold',
    }"
  />
</template>
