import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import JsonCSV from "vue-json-csv";

Vue.config.productionTip = false

Vue.component("downloadCsv", JsonCSV);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
