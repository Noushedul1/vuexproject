import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [
      {bookname: 'web design',author: 'akib',price: 200,id:1},
      {bookname: 'graphic design',author: 'islam',price: 300,id:2},
      {bookname: 'ui/ux design',author: 'noushed',price: 500,id:3},
      {bookname: 'fron end designer',author: 'akib',price: 400,id:4},
      {bookname: 'command line',author: 'akib',price: 800,id:5},
    ],
    players: ['shakib','tamim','moshfiq']
  },
  getters: {
    mybookPrice: (state)=>{
      const mybookPrice = state.books.map((book)=>{
        return {
          price: book.price/2
        }
      });
      return mybookPrice;
    },
    eidPrice(state){
      const eidPrice = state.books.map((book)=>{
        return {
          price: book.price/4,
          bookname: `***${book.bookname}***`
        }
      });
      return eidPrice;
    }
  },
  mutations: {
    MY_NAME(state,data){
      // console.log(data);
      state.players.push(data);
    },
    REMOVE_BOOK(state,data){
      // console.log(data);
      state.players.splice(data,1);
    }
  },
  actions: {
    myname: ({commit},data)=>{
      commit('MY_NAME',data);
    },
    removeBook: ({commit},data)=>{
      commit('REMOVE_BOOK',data);
    }
  },
  modules: {
  }
})
