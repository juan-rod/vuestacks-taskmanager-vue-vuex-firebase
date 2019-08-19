import Vue from 'vue'
import Vuex from 'vuex'
import { todosCollection } from './firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    errors: ''
  },
  mutations: {
    setTodo: (state, todos) => {
      state.todos = todos
    }
  },
  actions: {
    setTodo: async context => {
      let snapshot = await todosCollection.orderBy('createdAt').get();
      const todos = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        todos.push(appData)
      })
      context.commit('setTodo', todos)
    }
  }
})
