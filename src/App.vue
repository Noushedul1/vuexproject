<template>
<div>
  <div v-for="mybookPrices in mybookPrice" :key="mybookPrices.id">
    my price is : {{mybookPrices.price}}
  </div>
  <div v-for="eidPrices in eidPrice" :key="eidPrices.id">
    Eid Price : {{eidPrices.price}}
    book name : {{eidPrices.bookname}}
  </div>
  <div>
    <input type="text" v-model="firstname">
    <button @click="myname">click</button>
    <ul>
      <li v-for="(player,index) in myplayer" :key="index">
        {{player}}
        <button @click="removeBook(index)">Delete</button>
      </li>
    </ul>
  </div>
  <div>
  </div>
  <Bookshop />
</div>
</template>

<script>
import Bookshop from './components/Bookshop.vue';
import {books,players} from './store/index'
export default {
name: 'Vuexsecond',
components: {
  Bookshop
},
data(){
  return{
    firstname: ''
  }
},
methods: {
  myname(){
    this.$store.dispatch('myname',this.firstname);
  },
  removeBook(index){
    this.$store.dispatch('removeBook',index);
  }
},
computed: {
      mybookPrice(){
        return this.$store.getters.mybookPrice;
      },
      eidPrice(){
        return this.$store.getters.eidPrice;
      },
      myplayer(){
        return this.$store.state.players;
      }
    }
}
</script>

<style>

</style>