// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Montserrat: true,
                    "Open Sans": true,
                },
            },
        ],
    ],
    devtools: { enabled: true },
});