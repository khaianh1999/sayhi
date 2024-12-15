<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
        <Sidebar />
        <SidebarHearts />

    </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarHearts from "./Sidebar_Hearts.vue";
import main from "~/mixins/main";

export default {
    name: "Main",
    components: {
        Header,
        Footer,
        Sidebar,
        SidebarHearts,
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
