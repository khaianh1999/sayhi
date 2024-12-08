export default {
    data() {
        return {
        };
    },
    computed: {
    },

    beforeMount() {
    },

    methods: {
        convertMoney(amount) {
            if (typeof amount !== "number") {
                throw new Error("Input must be a number");
            }
            return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace("₫", "đ");
        }
        
    },
};