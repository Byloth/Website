export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s @ Byloth's Website",
    meta: [],
    link: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Icons" },

      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  loading: { color: "#FFD600" },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/main.import.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/globals/mdc.client.ts",
    "@/plugins/globals/time.client.ts",

    "@/plugins/vue-scroll-animator.client.ts"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: { },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: { },

  // PWA module configuration (https://pwa.nuxtjs.org/setup)
  pwa: {
    manifest: {
      name: "Byloth's Website",
      short_name: "Byloth",

      start_url: "/",

      background_color: "#35363A",
      theme_color: "#004BA0",

      lang: "it"
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: { },

  server: {
    port: 8080,
    host: "0.0.0.0"
  }
};
