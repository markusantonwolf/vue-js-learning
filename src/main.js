import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

//custom directives
Vue.directive('randomcolor', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2,8);
  }
})
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value === 'dark') {
      el.style.maxWidth = '500px';
    }
    if (binding.arg === 'modern') {
      el.classList.add("modern");
    }
  }
})

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
