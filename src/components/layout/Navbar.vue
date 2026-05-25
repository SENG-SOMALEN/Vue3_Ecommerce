<template>
  <header class="sticky top-0 z-50 border-b border-neutral-800 bg-[#161617]/90 backdrop-blur-2xl transition-colors duration-300">
    <nav class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-16">

        <div class="flex items-center gap-10">
          <router-link to="/" class="flex items-center group">
            <svg width="30" height="30" viewBox="0 0 28 28" fill="none"
              class="text-white transition duration-300 group-hover:opacity-80">
              <rect x="0" y="0" width="13" height="13" fill="currentColor" />
              <rect x="15" y="0" width="13" height="13" fill="currentColor" opacity="0.4" />
              <rect x="0" y="15" width="13" height="13" fill="currentColor" opacity="0.4" />
              <rect x="15" y="15" width="13" height="13" fill="currentColor" />
            </svg>

            <span class="ml-3 text-xl font-semibold tracking-tight text-white">
              E-Com
            </span>
          </router-link>

          <div class="hidden lg:block">
            <DesktopMenu />
          </div>
        </div>

        <div class="flex items-center gap-5">

          <button @click="toggleSearch"
            class="text-gray-400 hover:text-white transition"
            aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5" />
              <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>

          <router-link to="/wishlist"
            class="relative text-gray-400 hover:text-white transition">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M9 15S2 10.5 2 6a4 4 0 017-2.65A4 4 0 0116 6c0 4.5-7 9-7 9z"
                stroke="currentColor" stroke-width="1.5" />
            </svg>

            <span v-if="wishListStore.wishList.length"
              class="absolute -top-2 -right-2 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-red-600 text-white text-[10px]">
              {{ wishListStore.wishList.length }}
            </span>
          </router-link>

          <router-link to="/cart"
            class="relative text-gray-400 hover:text-white transition">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1h2.5l1.8 9h8.4l1.8-5H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="7.5" cy="14.5" r="1" fill="currentColor" />
              <circle cx="13.5" cy="14.5" r="1" fill="currentColor" />
            </svg>

            <span v-if="cartStore.carts?.length"
              class="absolute -top-2 -right-2 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-red-600 text-white text-[10px]">
              {{ cartStore.carts.length }}
            </span>
          </router-link>

          <router-link to="/user" class="hidden lg:block text-gray-400 hover:text-white">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5" />
              <path d="M2 16c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </router-link>

          <router-link to="/register" class="hidden lg:block">
            <button class="px-5 py-2 rounded-xl bg-white text-black font-medium text-sm hover:bg-gray-200 transition">
              Sign In
            </button>
          </router-link>

          <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-white">
            <svg v-if="isMenuOpen" width="28" height="28" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" />
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" />
            </svg>
            <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none">
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" />
            </svg>
          </button>

        </div>
      </div>
    </nav>

    <transition name="mobile-menu">
      <div v-if="isMenuOpen"
        class="lg:hidden absolute left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-neutral-800">
        <ul class="flex flex-col px-6 py-6 space-y-5 text-gray-300 font-medium">
          <li><router-link to="/" @click="isMenuOpen=false" class="hover:text-white">Home</router-link></li>
          <li><router-link to="/shop" @click="isMenuOpen=false" class="hover:text-white">Shop</router-link></li>
          <li><router-link to="/about" @click="isMenuOpen=false" class="hover:text-white">About</router-link></li>
          <li><router-link to="/contact" @click="isMenuOpen=false" class="hover:text-white">Contact</router-link></li>
          <hr class="mb-6">
          <li>
            <router-link to="/register">
              <button class="w-full px-5 py-2 rounded-xl bg-white text-black font-medium text-sm hover:bg-gray-200 transition">
                Sign In
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>

    <SearchBar :is-open="isSearchOpen" @close="isSearchOpen=false" />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../../stores/cart';
import { useWishlistStore } from '../../stores/wishlist';

import DesktopMenu from './DesktopMenu.vue';
import SearchBar from './SearchBar.vue';

const isSearchOpen = ref(false);
const isMenuOpen = ref(false);

const cartStore = useCartStore();
const wishListStore = useWishlistStore();

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) isMenuOpen.value = false;
};
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>