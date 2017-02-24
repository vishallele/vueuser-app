<template>
  <div class="hello">
    <h1>{{ msg }} {{name}}</h1>
    <input type="text" v-model="name" />
    <h2>Todo List</h2>
    <ol>
      <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
    </ol>
	
	<div id="example-1">
	  <button v-on:click="counter++">Add 1</button>
	  <p>The button above has been clicked {{ counter }} times.</p>
	</div>

    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  name: 'hello',
  components: {
    'todo-item' : Todo
  },
  data () {
    return {
      counter: 0, 
      msg: 'Welcome to Your Vue User App',
      name : 'Vishal',
      groceryList : [
	{ text: 'Understand Javascript' },
        { text: 'Understand Vue js' },
        { text: 'Build Awesome Application in vue js' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
