import Vue from 'vue'
import App from '@/App.vue'
import router from './route'
import Vuex from 'vuex'
import { Message } from 'element-ui'
import Toast from '@/components/common/Toast'

Vue.prototype.$toast = Toast
Vue.prototype.$msg = Message
Vue.config.devtools = true
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<app/>'
})
