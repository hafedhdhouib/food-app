<template>
    <main class="container">
    <section class="image" :style="`background:url(/${currentitems.img}) no-repeat center center`"></section> 
    <section class="details">
    <h1>{{currentitems.item}}</h1>
    <h3>price: ${{currentitems.price.toFixed(2)}}</h3>
    <div class="quantity">
    <input type="number" min="1" v-model="count"/>
    <button @click="addToCart" class="primary">Add to Cart - ${{combinedPrice}}</button>
    </div>

    <fieldset v-if="currentitems.options">
    <legend>
    <h3>options</h3>
    </legend>
    <div v-for="option in currentitems.options" :key="option">
    <input type="radio" name="radio" :id="option" :value="option" v-model="itemOption"/>
    <label :for="option">{{option}}</label>

    </div>
    </fieldset>
    <fieldset v-if="currentitems.addOns">
    <legend>
    <h3>Add ons</h3>
    </legend>
    <div v-for="addon in currentitems.addOns" :key="addon">
    <input 
    type="checkbox" 
    name="addon" 
    :id="addon" 
    :value="addon" 
    v-model="itemAddons"/>
    <label :for="addon">{{addon}}</label>
    </div>
    
    </fieldset>
    <AppToast v-if="cardSubmitted" >Order submitted <br>
    check out more <nuxt-link to="/restaurant">Restaurant</nuxt-link>
    </AppToast>
    </section>  
    <section class="options">
    <h3>Description</h3>
    <p>{{currentitems.description}}</p>
    </section> 
    </main>
</template>

<script>
import {mapState}from 'vuex'
export default {
    data () {
        return {
            id:this.$route.params.id,
            itemOption:"",
            count:1,
            itemAddons:[],
            cardSubmitted:false


        }
    },
    computed:{
        ...mapState(['fooddata']),
        currentitems(){
            let item;
            for (let i=0;i<this.fooddata.length;i++){
                for (let j=0;j<this.fooddata[i].menu.length;j++){
                    if (this.fooddata[i].menu[j].id==this.id){
                        item=this.fooddata[i].menu[j];
                        break
                    }
                }
            }
            return item;
        },
    combinedPrice(){
        let total =this.count * this.currentitems.price
        return total.toFixed(2)
    }
    },
    methods: {
        addToCart() {
            let foodOutput={
                item:this.currentitems.item,
                count:this.count,
                option:this.itemOption,
                addOns:this.itemAddons,
                combinedPrice:this.combinedPrice
            }
            this.cardSubmitted=true
            this.$store.commit('addToCart',foodOutput)
            }
    },
}
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}
</style>