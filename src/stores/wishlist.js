import { defineStore } from "pinia";

export const useWishlistStore = defineStore('wishlist', {
    state: () => ({
        wishList: []
    }),

    actions: {
        toggleWishlist(product) {
            if (!product) return;
            // ទាញយក ID ពិតប្រាកដ (មិនថាវាជា id ឬ _id)
            const productId = product.id || product._id;
            
            const index = this.wishList.findIndex(item => {
                const itemId = item.id || item._id;
                return String(itemId) === String(productId);
            });

            if (index > -1) { 
                this.wishList.splice(index, 1);
            } else {
                this.wishList.push(product);
            }
        },

        removeItem(itemId) {
            if (!itemId) return;
            // ធៀបជាមួយទាំង id និង _id របស់ item នីមួយៗ
            this.wishList = this.wishList.filter(item => {
                const idToCheck = item.id || item._id;
                return String(idToCheck) !== String(itemId);
            });
        }
    }
});