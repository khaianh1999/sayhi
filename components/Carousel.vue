<template>
    <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-1 lg:gap-[10px] mb-4 lg:mb-8">
        <div class="col-span-1 md:col-span-4 lg:col-span-6">
            <div class="w-full overflow-hidden">
                <client-only>
                    <v-carousel
                        :items="1"
                        :autoplay="true"
                        :nav="false"
                        :loop="true"
                        :dots="false"
                        :margin="16"
                        :autoplay-hover-pause="true"
                        :autoplay-timeout="5000"
                        :responsive="{
                            0: { items: 1 },
                        }"
                        >
                        <img class="w-full h-full" src="@/assets/images/bannerday.png" alt="img">
                    </v-carousel>
                </client-only>
            </div>
        </div>
        <div class="hidden md:grid col-span-1 md:col-span-2 lg:col-span-2 grid-cols-2 md:grid-cols-1 gap-1 lg:gap-[10px]">
            <div class="_banner _banner_2 w-full overflow-hidden">
            </div>
            <div class="_banner _banner_3 w-full overflow-hidden">
            </div>
        </div>
    </div>


</template>

<script>
export default {

}
</script>
<style lang="css" scoped>
._banner{
    background-size: cover;
    background-position: center;
}
._banner_1 {
    background-image: url('~assets/images/bannerday.png');
}
._banner_2 {
    background-image: url('~assets/images/banner1.png');
}
._banner_3 {
    background-image: url('~assets/images/banner1.png');
}
</style>

