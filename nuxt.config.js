require('dotenv').config();
const pkg = require('./package');
const fs = require('fs');

let activeConfig = {};

// some code with fs
try {
  const rawData = fs.readFileSync(`./plugins/app-configs/${process.env.VUE_APP_NAME.toLowerCase()}.json`);
  activeConfig = JSON.parse(rawData);
  fs.writeFileSync('./plugins/app-configs/active-config.json', JSON.stringify(activeConfig), 'utf8');
} catch (e) {
  throw new Error('Cannot load config file. Pls check your json file or .env value!');
}


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: activeConfig.app.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: activeConfig.images.favicon16 },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: activeConfig.images.favicon32},
    ]
  },


  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/myVar', ssr: true}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
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

    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': activeConfig.colors.primary,
        },
      }
    },

    extend(config, ctx) {
      let {isDev, isClient, isServer} = ctx;
    }
  },

};
