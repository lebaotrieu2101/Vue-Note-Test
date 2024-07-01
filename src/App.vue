<template>
  <CreateNote v-on:SeDataToCnote="CreateNote"/>
  <ListNote v-bind:notesd="notes"/>
</template>

<script>
import CreateNote from './components/create-notes.vue';
import ListNote from './components/ListNotes.vue';

export default {
  name: 'App',
  components:{
    CreateNote,
    ListNote,
  },
  data(){
    return{
       notes:[
        {
           title:"X",
           description:"Test",
        },{
           title:"The Fall",
           description:"Hà Nội",
        },{
           title:"The back",
           description:"Don't'",
        }],
     }
  },
  methods:{
    CreateNote(note){
      this.notes.push(note);
      alert("Note added");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>