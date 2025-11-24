// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],

  app: {
    head: {
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
});
