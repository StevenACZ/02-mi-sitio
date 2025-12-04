<script setup lang="ts">
const cards = ref([
  {
    title: "Tema",
    description:
      "Aprende a personalizar los componentes de Nuxt UI usando Tailwind CSS v4.",
    icon: "i-lucide-swatch-book",
    to: "/docs/getting-started/theme/design-system",
    class: "lg:col-span-2",
    image: {
      path: "https://ui2.nuxt.com/illustrations/color-palette",
      width: 363,
      height: 152,
    },
    orientation: "horizontal" as const,
  },
  {
    title: "Fuentes",
    description:
      "Nuxt UI se integra con Nuxt Fonts para ofrecer optimización de fuentes plug-and-play.",
    icon: "i-lucide-a-large-small",
    to: "/docs/getting-started/integrations/fonts",
    variant: "soft" as const,
  },
  {
    title: "Modo de color",
    description:
      "Nuxt UI se integra con Nuxt Color Mode para cambiar entre claro y oscuro.",
    icon: "i-lucide-sun-moon",
    to: "/docs/getting-started/integrations/color-mode",
    variant: "soft" as const,
  },
  {
    title: "Iconos",
    description:
      "Nuxt UI se integra con Nuxt Icon para acceder a más de 200.000 iconos de Iconify.",
    icon: "i-lucide-smile",
    to: "/docs/getting-started/integrations/icons",
    image: {
      path: "https://ui2.nuxt.com/illustrations/icon-library",
      width: 362,
      height: 184,
    },
    class: "lg:col-span-2",
    orientation: "horizontal" as const,
    reverse: true,
  },
]);
</script>

<template>
  <UPageGrid>
    <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card">
      <UColorModeImage
        v-if="card.image"
        :light="`${card.image.path}-light.svg`"
        :dark="`${card.image.path}-dark.svg`"
        :width="card.image.width"
        :height="card.image.height"
        :alt="card.title"
        loading="lazy"
        class="w-full"
      />
    </UPageCard>
  </UPageGrid>
</template>
