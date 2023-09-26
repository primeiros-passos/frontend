import Vue from 'vue'
import VueGapi from 'vue-gapi'

Vue.use(VueGapi, {
  apiKey: process.env.G_API_KEY,
  clientId: process.env.G_CLIENT_ID,
  scope: 'https://www.googleapis.com/auth/userinfo.profile',
  plugin_name: 'Primeiros Passos',
})
