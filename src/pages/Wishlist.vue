<template>
  <section class="bg-[#f5f5f7] min-h-screen py-16 font-sans text-[#1d1d1f]">
    <div class="max-w-4xl mx-auto px-6">
      
      <header class="border-b border-[#d2d2d7] pb-8 mb-10">
        <h1 class="text-4xl font-semibold tracking-tight md:text-5xl">Saved Items</h1>
      </header>

      <div v-if="wishListStore.wishList.length === 0" class="text-center py-20 bg-white rounded-2xl border border-[#e5e5ea] p-8">
        <h2 class="text-2xl font-semibold tracking-tight mb-2">Your Saved Items list is empty.</h2>
        <p class="text-[#86868b] max-w-md mx-auto text-sm md:text-base mb-8">
          Items you save while shopping will appear here. Tap the heart icon on any product to save it for later.
        </p>
        <button class="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
          Continue Shopping
        </button>
      </div>

      <div v-else>
        <div class="space-y-6 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin">
          <div 
            v-for="item in wishListStore.wishList" 
            :key="item.id" 
            class="bg-white rounded-2xl border border-[#e5e5ea] p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-all"
          >
            <div class="flex items-center gap-6 w-full sm:w-auto">
              <div class="w-24 h-24 md:w-32 md:h-32 bg-[#f5f5f7] rounded-xl flex items-center justify-center overflow-hidden p-2 flex-shrink-0">
                <img :src="item.images?.[0]" :alt="item.name" class="max-w-full max-h-full object-contain" />
              </div>
              <div class="flex-1">
                <h3 class="text-lg md:text-xl font-semibold tracking-tight text-[#1d1d1f] hover:text-[#0071e3] cursor-pointer">
                  {{ item.name || item.title }}
                </h3>
                <p class="text-sm text-[#86868b] mt-1">In Stock and ready to ship.</p>
                
                <button 
                  @click="wishListStore.removeItem(item.id)" 
                  class="text-sm text-[#0071e3] hover:underline mt-4 block cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>

            <div class="flex sm:flex-col items-end justify-between sm:justify-center gap-4 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-[#e5e5ea]">
              <span class="text-lg md:text-xl font-semibold text-[#1d1d1f]">
                ${{ item.price }}.00
              </span>
              <button @click="useCart.addToCart(item)" class="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors w-full sm:w-auto text-center">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// === use store cart
import { useCartStore } from '../stores/cart';
const useCart = useCartStore();
// === use Store wishlsit
import { useWishlistStore } from '../stores/wishlist';
const wishListStore = useWishlistStore();
</script>

<style scoped>

.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #d2d2d7;
  border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #86868b;
}
</style>