<template>
  <div class="hello">
    <div v-for="todo in todos" :key="todo.id">
      {{todo.title}}
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed : {
    ...mapState('foostore',['todos'] ),
    ...mapGetters({allTodos:'foostore/getTodos'})
  },
  created() {
    this.$store.dispatch('foostore/useAxios');
    this.$store.dispatch('barstore/useAxios');

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
