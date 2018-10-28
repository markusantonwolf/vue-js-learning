import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

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

// Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})

Vue.filter('excerpt', function(value){
  if (value.length > 60 ) {
    return value.slice(0, 60) + '...';
  } else {
    return value;
  }

})

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
