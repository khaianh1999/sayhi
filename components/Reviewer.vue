<template>
    <div id="products_best_seller" class="container mx-auto py-4 lg:py-16">
        <client-only>
            <v-carousel
                :items="1"
                :autoplay="true"
                :nav="false"
                :loop="true"
                :dots="false"
                :margin="16"
                :autoplay-hover-pause="true"
                :autoplay-timeout="10000"
                :responsive="{
                    0: { items: 1 },
                }"
                >
                <figure class="w-full px-4 lg:px-0 lg:w-3/4 mx-auto text-center" v-for="i in 5" :key="i">
                    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <blockquote>
                        <p class="text-lg md:text-xl lg:text-2xl italic font-medium text-gray-900">"Sản phẩm chất lượng, đúng với tiêu chí ngon bổ rẻ con tôi rất là thích, tôi sẽ luôn ủng hộ store"</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                        <img class="!w-6 !h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                            <cite class="pe-3 font-medium text-gray-900">GiantBoy</cite>
                            <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Tiemtaphoanhakem</cite>
                        </div>
                    </figcaption>
                </figure>
            </v-carousel>
        </client-only>
        <div class="flex justify-center">
            <form @submit.prevent="" class="w-full md:w-2/3 mt-8 mx-4 xl:mx-auto bg-main p-6 xl:p-12 rounded-tl-[25px] rounded-br-[25px] xl:rounded-tl-[50px] xl:rounded-br-[50px]">
                <label for="chat" class="font-semibold text-base xl:text-xl mb-1 xl:mb-2 block text-gray-900">Gửi phản hồi cho chúng tôi :</label>
                <div class="flex items-center">
                    <input id="chat" rows="1" class="border-gray-100 outline-neutral-100 border-1 focus:border-gray-100 focus:right-0 focus:ring-white block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300" placeholder="Nội dung..."/>
                    <button type="submit" class="inline-flex justify-center p-2 rounded-full cursor-pointer">
                        <svg class="w-5 h-5 rotate-90 rtl:-rotate-90 hover:fill-slate-200 transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                        <span class="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>