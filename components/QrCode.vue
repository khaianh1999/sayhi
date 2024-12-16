    <template>
        <div id="qrCode" class="hidden bg-white shadow-lg p-6 rounded">
            <img class="max-w-full w-full" :src="generateQRImageUrl()" alt="QR Code Image" />
        </div>
    </template>

<script>
import { nextTick } from "vue";
export default {
    props: {
        bankCode: {
            type: String,
            required: true,
        },
        accountNumber: {
            type: String,
            required: true,
        },
        accountName: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        addInfo: {
            type: String,
            default: "",
        },
        template: {
            type: String,
            default: "UiSZiV7",
        },
    },
    mounted() {

        // this.modalInstance = this.$modal("qrCode", {
        //     enableBackdropClick: true, // Bật đóng modal khi nhấp nền
        //     onShow: () => {
        //         console.log("Modal opened with body scroll disabled");
        //     },
        //     onHide: () => {
        //         console.log("Modal closed with body scroll enabled");
        //     },
        // });
        nextTick(() => {
            this.modalInstance = this.$modal('qrCode', {
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
    methods: {
        generateQRImageUrl() {
            return `https://api.vietqr.io/image/${this.bankCode}-${this.accountNumber
                }-${encodeURIComponent(
                    this.template
                )}.jpg?accountName=${encodeURIComponent(this.accountName)}&amount=${this.amount
                }&addInfo=${encodeURIComponent(this.addInfo)}`;
        },
        showModal() {
            this.modalInstance.show();
        },
        hideModal() {
            this.modalInstance.hide();
        },
    },
};
</script>

<style scoped>
/* Your styles here */
</style>
