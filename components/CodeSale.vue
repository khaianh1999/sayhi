<template>
    <div class="container mx-auto py-4 lg:py-8">
        <div class="mx-4 xl:mx-0 flex items-end justify-between mb-5">
            <div class="font-bold text-xl xl:text-2xl">
                Nhận mã giảm giá
            </div>
            <button @click="showModal" class="border-none outline-none">Xem tất cả</button>
        </div>
        
        <div class="mx-4 xl:mx-0 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="col-span-1 flex items-center h-28 w-full" v-for="(code,index) in codeShort" :key="index">
                <div class="bg-[#f9e2c7] h-full w-full flex flex-col gap-1 items-center justify-center p-2 rounded-xl border-[1px] border-orange-400">
                    <div class="text-lg font-bold">{{code.title}}
                        <span class="text-sm font-normal">({{code.for_order}})</span>
                    </div>
                    <div class="text-sm text-gray-500 text-left italic">HSD: {{code.end_date}}</div>
                </div>
                <div class="code_right relative bg-[#f9e2c7] h-full w-20 flex flex-col gap-1 items-center justify-center p-2 rounded-xl border-[1px] border-orange-400">
                    <div class="text-xs font-semibold">Nhận mã: {{code.code}}</div>
                    <button class="border-none outline-none py-1 px-1 bg-orange-300 text-xs rounded">Lưu mã</button>
                </div>
            </div>
        </div>

        <div id="codeSale" class="hidden bg-white shadow-lg p-6 rounded">
            <div class="font-bold text-xl xl:text-2xl mb-2 xl:mb-5">Danh sách mã giảm giá :
                <button @click="hideModal" type="button" class="close_modal text-gray-400 bg-transparent rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="codeSale">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <hr>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-2 xl:mt-5">
                <div class="col-span-1 flex items-center h-28 w-full" v-for="(code,index) in codes" :key="index">
                    <div class="bg-[#f9e2c7] h-full w-full flex flex-col gap-1 items-center justify-center p-2 rounded-xl border-[1px] border-orange-400">
                        <div class="text-lg font-bold">{{code.title}}
                            <span class="text-sm font-normal">({{code.for_order}})</span>
                        </div>
                        <div class="text-sm text-gray-500 text-left italic">HSD: {{code.end_date}}</div>
                    </div>
                    <div class="code_right relative bg-[#f9e2c7] h-full w-20 flex flex-col gap-1 items-center justify-center p-2 rounded-xl border-[1px] border-orange-400">
                        <div class="text-xs font-semibold">Nhận mã: {{code.code}}</div>
                        <button class="border-none outline-none py-1 px-1 bg-orange-300 text-xs rounded">Lưu mã</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick } from "vue";
export default {
    name: "CodeSale",
    data() {
        return {
            codeShort: [],
            codes: [
                {
                    id: 1,
                    title: 'Mã giảm 10% giá trị đơn hàng',
                    for_order: 'áp dụng cho đơn từ 0 đồng',
                    end_date: '31/12/2024',
                    code: 'KHXMAAF',
                },
                {
                    id: 2,
                    title: 'Mã giảm 10% giá trị đơn hàng',
                    for_order: 'áp dụng cho đơn từ 0 đồng',
                    end_date: '31/12/2024',
                    code: 'KHXMAAF',
                },
                 {
                    id: 1,
                    title: 'Mã giảm 10% giá trị đơn hàng',
                    for_order: 'áp dụng cho đơn từ 0 đồng',
                    end_date: '31/12/2024',
                    code: 'KHXMAAF',
                },
                {
                    id: 2,
                    title: 'Mã giảm 10% giá trị đơn hàng',
                    for_order: 'áp dụng cho đơn từ 0 đồng',
                    end_date: '31/12/2024',
                    code: 'KHXMAAF',
                },
                {
                    id: 1,
                    title: 'Mã giảm 10% giá trị đơn hàng',
                    for_order: 'áp dụng cho đơn từ 0 đồng',
                    end_date: '31/12/2024',
                    code: 'KHXMAAF',
                },
                {
                    id: 2,
                    title: 'Mã giảm 10% giá trị đơn hàng',
                    for_order: 'áp dụng cho đơn từ 0 đồng',
                    end_date: '31/12/2024',
                    code: 'KHXMAAF',
                },
            ],
        };
    },
    created() {
    },
    mounted() {
       
        this.updateCodeShort();
        // Lắng nghe sự thay đổi kích thước cửa sổ
        window.addEventListener("resize", this.updateCodeShort);


        nextTick(() => {
            this.modalInstance = this.$modal('codeSale', {
            enableBackdropClick: true, // Bật đóng modal khi nhấp nền
            onShow: () => {
                console.log('Modal opened with body scroll disabled');
            },
            onHide: () => {
                console.log('Modal closed with body scroll enabled');
            },
        });
        }, 1000);

    },
    beforeDestroy() {
        // Gỡ sự kiện khi component bị hủy
        window.removeEventListener("resize", this.updateCodeShort);
    },
    methods: {
        showModal() {
            this.modalInstance.show();
        },
        hideModal() {
            this.modalInstance.hide();
        },

        updateCodeShort() {
            // Kiểm tra kích thước màn hình
            const isMobile = window.innerWidth <= 600;
            // Cập nhật codeShort theo điều kiện
            this.codeShort = isMobile
                ? this.codes.slice(0, 1) // Lấy 1 item cho màn hình nhỏ
                : this.codes.slice(0, 2); // Lấy 2 item cho màn hình lớn
        }
    },
}
</script>

<style lang="css" scoped>
    .code_right::before {
        position: absolute;
        content: "";
        height: 90%;
        border-right: 2px dashed white;
        left: -2px;
        top: 50%;
        transform: translateY(-50%);

    }
</style>