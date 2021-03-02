<template>
  <main class="container">
    <AppHeder></AppHeder>
    <AppRestaurantInfo :dataSource="fooddata"/>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'fooddata',
    ])
  },
};
</script>

<style>

</style>