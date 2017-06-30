import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import store from './vuex/store'
import { fb, fbUI, db } from './js/firebaseConfig'

Vue.use(VueFire)
Vue.config.productionTip = false

store.commit('SET_FB', fb)
store.commit('SET_DB', db)
store.commit('SET_FB_UI', fbUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App },
  beforeCreate () {
    fb.auth().onAuthStateChanged((user) => {
      this.$store.commit('SET_USER', user || false)
    })
  }
})
