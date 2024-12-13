<template>
    <div>
        <ProductDetail />
        <ProductRelated />
    </div>
</template>
  
<script>
import ProductDetail from "../../components/ProductDetail.vue";
import ProductRelated from "../../components/ProductRelated.vue";

export default {
    name: 'ProductDetailPage',
    layout: "Main",
    components: {
        ProductDetail,
        ProductRelated
    },
}
</script>
  