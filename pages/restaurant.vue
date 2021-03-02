<template>
    <main class="container restaurant">
    <div class="restaurantheading">
   
    </div>
    <h1>Restaurant</h1>
 <AppSelect @change="selectRestaurant=$event"/>
    
    <AppRestaurantInfo :dataSource="filteredData"/>
</main>
</template>

<script>
import { mapState } from 'vuex';


    export default {
        data(){
            return {selectRestaurant:''}
        },
        computed: {
        ...mapState([
            'fooddata',
        ]),
        filteredData(){
            if (this.selectRestaurant){
                return this.fooddata.filter(el=>{
                    let name =el.name.toLowerCase()
                    return name.includes(this.selectRestaurant)
                })
            }
                            return this.fooddata

        }
    },
    }
</script>

<style lang="scss" scoped>

</style>