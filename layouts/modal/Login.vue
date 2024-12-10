<template>
<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-fit max-h-full">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow bg-gradient-to-r from-[#ffd6d6] to-main">
            <div class="flex items-center overflow-hidden">
                <div class="hidden md:block w-[400px] h-auto">
                    <img class="rounded-tl-lg rounded-bl-lg" src="@/assets/images/banner1.png" alt="img">
                </div>
                <div class="w-[400px] h-auto">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5">
                        <h3 class="text-xl font-semibold text-white shadow-text">
                            Đăng nhập
                        </h3>
                        <button type="button" class="end-2.5 text-white bg-transparent hover:bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:text-gray-200" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form class="space-y-4" @submit.prevent="login">
                            <div>
                                <label for="number" class="block mb-2 text-sm font-medium text-gray-900">Nhập số điện thoại của bạn</label>
                                <input type="number" v-model="phone" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-main block w-full p-2.5" placeholder="0333544xxx" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                <input type="password" v-model="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-main block w-full p-2.5" required />
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" v-model="remember" class="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0 focus:bg-main" />
                                    </div>
                                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
                                </div>
                                <a href="#" class="text-sm text-white hover:underline">Quên mật khẩu</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-main hover:bg-[#ffd6d6] hover:text-main border-[1px] border-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Đăng nhập</button>
                            <div class="flex items-center justify-between text-sm font-normal text-gray-900">
                                Chưa đăng ký? <div class="text-white shadow-text cursor-pointer" data-modal-hide="authentication-modal" data-modal-target="authentication-register-modal" data-modal-toggle="authentication-register-modal">Tạo tài khoản</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
</template>

<script>
const expire1Hour = 60 * 60;
export default {
    name: "Login",
    data() {
        return {
            phone: null,
            password: null,
            remember: false,
        };
    },

    mounted() {
    },

    methods: {
        login() {
            // Call api login
            if (true) {
                // Nếu chọn remember thì lưu token 1 tháng 
                if (this.remember) {
                    this.$cookies.set('access_token', 'khải đẹp trai quá', {
                        path: "/",
                        maxAge: expire1Hour * 24 * 30, // 30 days
                    });
                }
                // Tắt popup đăng nhập 
                const modalElement = document.getElementById('authentication-modal');
                // Initialize modal using Flowbite (nếu cần)
                const modal = new Modal(modalElement);
                // Open modal
                // modal.show();
                // Close modal
                modal.hide();
            }
        },
    },
}
</script>

<style lang="css" scoped>
    [type=checkbox]:checked {
        background-color: #ff7675;
    }
</style>