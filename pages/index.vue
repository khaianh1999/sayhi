<template>
  <div>
    <Carousel />
    <MenuBody />
    <ProductsBestSeller />
    <ProductsNew />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import MenuBody from "../components/MenuBody.vue";
import ProductsNew from "../components/ProductsNew.vue";
import ProductsBestSeller from "../components/ProductsBestSeller.vue";


export default {
  name: 'IndexPage',
  layout: "Main",
  components: {
    Carousel,
    MenuBody,
    ProductsNew,
    ProductsBestSeller,
  },
}
</script>
