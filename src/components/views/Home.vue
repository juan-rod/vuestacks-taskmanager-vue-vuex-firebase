<template>
  <v-app data-app>
    <v-layout justify-center>
      <v-app-bar app color="white">
        <v-toolbar-title>
          <v-btn color="primary" @click.stop="dialog = true">
            Add New Note
          </v-btn>
          <router-link to="/menu">
            <v-btn color="primary">
              Menu View
            </v-btn>
          </router-link>
        </v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-dialog v-model="dialog" max-width="500">
          <v-card color="#f9efaf">
            <v-form @submit.prevent="addTodo">
              <v-card-text>
                <textarea-autosize v-model="newTitle" :min-height="50" placeholder="add title"></textarea-autosize>
                <textarea-autosize v-model="newTodo" type="text" style="width: 100%" :min-height="100" placeholder="add note"></textarea-autosize>
              </v-card-text>
              <v-btn type="submit" color="green darken-1" text @click="dialog = false">
                Add
              </v-btn>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogUpdate" max-width="500">
          <v-card color="#f9efaf">
            <v-form @submit.prevent="updateTodoText">
              <v-card-text>
                <textarea-autosize v-model="todoEditTitle" :min-height="50" placeholder="add title"></textarea-autosize>
                <textarea-autosize v-model="todoEditText" type="text" style="width: 100%" :min-height="100" placeholder="add note"></textarea-autosize>
              </v-card-text>
              <v-btn type="submit" color="green darken-1" text @click="dialogUpdate = false">
                Update
              </v-btn>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-container>
          <v-flex md12 class="elevation-0">
           <v-layout wrap>
             <v-flex md3 v-for="todo in todos" :key="todo.id">
               <v-card color="#f9efaf" class="card-container">
                 <textarea-autosize v-model="todo.title" class="todo-text" readonly style="width: 40%"></textarea-autosize>
                 <div class="float-right">
                  <v-btn class="fa" @click="deleteTodo(todo.id)">&#xf00d;</v-btn>
                  <v-btn class="fa" @click.stop="editTodo(todo)">&#xf065;</v-btn>
                 </div>
                 <textarea-autosize v-model="todo.text" class="todo-text" style="width: 100%" readonly></textarea-autosize>
              </v-card>
             </v-flex>
           </v-layout>
          </v-flex>
        </v-container>
      </v-content>

    </v-layout>
  </v-app>
</template>

<script>
import { todosCollection } from '../../firebase'
import { mapState } from 'vuex'
export default {
  name: 'home',
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
