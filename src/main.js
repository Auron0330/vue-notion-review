import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// VueRouterを使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/main',
      component: () => import('./components/MainPage.vue')
    },
    {
      path: '/*',
      redirect: '/main',
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
