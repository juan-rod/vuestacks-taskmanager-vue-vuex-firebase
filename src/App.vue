<template>
  <router-view />
</template>

<script>
import { todosCollection } from './firebase';
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      newTitle: '',
      newTodo: '',
      currentlyEditing: null,
      todoEditTitle: '',
      todoEditText: '',
      dialog: false,
      dialogUpdate: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$store.dispatch('setTodo')
    },
    async addTodo () {
      await todosCollection.add({
        title: this.newTitle,
        text: this.newTodo,
        createdAt: new Date()
      })
        this.getData()
        this.newTitle = '',
        this.newTodo = ''
    },
    async deleteTodo (id) {
      await todosCollection.doc(id).delete()
        this.getData()
    },
    editTodo (todo) {
      this.dialogUpdate = true
      this.currentlyEditing = todo.id
      this.todoEditText = todo.text
      this.todoEditTitle = todo.title
    },
    async updateTodoText () {
      await todosCollection.doc(this.currentlyEditing).update({
        text: this.todoEditText,
        title: this.todoEditTitle
      })
      this.getData()
      this.currentlyEditing = null;
      this.todoEditText = '';
      this.todoEditTitle = '';
    }
  },
  computed: mapState([
    'todos'
  ])
}
</script>

<style media="screen">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.card-container {
  margin: 10px;
  padding: 10px;
  min-height: 200px;
}
</style>
