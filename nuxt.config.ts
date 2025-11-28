// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],

  app: {
    head: {
      title: "Mi tienda de servicios",
      meta: [
        {
          name: "description",
          content: "Bienvenido a mi tienda de servicios",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        },
      ],
    },
  },

  // SPA - Single Page Application
  // ssr: false,
  // nitro: {
  //   preset: "static",
  //   static: true,
  // },

  // Prerender - Todo el sitio
  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact", "/pricing", "products"],
      ignore: ["/dashboard", "/dashboard/**"],
      // Habilitar el crawling para descubrir enlaces automaticamente
      crawlLinks: true,
    },
  },
});
