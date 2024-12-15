<template>
    <!-- drawer component -->
    <div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 " tabindex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-900 ">Giỏ hàng của bạn</h5>
        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center hover:bg-gray-600 hover:text-white" >
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close menu</span>
        </button>
        <template v-if="getMyBag.length">
            <div class="flex flex-col gap-2">
                <div class="p-2 rounded border-[1px] border-main2 flex items-center justify-between gap-2" v-for="(item,index) in getMyBag" :key="index">
                    <img class="w-8 h-8" src="https://bizweb.dktcdn.net/100/434/558/themes/894884/assets/cate_2.jpg" alt="img">
                    <div class="text-gray-900 text-sm line-clamp-2">{{ item.name }}</div>
                    <div class="border-[1px] border-gray-600 flex gap-2 items-center justify-between rounded">
                        <span @click="minusItemsBagInLocalStorage(item)" class="w-6 h-6 text-bold cursor-pointer text-center font-bold">-</span>
                        <input type="number" v-model="item.quantity" class="!border-none !outline-none !ring-0 w-6 text-center bg-transparent px-0" >
                        <span @click="setItemsBagInLocalStorage(item)" class="w-6 h-6 text-bold cursor-pointer text-center font-bold">+</span>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 items-center justify-between font-semibold mt-2">
                <span class="text-gray-900 text-xl">Tổng tiền:</span>
                <span class="text-main text-base">{{convertMoney(totalPriceInBag)}}</span>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-2">
                <div class="cursor-pointer px-4 py-2 text-sm font-medium text-center text-white border border-gray-200 rounded-lg focus:outline-none hover:opacity-50  focus:z-10 focus:ring-4 focus:ring-gray-100 focus:ring-gray-700 bg-gray-400  transition" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example">Tiếp tục mua</div>
                <nuxt-link v-if="getMyBag.length" to="/" class="inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-main hover:opacity-50 text-center text-white rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition">Thanh toán <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </nuxt-link>
            </div>
            <div class="italic text-sm text-gray-600">*Vào thanh toán để sử dụng mã giảm giá</div>
        </template>
        <template v-else>
            <div class="text-lg text-main font-bold">
                Sắm ngay những món đồ cute để việc học trở nên thú vị và tràn đầy cảm hứng hơn!
            </div>
            <div data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="cursor-pointer mt-5 px-4 py-2 text-sm font-medium text-center text-white border border-gray-200 rounded-lg focus:outline-none hover:opacity-50  focus:z-10 focus:ring-4 focus:ring-gray-100 focus:ring-gray-700 bg-gray-400  transition">Ok, let go !</div>
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
        ...mapGetters(["getMyBag"]),
        totalPriceInBag: function () {
            let total = 0;
            for (let index = 0; index < this.getMyBag.length; index++) {
                const item = this.getMyBag[index];
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