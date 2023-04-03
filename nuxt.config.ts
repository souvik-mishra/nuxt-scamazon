// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
    app: {
      head: {
        title: 'Scamazon',
        meta: [
          { name: 'description', content: 'All about Scamazon'}
        ],
        link: [
          {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
      }
    }
})
