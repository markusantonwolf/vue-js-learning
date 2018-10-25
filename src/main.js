import Vue from 'vue'
import App from './App.vue'
import Header from './Components/Header.vue'

import Ninjas from './Ninjas.vue'

Vue.component('Header', Header);

Vue.component('Ninjas', Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
