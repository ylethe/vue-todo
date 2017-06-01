/**
 * Created by lethe on 17-5-2.
 */
import * as types from './types'

export  default {
  [types.ADD_TODO](state,todo){
    state.todos.unshift(todo)
  },
  [types.COMPLETE_TODO](state,index){
    state.todos.splice(index,1)
  },
  [types.DELETE_TODO](state){
    state.todos.splice(0, state.todos.length)
  }
}

