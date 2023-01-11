export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode', '@anu-vue/nuxt', '@unocss/nuxt'],
    css: ['@anu-vue/preset-theme-default/dist/style.css', '~/assets/css/main.css'],
    colorMode: {
        preference: 'light',
        classPrefix: '',
        classSuffix: '',
    },
})
