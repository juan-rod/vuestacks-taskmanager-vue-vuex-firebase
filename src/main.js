import './firebase'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueTextareaAutosize from 'vue-textarea-autosize'
import store from './store'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
