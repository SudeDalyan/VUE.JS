import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import HelloWorld from './components/HelloWorld';
import Footer from './components/footer';


Vue.config.productionTip = false
Vue.component("HelloWorld", HelloWorld)
Vue.component("Footer", Footer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
