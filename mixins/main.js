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
        },
        setItemsHeartInLocalStorage (item) {
            let listItem = this.getItemsHeartInLocalStorage();
            if (listItem.length) { // Có rồi thì push
                localStorage.setItem("myhearts", JSON.stringify({data: listItem.concat(item)}));
            } else { // Chưa có thì tạo
                localStorage.setItem("myhearts", JSON.stringify({data : [item]}));
            }
            this.$store.dispatch("SET_MY_HEARTS"); // Set lại giá trị trong store
        },
        getItemsHeartInLocalStorage () {
            let myhearts = localStorage.getItem("myhearts");
            return myhearts ? JSON.parse(myhearts).data : [];
        },

        setItemsBagInLocalStorage (item) {
            let listItem = this.getItemsBagInLocalStorage();
            if (listItem.length) { // Có rồi thì push
                localStorage.setItem("mybag", JSON.stringify({data: listItem.concat(item)}));
            } else { // Chưa có thì tạo
                localStorage.setItem("mybag", JSON.stringify({data : [item]}));
            }
            this.$store.dispatch("SET_MY_BAG"); // Set lại giá trị trong store
        },
        getItemsBagInLocalStorage () {
            let mybag = localStorage.getItem("mybag");
            return mybag ? JSON.parse(mybag).data : [];
        },

        getLocalStorageWithExpiry () {
            const itemStr = localStorage.getItem(key)
            // if the item doesn't exist, return null
            if (!itemStr) {
                return null
            }
            const item = JSON.parse(itemStr)
            const now = new Date()
            // compare the expiry time of the item with the current time
            if (now.getTime() > item.expiry) {
                // If the item is expired, delete the item from storage
                // and return null
                localStorage.removeItem(key)
                return null
            }
            return item.value
        },
        setLocalStorageWithExpiry(key, value, ttl = 86400000) {// default 1day
            const now = new Date()
            const item = {
                value: value,
                expiry: now.getTime() + ttl,
            }
            localStorage.setItem(key, JSON.stringify(item))
        }
        
    },
};