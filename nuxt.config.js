const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/cretindujour/'
  }
} : {}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/fonts.css',
        defer: true
      }
    ]
  },

  router: {
    ...routerBase,
    linkActiveClass: '',
    linkExactActiveClass: 'active-link'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/reset.css', '~/assets/style/base.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vueBurgerMenu', ssr: false },
    { src: '~/plugins/vueScrollReveal', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/
    ['@nuxtjs/pwa'],
    'nuxt-device-detect',
    [
      'nuxt-sass-resources-loader',
      ['./assets/style/variable.scss', './assets/style/mixins.scss']
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-129511744-1'
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
      }
    }
  }
}
