import Vue from 'vue'
import Skelet from './Skelet.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(Skelet)
}).$mount('#app')
