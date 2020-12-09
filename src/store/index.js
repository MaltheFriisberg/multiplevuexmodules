import Vue from 'vue'
import Vuex from 'vuex'

import foostore from './modules/foostore'
import barstore from './modules/barstore'


Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    foostore:foostore,
    barstore:barstore
  }
})
