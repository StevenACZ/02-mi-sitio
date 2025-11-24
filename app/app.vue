<script lang="ts" setup>
const count = ref(10);
await sleep(2000);

count.value = 50;
</script>

<template>
  <div>
    <h1>Hello = {{ count }}</h1>
    <button @click="count++">+</button>
  </div>
</template>

<style></style>
