import Vue from 'vue'
import App from './App.vue'
// import AOS from 'aos'
import routes from './routes'
import VueRouter from 'vue-router'
// import 'aos/dist/aos.css'

Vue.use(VueRouter)


Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history',
  routes:routes
})



new Vue({
  router,
  // created(){
  //   AOS.init();
  // },
  render: h => h(App),
}).$mount('#app')
