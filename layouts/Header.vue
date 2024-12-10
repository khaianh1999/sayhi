<template>
    <div>
        <header>
            <nav class="border-gray-200 bg-main">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="@/assets/images/logo.png" class="h-8" alt="Logo" />
                        <span class="self-center text-base lg:text-2xl font-semibold whitespace-nowrap dark:text-white">Tiệm nhà kem</span>
                    </a>
                    <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <div data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="cursor-pointer text-gray-800 border-[1px] hover:border-white dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-1 lg:px-4 lg:py-2 lg:px-5 lg:py-2.5 focus:outline-none transition">Đăng nhập
                        <font-awesome-icon icon="user" class="text-white" />
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
                                <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto  bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-hover  dark:hover:text-hover md:dark:hover:bg-transparent dark:border-gray-700 transition">
                                    Quà tặng <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
                                </button>
                                <div id="mega-menu-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-1 bg-main">
                                    <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                        <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 dark:hover:text-hover transition">
                                                    Set quà yêu thương
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 dark:hover:text-hover transition">
                                                    Set quà giáng sinh
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 dark:hover:text-hover transition">
                                                    Compo cute
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 dark:hover:text-hover transition">
                                                    Phụ kiện gói quà
                                                </a>
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
    </div>  
</template>

<script>
import Login from "./modal/Login.vue";
import Register from "./modal/Register.vue";
export default {
    components: {
        Login,
        Register,
    },

}
</script>

<style>

</style>