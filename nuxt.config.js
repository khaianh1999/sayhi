export default {
// Global page headers: https://go.nuxtjs.dev/config-head
head: {
    title: 'sayhi',
    htmlAttrs: {
        lang: 'en'
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css' },
    ],
    script: [
        { src: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js" },
    ],

},

// Global CSS: https://go.nuxtjs.dev/config-css
css: ["@/assets/css/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],

// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
    '~/plugins/fontawesome.js',
    { src: "~/plugins/carousel.js", ssr: false },
],

// Auto import components: https://go.nuxtjs.dev/config-components
components: true,

// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
buildModules: [
],

// Modules: https://go.nuxtjs.dev/config-modules
modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/moment",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "cookie-universal-nuxt",
],

// Build Configuration: https://go.nuxtjs.dev/config-build
build: {
    transpile: ['@fortawesome/vue-fontawesome'],
    postcss: {
    postcssOptions: {
        plugins: {
            "postcss-import": {},
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    },
}
}
