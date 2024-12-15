<template>
    <div class="sticky top-0 z-10">
        <header>
            <nav class="border-gray-200 bg-main">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto px-2 xl:px-0 py-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="@/assets/images/logo.png" class="h-8" alt="Logo" />
                        <span class="self-center text-base lg:text-2xl font-semibold whitespace-nowrap dark:text-white">Tiệm nhà kem</span>
                    </a>
                    <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <div class="relative cursor-pointer text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-1 focus:outline-none transition" data-drawer-target="drawer-left-example" data-drawer-show="drawer-left-example" data-drawer-placement="left" aria-controls="drawer-left-example">
                            <font-awesome-icon icon="heart" class="text-white text-xl" />
                            <span v-if="getNumHearts" class="absolute text-gray-900 text-xs right-1 bottom-1 font-bold bg-main2 w-3 h-3 leading-3 rounded text-center inline-block">{{getNumHearts}}</span>
                        </div>   
                        <div class="relative cursor-pointer text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-1 focus:outline-none transition" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
                            <font-awesome-icon icon="bag-shopping" class="text-white text-xl"/>
                            <span v-if="getNumInBag" class="absolute text-gray-900 text-xs right-1 bottom-1 font-bold bg-main2 w-3 h-3 leading-3 rounded text-center inline-block">{{getNumInBag}}</span>
                        </div>   
                        <div id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="cursor-pointer text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-1 focus:outline-none transition">
                            <font-awesome-icon icon="user" class="text-white text-xl" />
                        </div>
                        <!-- Dropdown menu -->
                        <div id="dropdownInformation" class="z-10 hidden divide-y rounded-lg shadow w-44 bg-white shadow-lg">
                            <div class="px-4 py-3 text-sm text-gray-900">
                            <div>Giant Boy</div>
                            <div class="font-medium truncate">khaianhaktb@gmail.com</div>
                            </div>
                            <ul class="py-2 text-sm text-gray-200" aria-labelledby="dropdownInformationButton">
                                <li>
                                    <div data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"  class="block px-4 py-2 hover:bg-main2 text-gray-900 hover:text-gray-600 cursor-pointer">Đăng nhập</div>
                                </li>
                                <li>
                                    <div  class="block px-4 py-2 hover:bg-main2 text-gray-900 hover:text-gray-600 cursor-pointer">Settings</div>
                                </li>
                                <li>
                                    <div class="block px-4 py-2 hover:bg-main2 text-gray-900 hover:text-gray-600 cursor-pointer">Earnings</div>
                                </li>
                            </ul>
                            <div class="py-2">
                                <div class="block px-4 py-2 text-sm  hover:bg-main2 text-gray-900 hover:text-gray-600 cursor-pointer">Đăng xuất</div>
                            </div>
                        </div>
                        <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200  dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                            <li>
                                <nuxt-link to="/" class="block py-2 px-3 border-b border-gray-100  bg-transparent md:border-0  md:p-0 text-white md:dark:hover:text-hover dark:hover:text-hover md:dark:hover:bg-transparent dark:border-gray-700 transition" aria-current="page">Trang chủ</nuxt-link>
                            </li>
                            <li>
                                <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto  bg-transparent md:border-0  md:p-0 dark:text-white md:hover:text-hover  hover:text-hover md:hover:bg-transparent border-gray-700 transition">
                                    Quà tặng <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                                <div id="mega-menu-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md bg-main">
                                    <div class="text-gray-900 md:pb-4 dark:text-white">
                                        <ul class="" aria-labelledby="mega-menu-dropdown-button">
                                            <li>
                                                <div class="block px-4 py-2 cursor-pointer text-gray-900 hover:text-gray-600 transition hover:bg-main2">
                                                    Set quà yêu thương
                                                </div>
                                            </li>
                                            <li>
                                                <div class="block px-4 py-2 cursor-pointer text-gray-900 hover:text-gray-600 transition hover:bg-main2">
                                                    Set quà giáng sinh
                                                </div>
                                            </li>
                                            <li>
                                                <div class="block px-4 py-2 cursor-pointer text-gray-900 hover:text-gray-600 transition hover:bg-main2">
                                                    Compo cute
                                                </div>
                                            </li>
                                            <li>
                                                <div class="block px-4 py-2 cursor-pointer text-gray-900 hover:text-gray-600 transition hover:bg-main2">
                                                    Phụ kiện gói quà
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#products_best_seller" class="block py-2 px-3 text-gray-900 border-b border-gray-100 bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-hover  dark:hover:text-hover md:dark:hover:bg-transparent dark:border-gray-700 transition">Khuyến mãi hot</a>
                            </li>
                            <li>
                                <nuxt-link to="/contact" class="block py-2 px-3 text-gray-900 border-b border-gray-100 bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-hover  dark:hover:text-hover md:dark:hover:bg-transparent dark:border-gray-700 transition">Liên hệ</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    <Login />
    <Register />
    <VerifySms />
    </div>  
</template>

<script>
import Login from "./modal/Login.vue";
import Register from "./modal/Register.vue";
import VerifySms from "./modal/VerifySms.vue";
import main from "~/mixins/main";
import { mapGetters } from "vuex";
export default {
    mixins: [main],
    components: {
        Login,
        Register,
        VerifySms,
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["getUser", "getNumHearts", "getMyHearts", "getMyBag", "getNumInBag" ]),
    },
    mounted() {
        // Lấy value từ localstorage set vào store
        this.$store.dispatch("SET_MY_HEARTS");
        this.$store.dispatch("SET_MY_BAG");
    },
    methods: {

    },

}
</script>

<style>

</style>