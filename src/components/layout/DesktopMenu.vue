<template>
  <ul class="hidden lg:flex items-center space-x-6 font-sans text-[16px] font-semibold text-gray-300 ml-8 lg:flex-grow">
    
    <li>
      <router-link to="/" class="hover:text-white cursor-pointer transition-colors" active-class="text-white font-bold">
        Home
      </router-link>
    </li>

    <li 
      class="hover:text-white cursor-pointer transition-colors relative py-4"
      @mouseenter="isDropdownShop = true" 
      @mouseleave="isDropdownShop = false"
    >
      <button class="flex items-center focus:outline-none">
        Shop
        <svg 
          class="ml-1 transition-transform duration-200"
          :class="{ 'rotate-180': isDropdownShop }" 
          width="10" height="10" 
          viewBox="0 0 12 12" 
          fill="none"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>

      <transition name="dropdown-shop">
        <div v-if="isDropdownShop" class="absolute left-0 top-full w-48 bg-black border border-gray-800 text-gray-300 rounded-b-md shadow-xl z-50">
          <ul class="space-y-1 py-2 px-2">
            <li>
              <router-link to="/shop" class="block hover:text-white hover:bg-gray-900 px-3 py-2 rounded transition-colors">
                All Product
              </router-link>
            </li>
            <li class="hover:text-white hover:bg-gray-900 px-3 py-2 rounded transition-colors">Electronics</li>
            <li class="hover:text-white hover:bg-gray-900 px-3 py-2 rounded transition-colors">Clothes</li>
            <li class="hover:text-white hover:bg-gray-900 px-3 py-2 rounded transition-colors">Shoes</li>
            <li class="hover:text-white hover:bg-gray-900 px-3 py-2 rounded transition-colors">Furniture</li>
          </ul>
        </div>
      </transition>
    </li>

    <li class="hover:text-white cursor-pointer transition-colors">About</li>
    <li class="hover:text-white cursor-pointer transition-colors">Contact</li>
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
  max-height: 200px; /* បង្កើនកម្ពស់បន្តិចដើម្បីកុំឱ្យបាំងអក្សរពេលដូរមកប្រើ router-link */
  overflow: hidden;
}

.dropdown-shop-enter-from,
.dropdown-shop-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>