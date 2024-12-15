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
                    <span class="ms-1 text-sm font-medium text-gray-200 md:ms-2">sổ</span>
                </div>
                </li>
            </ol>
        </div>
        </nav>
        <div class="container mx-auto py-4 md:py-8">
            <div class="grid grid-cols-1 lg:grid-cols-8 gap-5 mx-4 xl:mx-0 xl:min-h-[calc(100vh-250px)]">
                <div class="col-span-1 lg:col-span-2">
                    <div class="text-xl font-bold">Danh mục sản phẩm</div>
                    <div class="flex flex-col gap-2 xl:gap-4 mt-2 xl:mt-5">
                        <div class="flex items-center" v-for="(item,index) in filtersPrice" :key="index">
                            <input :id="'default-radio-'+ index+1" type="radio" :value="item?.id" v-model="filterActice" @change="changeProducts(item?.id)" name="default-radio" class="cursor-pointer w-4 h-4 text-main bg-gray-100 border-gray-300 righ-0 focus:ring-main">
                            <label :for="'default-radio-'+ index+1" class="ms-2 text-base text-gray-900 cursor-pointer">{{item?.name}}</label>
                        </div>
                      
                    </div>
                </div>
                <div class="col-span-1 lg:col-span-6 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
                    <template v-if="productsRender.length">
                        <div class="col-span-1" v-for="(product,index) in productsRender" :key="index">
                            <div class="w-full overflow-hidden relative group rounded-xl">
                                <nuxt-link to="/" class="group">
                                    <img class="group-hover:scale-110 transition rounded-xl" src="https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp15.jpg?v=1629775088790" alt="img">
                                </nuxt-link>
                                <span @click="setItemsHeartInLocalStorage(product)" class="cursor-pointer transition hidden group-hover:flex absolute top-2 right-2 w-7 h-7 rounded bg-main items-center justify-center" data-drawer-show="drawer-left-example" data-drawer-placement="left" aria-controls="drawer-left-example">
                                    <font-awesome-icon icon="heart" class="text-white" />
                                </span>
                                <div class="transition group-hover:bottom-0 absolute -bottom-full left-0 w-full flex items-center justify-around bg-main">
                                    <div class="w-1/2 flex justify-center cursor-pointer text-sm text-white transition hover:scale-105 px-1 py-2 md:px-2 md:py-4 items-center gap-1" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
                                        <font-awesome-icon icon="bag-shopping" class="text-white" transition/>
                                    </div>
                                    |
                                    <div class="w-1/2 flex justify-center cursor-pointer text-sm text-white transition hover:scale-105 px-1 py-2 md:px-2 md:py-4 items-center gap-1">
                                        <font-awesome-icon icon="money-bill" class="text-white" transition/>
                                    </div>
                                </div>
                            </div>
                            <a class="hover:text-hover text-sm lg:text-base transition min-h-[44px]">{{product?.name}}</a>
                            <div class="flex items-end gap-2">
                                <span class="text-xl lg:text-2xl font-bold">{{convertMoney(product?.price)}}</span>
                                <span class="line-through">{{convertMoney(product?.price_old)}}</span>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="bg-main2 border-[1px] border-main text-gray-900 font-semibold h-fit col-span-2 lg:col-span-4 p-2 rounded">Sản phẩm đang được chúng tôi cập nhật. Vui lòng ghé lại sau nhé <3.. </div>
                    </template>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import main from "~/mixins/main";
export default {
    name: "SlideFilter",
    mixins: [main],
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 1,
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 8,
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 6,
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 7,
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 8,
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 7,
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 1,
                },
                {
                    id: 2,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 2,
                },
                {
                    id: 3,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 3,
                },
                {
                    id: 4,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 4,
                },
                {
                    id: 5,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 5,
                },
                {
                    id: 6,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 6,
                },
                {
                    id: 7,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 8,
                },
                {
                    id: 8,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category: 7,
                }

            ],
            productsRender: [
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                },
                {
                    id: 1,
                    name: 'Sổ tay siêu cute siêu cute siêu cute siêu cute',
                    price: 3000,
                    price_old: 5500,
                    category:'1',
                }

            ],
            filtersPrice: [
                {
                    id: 1,
                    name : 'Tên A-Z',
                },
                {
                    id: 2,
                    name : 'Tên Z-A',
                },
                {
                    id: 3,
                    name : 'Giá thấp đến cao',
                },
                {
                    id: 4,
                    name : 'Giá cao xuống thấp',
                },
                {
                    id: 5,
                    name : 'Vpp học sinh',
                },
                {
                    id: 6,
                    name : 'Vpp giáo viên',
                },
                {
                    id: 7,
                    name : 'Phụ kiện',
                },
                {
                    id: 8,
                    name : 'Cặp - Túi xách',
                },
                {
                    id: 9,
                    name : 'Dụng cụ văn phòng',
                },
            ],
            filterActice: null,
        };
    },

    mounted() {
        const id = this.$route.query?.id;
        if (id) {
            this.filterActice = id;
            this.changeProducts(id); // chỉ lấy nhưng mục đã lọc
        } else {
            this.productsRender = this.products // Lấy all khi chưa lọc;
        }
    },

    methods: {
        changeProducts (id) {
            if (id >= 5 ) { // Lọc theo category
                this.productsRender = this.products.filter( item => item.category == id);
            } else { // Sắp xếp lại theo điều kiện filter
                this.productsRender = this.products; // Tạm lấy all
            }
            
        },
    },
}
</script>

<style>

</style>