<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
        <Sidebar />

    </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import main from "~/mixins/main";

export default {
    name: "Main",
    components: {
        Header,
        Footer,
        Sidebar,
    },
    mixins: [main],
    data() {
        return {
        };
    },
    computed: {
    },
    created() {
    },
    mounted() {
        initFlowbite();
    },
  
    methods: {},
};
</script>
<style scoped lang="scss"></style>
