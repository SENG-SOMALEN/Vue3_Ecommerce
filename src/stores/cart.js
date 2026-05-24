import { defineStore } from "pinia";

// store cart
export const useCartStore = defineStore('cart', {
    // state or variable
    state: () => ({
        carts: []
    }),
    getters: {
        totalPrice: (state) => {
            // កែសម្រួល៖ បន្ថែម , 0 នៅខាងចុង ដើម្បីកុំឱ្យគាំងអេក្រង់ពេលកន្ត្រកទទេ
            return state.carts.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        }
    },
    // function or method
    actions: {

        // == add item 
        addToCart(product){
            // check double product or exist
            const existItem = this.carts.find(item => item.id === product.id);

            if (existItem) {
                // If there is, increase the quantity by 1.
                existItem.quantity++;
            } else {
                // If it doesn't exist yet, push it in by adding key quantity = 1.
                this.carts.push({...product, quantity: 1});
            }
        },

        // == decrement cart or remove item
        removeFromCart(id) {
            // 💡 កែសម្រួល៖ ប្តូរពី item.id !== item.id មកជា item.id !== id វិញ
            this.carts = this.carts.filter(item => item.id !== id);
        },

        // == clear cart all
        clearCart() {
            this.carts = [];
        }
    },
});