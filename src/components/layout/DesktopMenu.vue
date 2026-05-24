<template>
  <ul
    class=" hidden lg:flex items-center space-x-6 font-sans text-[16px] font-semibold text-gray-300 ml-8 lg:flex-grow">

    <li>
      <router-link to="/" class="hover:text-white cursor-pointer transition-colors" active-class="text-white font-bold">
        Home
      </router-link>
    </li>

    <li
      class="hover:text-white cursor-pointer transition-colors relative py-4 text-[13px] font-normal text-[#f5f5f7] tracking-tight"
      @mouseenter="isDropdownShop = true" @mouseleave="isDropdownShop = false">
      <button class="flex items-center focus:outline-none text-[16px] font-semibold  opacity-80 hover:opacity-100 transition-opacity duration-200">
        Shop
        <svg class="ml-1.5 transition-transform duration-300 opacity-60"
          :class="{ 'rotate-180 text-white opacity-100': isDropdownShop }" width="8" height="8" viewBox="0 0 12 12"
          fill="none">
          <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>

      <transition name="dropdown-shop">
        <div v-if="isDropdownShop"
          class="absolute left-0 top-[90%] w-52 bg-[#161617]/90 backdrop-blur-md border border-[#333336] text-[#e8e8ed] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden mt-1 p-1.5">
          <ul class="space-y-0.5">
            <li>
              <router-link to="/shop"
                class="block hover:text-white hover:bg-[#2d2d30] px-3 py-2 rounded-xl transition-all duration-200 text-left font-normal">
                All Products
              </router-link>
            </li>
            <li
              class="hover:text-white hover:bg-[#2d2d30] px-3 py-2 rounded-xl transition-all duration-200 text-left font-normal">
              Electronics</li>
            <li
              class="hover:text-white hover:bg-[#2d2d30] px-3 py-2 rounded-xl transition-all duration-200 text-left font-normal">
              Clothes</li>
            <li
              class="hover:text-white hover:bg-[#2d2d30] px-3 py-2 rounded-xl transition-all duration-200 text-left font-normal">
              Shoes</li>
            <li
              class="hover:text-white hover:bg-[#2d2d30] px-3 py-2 rounded-xl transition-all duration-200 text-left font-normal">
              Furniture</li>
          </ul>
        </div>
      </transition>
    </li>

    <li>
      <router-link to="/about" class="hover:text-white cursor-pointer transition-colors"
        active-class="text-white font-bold">About</router-link>
    </li>
    <li>
      <router-link to="/contact" class="hover:text-white cursor-pointer transition-colors"
        active-class="text-white font-bold">Contact Us</router-link>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'; // 3. ត្រូវតែ import RouterLink ជានិច្ចដើម្បីកុំឱ្យ Error

const isDropdownShop = ref(false);
</script>

<style scoped>
/* dropdown shop style */
.dropdown-shop-enter-active,
.dropdown-shop-leave-active {
  transition: opacity 0.2s ease, max-height 0.25s ease;
  max-height: 200px;
  /* បង្កើនកម្ពស់បន្តិចដើម្បីកុំឱ្យបាំងអក្សរពេលដូរមកប្រើ router-link */
  overflow: hidden;
}

.dropdown-shop-enter-from,
.dropdown-shop-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>