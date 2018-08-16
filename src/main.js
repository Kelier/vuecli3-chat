import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {Layout, Icon, Input, Avatar, Spin, Tooltip, Button} from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('Avatar', Avatar)
Vue.component('Spin', Spin)
Vue.component('Tooltip', Tooltip)
Vue.component('Button', Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
