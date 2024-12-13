<template>
    <div>
        <!-- Breadcrumb -->
        <nav class="flex px-5 py-3 text-white bg-main border-t-[1px] border-grey-200" aria-label="Breadcrumb">
            <div class="container mx-auto">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-sm font-medium text-white">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Trang chủ
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <a href="#" class="ms-1 text-sm font-medium text-white md:ms-2">Danh mục</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="ms-1 text-sm font-medium text-white md:ms-2">sổ</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-200 md:ms-2">{{ detail.title }}</span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
        <div class="container mx-auto py-4 md:py-8">
            <div class="grid grid-cols-1 lg:grid-cols-8 gap-5 mx-4 xl:mx-0">
                <div class="col-span-1 lg:col-span-4">
                    <img class="w-full" src="https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp15.jpg?v=1629775088790" alt="img">
                    <div class="flex items-center gap-2 mt-5 cursor-pointer">
                        <img v-for="(img,index) in detail.type_product" :key="index" class="w-14 h-14 ring-[1px] ring-transparent" :class="{'!ring-main' : indexActive == index}" @click="indexActive = index" src="https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp15.jpg?v=1629775088790" alt="img">
                    </div>
                </div>
                <div class="col-span-1 lg:col-span-4 flex flex-col gap-4">
                    <div class="text-2xl font-bold">{{ detail.title }}</div>
                    <div class="text-base text-gray-400">{{ detail.description }}</div>
                    <div>
                        <div class="text-base">Mẫu</div>
                        <div class="flex items-center gap-2 mt-2">
                            <div class="border-[1px] border-grey-200 rounded cursor-pointer px-3 py-1 hover:bg-main hover:text-white transition" :class="{'bg-main text-white' : indexActive == index}" @click="indexActive = index" v-for="(item,index) in detail.type_product" :key="index">{{ item?.name }}</div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span class="text-lg font-seminbold mr-2">Số lượng:</span>
                        <div class="border-[1px] border-gray-600 flex items-center justify-between rounded">
                            <span @click="minusQuantity" class="w-7 h-7 text-bold cursor-pointer text-center font-bold" :class="{'opacity-50' : (quantity == 1)}">-</span>
                            <input type="number" class="!border-none !outline-none !ring-0 w-12 text-center" v-model="quantity">
                            <span @click="plusQuantity" class="w-7 h-7 text-bold cursor-pointer text-center font-bold" :class="{'opacity-50' : (quantity == detail.quantity)}">+</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="py-2 px-3 text-white text-semibold bg-slate-400 rounded outline-none cursor-pointer hover:opacity-50 transition">Thêm vào giỏ hàng</button>
                        <button class="py-2 px-3 text-white text-semibold bg-main rounded outline-none cursor-pointer hover:opacity-50 transition">Mua ngay</button>
                    </div>
                    <div>
                        <div class="text-lg font-seminbold mr-2">Ưu đãi liên quan:</div>
                        <div class="text-gray-400 pl-2">Trở thành thành viên vip của shop</div>
                        <div class="text-gray-400 pl-2">Giảm giá cho đơn hàng tiếp theo</div>
                    </div>
                </div>

            </div>
            <div class="w-full xl:w-1/2 flex flex-col gap-2 mt-5 mx-4 xl:mx-0">
                <div class="upppercase text-2xl font-bold">Thông tin chi tiết</div>
                <div class="text-base text-gray-400">
                    Đặc điểm kỹ thuật
                    Tên: Băng keo 2 mặt dạng bút tiện dụng cho trang trí văn phòng và học tập,Bút xóa kéo kiểu dáng hoạt hình xinh xắn dễ thương
                    Vật chất: PS + POM + Titanium Dioxide
                    Kích thước: 5mm * 5m
                    Mô hình: Băng sửa chữa + Keo chấm Băng hai mặt
                    Đóng gói: 1 cái / gói
                    Sử dụng: Sửa các lỗi đã viết

                    Tính năng
                    1. Một mảnh có hai kiểu và nhiều mẫu: băng sửa + kết hợp băng hai mặt
                    2. Vật liệu thân thiện với môi trường và an toàn để sử dụng
                    3. Độ phủ tốt của băng sửa, keo hai mặt chắc chắn
                    4. Dễ sử dụng và di động
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import main from "~/mixins/main";
export default {
    name: "ProductDetail",
    mixins: [main],
    data() {
        return {
            indexActive: 0,
            detail: {
                title: 'Bút xoá giấy',
                status: 1,
                description: 'Văn phòng phẩm dễ thương Băng xóa giấy Plus 2 mặt dạng bút tiện,Bút xóa kéo kiểu dáng hoạt hình xinh xắn dễ thương',
                type_product: [
                    {
                        name: 'Thỏ',
                        img: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp15.jpg?v=1629775088790' 
                    },
                    {
                        name: 'Gà',
                        img: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp15.jpg?v=1629775088790' 
                    },
                    {
                        name: 'Mèo',
                        img: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp15.jpg?v=1629775088790' 
                    },
                    {
                        name: 'Vịt',
                        img: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp15.jpg?v=1629775088790' 
                    }
                ],
                price: 18000,
                price_old: 53000,
                quantity: 10,

            },
            quantity: 1,
        };
    },

    mounted() {
    },

    methods: {
        plusQuantity () {
            if (this.detail.quantity > this.quantity) {
                this.quantity++
            }
        },
        minusQuantity () {
            if (this.quantity > 1) {
                this.quantity--
            }
        },
    },
}
</script>

<style>

</style>