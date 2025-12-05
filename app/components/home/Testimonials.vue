<script setup lang="ts">
const { data } = await useFetch("/api/home/reviews");

const reviews = ref(data.value);
</script>

<template>
  <div>
    <UPageSection
      title="Características Destacadas"
      description="Nuestros testimonios de clientes satisfechos"
      headline="Testimonios"
    />

    <UPageColumns>
      <UPageCard
        variant="solid"
        to="https://cloudflare.com"
        icon="i-logos-cloudflare-icon"
        title="LaunchPad de Workers de Cloudflare"
        description="NuxtHub forma parte de la cohorte Launchpad de Workers de Cloudflare para garantizar que obtengas una experiencia de primera clase sobre la red de Cloudflare."
        :ui="{ leadingIcon: 'size-10' }"
      />

      <UPageCard
        v-for="(review, index) in reviews"
        :key="index"
        variant="subtle"
        :description="review.description"
        :ui="{
          description:
            'before:content-[open-quote] after:content-[close-quote]',
        }"
      >
        <template #footer>
          <UUser
            :name="review.name"
            :description="review.subtitle"
            :avatar="{
              src: review.profileImage,
              alt: review.name,
            }"
            size="xl"
          />
        </template>
      </UPageCard>
    </UPageColumns>
  </div>
</template>
