<template>
  <div>
    <div v-for="mybookPrices in mybookPrice" :key="mybookPrices.id">
      price : {{mybookPrices.price}}
    </div>
    <div v-for="eidPrices in eidPrice" :key="eidPrices.id">
        Eid Price : {{eidPrices.price}}
        book name : {{eidPrices.bookname}}
    </div>
  </div>
</template>

<script>
import {books} from '../store/index'
export default {
data(){
  return{

  }
},
computed: {
  mybookPrice(){
    return this.$store.getters.mybookPrice;
  },
  eidPrice(){
      return this.$store.getters.eidPrice;
  }
}
}
</script>

<style>

</style>