<template>
  <section v-if="userIsLogin">
    <ul>
      <product-item
        v-for="prod in getProducts"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters('product', ['getProducts']),
    ...mapGetters(['userIsLogin'])
  },
  watch: {
    $route(){
      console.log('hallo')
    }
  }
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>