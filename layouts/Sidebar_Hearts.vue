<template>
    <!-- drawer component -->
 
    <!-- drawer component -->
    <div id="drawer-left-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80" tabindex="-1" aria-labelledby="drawer-left-label">
        <h5 id="drawer-left-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-900 ">Giỏ hàng của bạn</h5>
        <button type="button" data-drawer-hide="drawer-left-example" aria-controls="drawer-left-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center hover:bg-gray-600 hover:text-white" >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close menu</span>
        </button>
        <template v-if="getMyHearts.length">
            <div class="flex flex-col gap-2">
                <nuxt-link :to="`product-detail/${item.id}`" class="p-2 rounded border-[1px] border-main2 flex items-center justify-between gap-2" v-for="(item,index) in getMyHearts" :key="index" data-drawer-hide="drawer-left-example" aria-controls="drawer-left-example">
                    <img class="w-8 h-8" src="https://bizweb.dktcdn.net/100/434/558/themes/894884/assets/cate_2.jpg" alt="img">
                    <div class="text-gray-900 text-sm line-clamp-2">{{ item.name }}</div>
                </nuxt-link>
            </div>
        </template>
        <template v-else>
            <div class="text-lg text-main font-bold">
                Sắm ngay những món đồ cute để việc học trở nên thú vị và tràn đầy cảm hứng hơn!
            </div>
            <div data-drawer-hide="drawer-left-example" aria-controls="drawer-left-example" class="cursor-pointer mt-5 px-4 py-2 text-sm font-medium text-center text-white border border-gray-200 rounded-lg focus:outline-none hover:opacity-50  focus:z-10 focus:ring-4 focus:ring-gray-100 focus:ring-gray-700 bg-gray-400  transition">Ok, let go !</div>
        </template>
    </div>
</template>

<script>
import main from "~/mixins/main";
import { mapGetters } from "vuex";
export default {
    mixins: [main],
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["getMyHearts"]),
        totalPriceInBag: function () {
            let total = 0;
            for (let index = 0; index < this.getMyHearts.length; index++) {
                const item = this.getMyHearts[index];
                total += item.price* item.quantity;
            }
            return total;
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style>

</style>