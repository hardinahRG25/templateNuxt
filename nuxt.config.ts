// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                {
                    name: 'robots',
                    content: 'noindex, nofollow'
                }
            ],
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon_io/favicon.ico"
                }
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    build: {
        transpile: ['vue-countup-v3']
    }
    ,

    css: [
        "@/assets/index.css",
        "@/assets/fonts/icon/font/flaticon.css"
    ],

    modules: ["@nuxt/image-edge"],
    compatibilityDate: '2024-07-17',
})