<template>
    <div class="container px-4 lg:px-0 mx-auto py-[100px] pt-8 md:pt-16 md:pb-[400px] ">
        <h1 class="text-xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">Văn phòng phẩm của chúng tôi</h1>
        <p class="text-gray-600 text-base lg:text-xl leading-relaxed mb-8 text-center">
            Chào mừng đến với cửa hàng văn phòng phẩm của chúng tôi! Chúng tôi cung cấp nhiều loại đồ dùng văn phòng chất lượng cao,
            từ bút và sổ tay đến hộp đựng và phụ kiện để bàn. Hoàn hảo cho các chuyên gia, sinh viên,
            và bất kỳ ai coi trọng sự sáng tạo và tổ chức.
        </p>
        <div class="w-1/2 mx-auto flex flex-col lg:flex-row items-start justify-center bg-main w-fit p-4 lg:p-10 rounded-xl lg:rounded-3xl gap-2">
            <div class="w-full lg:w-1/2 text-xl lg:text-2xl text-bold text-white">Các nền tảng của chúng tôi :</div>
            <div class="w-full lg:w-1/2 flex flex-col gap-5 justify-center space-x-6 lg:border-l-2 lg:border-gray-300 lg:pl-5">
                <!-- Facebook Link -->
                <a href="https://www.facebook.com/taphoacutee/" target="_blank" class="flex items-center gap-1 !m-0">
                    <font-awesome-icon :icon="['fab', 'facebook']" class="text-blue-600 text-3xl min-w-9" />
                    <span class="text-base lg:text-xl text-bold text-gray-900">Tạp hóa cutee</span>
                </a>
                <!-- TikTok Link -->
                <a href="https://www.tiktok.com/@tiemtaphoanhakem_01" target="_blank" class="flex items-center gap-1 !m-0">
                    <font-awesome-icon :icon="['fab', 'tiktok']" class="text-black text-3xl min-w-9" />
                    <span class="text-base lg:text-xl text-bold text-gray-900">Tiệm tạp hoá nhà kem</span>
                </a>
                <!-- YouTube Link -->
                <a href="https://www.youtube.com/@tiemtaphoanhakem" target="_blank" class="flex items-center gap-1 !m-0">
                    <font-awesome-icon :icon="['fab', 'youtube']" class="text-red-600 text-3xl min-w-9" />
                    <span class="text-base lg:text-xl text-bold text-gray-900">Tiệm tạp hoá nhà kem</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContactPage',
  layout: "Main",
  components: {
  },
}
</script>
