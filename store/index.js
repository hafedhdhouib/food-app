import{v4 as uuidv4}from 'uuid'

export const state = () => ({
  fooddata: [],
  cart:[]
})
export const actions ={
  async getFoodData({
    state,commit}){
       try {
         await fetch
         ("https://gist.githubusercontent.com/hafedhdhouib/384ed7ed4b9d2862da76ccdde358a9f6/raw/d0d85365aac90c247bf9a4d450972b9e357dbf2b/pokemons.json")
         .then(Response=>Response.json()).then(data=>{
           console.log(data)
            commit('updataData',data)})
       }  catch (error) {
         console.log(error)
       }
    }
}
export const mutations={
  updataData(state,payload){
     state.fooddata=payload
  },
  addToCart(state,pay){
    pay.id=uuidv4()
    state.cart.push(pay)
  }
}
export const getters={
  cart(state){
    return state.cart
  },
  totalproce(state){
    if (!state.cart.length)return 0
    return state.cart.reduce((ac,next)=>ac + +next.combinedPrice,0)
  },cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.count, 0);
  },

}