// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  alias: {
    assets: "/<rootDir>/assets",
  },
});