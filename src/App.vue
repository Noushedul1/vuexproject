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
    <h1>Total Books : {{$store.getters.totalPlayers}}</h1>
    <input type="text" v-model="firstname">
    <button @click="myname(firstname)">click</button>
    <ul>
      <li v-for="(player,index) in myplayer" :key="index">
        {{player}}
        <button @click="removeBook(index)">Delete</button>
      </li>
    </ul>
  </div>
  <div>
  </div>
  <div v-for="(f,i) in friend" :key="i">
    {{f}}
  </div>
  <Bookshop />
</div>
</template>

<script>
import Bookshop from './components/Bookshop.vue';
import {books,players} from './store/index';
import {mapState,mapActions} from 'vuex';
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
  // myname(){
  //   this.$store.dispatch('myname',this.firstname);
  // },
  ...mapActions({
    removeBook: 'removeBook',
    myname: 'myname'
  })
  // removeBook(index){
  //   this.$store.dispatch('removeBook',index);
  // }
},
computed: {
      mybookPrice(){
        return this.$store.getters.mybookPrice;
      },
      eidPrice(){
        return this.$store.getters.eidPrice;
      },
      ...mapState({
        myplayer: "players",
        friend: "friends"
      })
      // myplayer(){
      //   return this.$store.state.players;
      // }
    }
}
</script>

<style>

</style>