# vuestacks-taskmanager-vue-vuex-firebase

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Check out https://jsfanatik.github.io to learn more about the VueStacks initiative!

### Technical overview

The VueStacks task manager demo utilizes general Vue.js + Firebase CRUD functions to create, update, and delete task cards. The user can create a new task by opening a dialog box styled as a post it note. After clicking “Add”, the note is rendered on the screen as a post it note. The user can update the note by reopening the card in a new dailog box and updating the contents. After clicking “update”, the updated note will render on the screen in place of the old note.

“Add New Note” opens the first dialog box used to input a new todo task.

```addTodo ()``` adds the inputted todo to the database collection in Firebase.

```deleteTodo ()``` removes the targeted todo in the Firebase collection.

```editTodo ()``` opens the second dialog box used to edit the todo note while simultaneously pushing the content of the targeted note into the second dialog box.

```updateTodoText ()``` triggers the update of the note.

```getData ()``` is a callback function that dispatches an action in store.js (Vuex store). The action retrieves the inputted data from the database then commits a mutation. State is then updated with the retrieved data. A computed property (using the mapState helper) returns the changed state to the component.

### Setting up Firebase

1) Set up new project in Firebase with Database and Storage enabled
2) Implement the following Firebase SDK scripts in firebase.js:
```
const app = initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
});

export const db = app.firestore();
export const todosCollection = db.collection('todos');
```
Enjoy the demo! Submit an issue if you see anything that could be improved!
