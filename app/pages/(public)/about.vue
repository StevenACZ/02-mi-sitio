<script lang="ts" setup>
// useSeoMeta es específico para meta tags de SEO y redes sociales
useSeoMeta({
  // Título de la página (aparece en la pestaña del navegador y en resultados de búsqueda)
  title: "Acerca de Nosotros | Mi Sitio",

  // Descripción corta (aparece en Google y redes sociales)
  description:
    "Conoce más sobre nuestra empresa, nuestra misión y el equipo detrás de Mi Sitio. Descubre cómo ayudamos a nuestros clientes.",

  // Open Graph (para Facebook, LinkedIn, WhatsApp, etc.)
  ogTitle: "Acerca de Nosotros - Conoce Nuestra Historia",
  ogDescription:
    "Somos un equipo apasionado dedicado a crear soluciones increíbles para nuestros usuarios.",
  ogImage: "/images/og-image.png", // Tamaño recomendado: 1200x630px
  ogImageAlt: "Equipo de Mi Sitio trabajando juntos",
  ogUrl: "https://mi-sitio.com/about",
  ogType: "website",
  ogLocale: "es_ES",

  // Twitter Card (para X/Twitter)
  twitterCard: "summary_large_image", // Opciones: summary, summary_large_image, app, player
  twitterTitle: "Acerca de Nosotros - Mi Sitio",
  twitterDescription: "Conoce al equipo y la misión detrás de Mi Sitio",
  twitterImage: "/images/og-image.png", // Tamaño recomendado: 1200x675px
  twitterImageAlt: "Vista del equipo de Mi Sitio",
  twitterSite: "@MiSitioOficial", // Tu cuenta de Twitter
  twitterCreator: "@StevenDev", // Autor del contenido

  // Robots directive (sí es válido en useSeoMeta)
  robots: "index, follow", // Permite a Google indexar esta página
});

// useHead es para meta tags personalizados y configuración del <head>
useHead({
  meta: [
    // Keywords - Nota: Google ya no usa keywords para ranking, pero otros buscadores sí
    {
      name: "keywords",
      content: "equipo, empresa, misión, valores, historia, nosotros",
    },

    // Author
    { name: "author", content: "Mi Sitio Team" },

    // Charset y viewport (usualmente ya están en app.vue o nuxt.config.ts)
    // { charset: 'utf-8' },
    // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    // El idioma se establece en el atributo lang del elemento <html>
    lang: "es",
  },
});
</script>

<template>
  <div>
    <h1>About</h1>
  </div>
</template>
