<template>
<!-- Main modal -->
<div id="authentication-register-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-fit max-h-full">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow bg-gradient-to-r from-[#ffd6d6] to-main">
            <div class="flex items-center overflow-hidden">
                <div class="hidden md:block w-[400px] h-auto">
                    <img class="rounded-tl-lg rounded-bl-lg" src="@/assets/images/banner1.png" alt="img">
                </div>
                <div class="w-[400px] h-auto">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b border-gray-600">
                        <h3 class="text-xl font-semibold text-white shadow-text">
                            Đăng ký tài khoản
                        </h3>
                        <button type="button" class="end-2.5 text-white bg-transparent hover:bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:text-gray-200" data-modal-hide="authentication-register-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form class="space-y-4" @submit.prevent="register">
                            <div>
                                <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900">Nhập tên của bạn</label>
                                <input type="text" name="full_name" id="full_name" maxlength="20" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-main block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Nhập email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-main block w-full p-2.5" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label for="number" class="block mb-2 text-sm font-medium text-gray-900">Nhập số điện thoại</label>
                                <input type="number" name="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-main block w-full p-2.5" placeholder="0333544xxx" required />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-main block w-full p-2.5" required />
                            </div>
                            <button type="submit" class="w-full text-white bg-main hover:bg-[#ffd6d6] hover:text-main border-[1px] border-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">Đăng ký</button>
                            <div class="flex items-center justify-between text-sm font-normal text-gray-900">
                                Đã có tài khoản? <div class="text-white shadow-text cursor-pointer" data-modal-hide="authentication-register-modal" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">Đăng nhập</div>
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
    name: "Register",
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
        register() {
            // Call api register
            if (true) {
                // Thành công bắn sms -> chuyển sang modal xác thực
                // Tắt popup đăng ký 
                const modal = document.querySelector('[data-modal-hide="authentication-register-modal"]');
                if (modal) {
                    const targetModal = modal.closest('#authentication-register-modal');
                    if (targetModal) {
                        targetModal.classList.add('hidden');
                    }
                }
                console.log('modal', modal);
                
                return;
                // Mở popup xác thực
                const modalVerify = document.querySelector('#authentication-verify-sms-modal');
                modalVerify.classList.remove('hidden');
                return;
                if (modalVerify) {
                    const targetModal = modalVerify.closest('#authentication-verify-sms-modal');
                    if (targetModal) {
                        targetModal.classList.remove('hidden');
                    }
                }
               
            }
        },
    },
}
</script>

<style>

</style>