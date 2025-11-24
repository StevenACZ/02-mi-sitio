<script setup lang="ts">
throw createError({
  statusCode: 500,
  statusMessage: "No se puede dividir entre 0",
  data: {
    myCustomField: true,
    myOtherField: "Hola Mundo",
  },
});
</script>

<template>
  <div>Page: products</div>
</template>

<style scoped></style>
