import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})

import header from '@/components/Header.vue'
Vue.component("header-app", header);

import chart from '@/components/chart.vue'
Vue.component("chart-app", chart);

import navegacion from '@/components/Navegacion.vue'
Vue.component("navegacion-app", navegacion);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
