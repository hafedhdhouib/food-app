<template>
    <section class="restaurantinfo">
    
<div v-for="store in dataSource" :key="store.id">
<h2>{{store.name}}</h2>
<p> delivery Time : {{store.deliveryTime}}</p>
<p>Ratting : {{store.rating}}</p>
<p v-if="store.freeDelivery" class="label">
<span>free Delivery</span>
</p>
<div class="row">
<div v-for="menuitem in store.menu" :key="menuitem.id" 
class="items" :style="`background: url(/${menuitem.img}) no-repeat center center`">
<div class="iteminfo">
<div>
<h4>{{menuitem.item}}</h4>
<p>{{priceFormatting(menuitem.price)}}</p>
</div>
<nuxt-link :to="`/item/${menuitem.id}`">
    <button class="ghost">View item</button>
</nuxt-link>
</div>
</div>
</div>

</div>
    </section>
</template>

<script>
        
    export default {
        props:{
            dataSource:{
                type:[Array,Object]
            }
        },
        computed: {
        
        },
        methods:{
            priceFormatting(price){
                return '$'+price.toFixed(2)
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>