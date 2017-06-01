/**
 * Created by lethe on 17-5-2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  todos: [{
    time: '12月6日',
    title: '写todo',
    content: 'hahha'
  },
    {
      time: '12月7日',
      title: 'matlab作业',
      content: 'hahha'
    }]
}
export default new Vuex.Store({
  state,
  mutations,
  getters
})
