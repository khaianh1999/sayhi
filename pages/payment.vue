<template>
    <div>
        <!-- Breadcrumb -->
        <nav class="flex px-5 py-3 text-white bg-main border-t-[1px] border-grey-200" aria-label="Breadcrumb">
            <div class="container mx-auto">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <nuxt-link to="/" class="inline-flex items-center text-sm font-medium text-white">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Trang chủ
                        </nuxt-link>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-200 md:ms-2">Thanh tóan</span>
                        </div>
                    </li>
                </ol>
            </div>
        </nav>
        <div class="container mx-auto py-4 md:py-8">
            <div class="grid grid-cols-1 xl:grid-cols-5 mx-4 xl:mx-0 ">
                <div class="col-span-1 xl:col-span-3 bg-white rounded-lg ">
                    <template v-if="getMyBag?.length">
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2 py-2 px-2 justify-center bg-main2 rounded">
                                <div class="w-3/6 font-bold text-gray-900 text-left text-xs xl:text-base">Sản phẩm</div>
                                <div class="w-1/6 font-bold text-gray-900 text-right text-xs xl:text-base">Giá tiền</div>
                                <div class="w-1/6 font-bold text-gray-900 text-center text-xs xl:text-base">Số lượng</div>
                                <div class="w-1/6 font-bold text-gray-900 text-right text-xs xl:text-base">Thao tác</div>

                            </div>
                            <div class="p-2 rounded border-[1px] border-gray-200 flex items-center justify-between gap-2" v-for="(item,index) in getMyBag" :key="index">
                                <div class="w-3/6 max-w-3/6 flex items-center gap-2">
                                    <img class="w-8 h-8" src="https://bizweb.dktcdn.net/100/434/558/themes/894884/assets/cate_2.jpg" alt="img">
                                    <div class="text-gray-900 text-sm line-clamp-2">{{ item?.name }}</div>
                                </div>
                                <div class="w-1/6 text-xs xl:text-base text-gray-900 font-bold text-right">{{convertMoney(item.price)}}</div>
                               
                                <div class="w-1/6 xl:border-[1px] xl:border-gray-600 flex gap-2 items-center justify-between rounded">
                                    <span @click="minusItemsBagInLocalStorage(item)" class="w-6 h-6 text-bold cursor-pointer text-center font-bold">-</span>
                                    <input readonly type="number" v-model="item.quantity" class="!border-none !outline-none !ring-0 font-bold w-6 text-center bg-transparent px-0" >
                                    <span @click="setItemsBagInLocalStorage(item)" class="w-6 h-6 text-bold cursor-pointer text-center font-bold">+</span>
                                </div>
                                <div class="w-1/6 flex items-center justify-end"><font-awesome-icon icon="trash" class="text-main text-xl cursor-pointer" /></div>
                            </div>
                        </div>
                        <div class="flex gap-2 items-center justify font-semibold mt-2">
                            <span class="text-gray-900 text-xs xl:text-lg w-3/6">Phí vận chuyển:</span>
                            <span class="text-gray-900 text-base text-left block w-1/6 text-right mr-2">{{convertMoney(priceShip)}}</span>
                            <div v-if="priceShip > 0" class="w-2/6 italic text-xs text-gray-600">*Tổng tiền trên 100k để được miễn phí vận chuyển</div>
                            <div v-else class="w-2/6 italic text-xs text-gray-600">* Bạn đang được miễn phí vận chuyển</div>
                        </div>
                        <div class="flex gap-2 items-center justify font-semibold mt-2">
                            <span class="text-gray-900 text-xs xl:text-lg w-3/6">Tổng tiền:</span>
                            <span class="text-main text-xs xl:text-lg text-left block w-1/6 text-right">{{convertMoney(totalPriceInBag + priceShip)}}</span>
                            <div class="w-1/6"></div>
                            <div class="w-1/6"></div>
                        </div>
                        <div class="flex gap-2 items-center justify font-semibold my-2">
                            <span class="text-gray-900 text-xs xl:text-lg w-3/6">Mã ưu đãi:</span>
                            <span class="w-fit text-main text-xs text-left block w-1/6 cursor-pointer whitespace-nowrap" id="dropdownRadioHelperButton" data-dropdown-toggle="dropdownRadioHelper">Chọn mã của bạn</span>
                            <div class="w-1/6"></div>
                            <div class="w-1/6"></div>
                            <!-- Dropdown menu -->
                            <div id="dropdownRadioHelper" class="z-10 hidden rounded-xl shadow w-fit bg-white">
                                <div class="grid grid-cols-1 xl:grid-cols-2 gap-2 p-2 border-[1px] shadow-lg rounded-lg border-main">
                                    <div class="cursor-pointer group col-span-1 flex items-center h-full w-full" v-for="(code,index) in codes" :key="index">
                                        <div class="transition bg-main2 group-hover:bg-main r h-full w-full flex flex-col gap-1 items-center justify-center p-1 xl:p-2 rounded-xl border-[1px] border-orange-400">
                                            <div class="text-xs xl:text-lg font-bold">{{code.title}}
                                                <span class="text-sm font-normal">({{code.for_order}})</span>
                                            </div>
                                            <div class="text-sm text-gray-500 text-left italic">HSD: {{code.end_date}}</div>
                                        </div>
                                        <div class="transition code_right relative bg-main2 group-hover:bg-main h-full w-20 flex flex-col gap-1 items-center justify-center p-2 rounded-xl border-[1px] border-orange-400 group-hover:border-main">
                                            <div class="text-xs font-semibold">Nhận mã: {{code.code}}</div>
                                            <button class="transition border-none outline-none py-1 px-1 bg-orange-300 group-hover:bg-main text-xs rounded">Sử dụng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="flex gap-2 items-center justify font-semibold mt-2">
                            <span class="text-gray-900 text-xs xl:text-lg w-3/6">Số tiền bạn cần thanh toán:</span>
                            <span class="text-main text-base xl:text-2xl text-left block w-1/6 text-right underline ">{{convertMoney(totalPriceInBag)}}</span>
                            <div class="w-1/6"></div>
                            <div class="w-1/6"></div>
                        </div>
                    </template>
                </div>
                <div class="col-span-1 xl:col-span-2 pl-0 xl:pl-8">
                    <div class="text-gray-900 font-bold text-xl py-2">Thông tin người nhận</div>
                    <form class="mb-6">
                        <div class="mb-3">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Tên của bạn <span class="text-red-600">*</span></label>
                            <input type="text" id="name" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-main focus:border-main" placeholder="Nguyễn Văn A" required />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" id="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-main focus:border-main" placeholder="**@gmail.com" required />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Số điện thoại<span class="text-red-600">*</span></label>
                            <input type="text" id="phone" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-main focus:border-main" placeholder="036868***" required />
                        </div>
                        <div class="mb-3">
                            <label for="city" class="block mb-2 text-sm font-medium text-gray-900">Thành phố<span class="text-red-600">*</span></label>
                            <select id="city" class="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-main focus:border-main">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                         <div class="mb-3">
                            <label for="district" class="block mb-2 text-sm font-medium text-gray-900">Quận/Huyện<span class="text-red-600">*</span></label>
                            <select id="district" class="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-main focus:border-main">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                         <div class="mb-3">
                            <label for="ward" class="block mb-2 text-sm font-medium text-gray-900">Phường/Xã<span class="text-red-600">*</span></label>
                            <select id="ward" class="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-main focus:border-main">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Thông tin chi tiết (Thôn, xóm...)</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-main focus:border-main border-gray-600 placeholder-gray-400 focus:ring-main focus:border-main" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" class="text-white bg-main hover:bg-main w-full focus:ring-4 focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none focus:ring-main block">Thanh toán</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>
import main from "~/mixins/main";
import { mapGetters } from "vuex";
export default {
    mixins: [main],
    name: 'PaymentPage',
    layout: "Main",
    components: {
    },
    data() {
        return {
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
    computed: {
        ...mapGetters(["getMyBag"]),
        totalPriceInBag: function () {
            let total = 0;
            for (let index = 0; index < this.getMyBag.length; index++) {
                const item = this.getMyBag[index];
                total += item.price* item.quantity;
            }
            return total;
        },
        priceShip: function () {
            if (this.totalPriceInBag < 100000) { // dưới 100k lấy ship 30k
                return 30000;
            } else { // freeship
                return 0;
            }
        },
    },
    mounted() {
        initFlowbite();
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