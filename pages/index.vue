<template>
  <div>
    <Carousel />
    <MenuBody />
    <ProductsBestSeller />
    <ProductsNew />
    <Youtube />
    <Reviewer />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import MenuBody from "../components/MenuBody.vue";
import ProductsNew from "../components/ProductsNew.vue";
import ProductsBestSeller from "../components/ProductsBestSeller.vue";
import Reviewer from "../components/Reviewer.vue";
import Youtube from "../components/Youtube.vue";
export default {
  name: 'IndexPage',
  layout: "Main",
  components: {
    Carousel,
    MenuBody,
    ProductsNew,
    ProductsBestSeller,
    Reviewer,
    Youtube,
  },
}
</script>
