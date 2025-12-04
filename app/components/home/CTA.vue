<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Empezando",
    color: "neutral",
  },
  {
    label: "Mas informacion",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <UPageCTA
    title="Con la confianza y el respaldo de nuestra increíble comunidad"
    description="Hemos forjado una colaboración sólida y duradera. Su confianza es nuestra fuerza motriz y nos impulsa hacia el éxito compartido."
    orientation="horizontal"
    :links="links"
  >
    <img
      src="https://picsum.photos/640/728"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full rounded-lg"
    />

    <!-- <template #title>
      <h1>asdasd</h1>
    </template> -->
  </UPageCTA>
</template>
