<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">
    <nav class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-16">

        <!-- LEFT -->
        <div class="flex items-center gap-10 ">
          <!-- Logo -->
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

          <!-- Desktop Menu -->
          <div class="hidden lg:block">
            <DesktopMenu />
          </div>
        </div>

        <!-- RIGHT -->
        <div class="flex items-center gap-5">

          <!-- Search -->
          <button @click="toggleSearch" class="text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5" />
              <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>

          <!-- Wishlist -->
          <router-link to="/wishlist" class="group relative text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
              class="group-hover:scale-110 transition-transform duration-300">
              <path d="M9 15S2 10.5 2 6a4 4 0 017-2.65A4 4 0 0116 6c0 4.5-7 9-7 9z" stroke="currentColor"
                stroke-width="1.5" stroke-linejoin="round" />
            </svg>

            <span v-if="wishListStore.wishList.length > 0"
              class="absolute -top-2 -right-2 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-semibold shadow-md pointer-events-none">
              {{ wishListStore.wishList.length }}
            </span>
          </router-link>

          <!-- Cart -->
          <router-link to="/cart"
            class="relative rounded-full text-gray-400 hover:text-white transition-all duration-300 group"
            aria-label="Cart">
            <!-- cart icon -->
            <div class="relative">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
                class="group-hover:scale-110 transition-transform duration-300">
                <path d="M1 1h2.5l1.8 9h8.4l1.8-5H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <circle cx="7.5" cy="14.5" r="1" fill="currentColor" />
                <circle cx="13.5" cy="14.5" r="1" fill="currentColor" />
              </svg>

              <!-- badge -->
              <span v-if="cartStore.carts && cartStore.carts.length > 0"
                class="absolute -top-2 -right-2 min-w-4 h-4 px-1 flex items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-semibold shadow-md">
                {{ cartStore.carts.length }}
              </span>
            </div>
          </router-link>

          <!-- Desktop Auth -->
          <div class="hidden lg:flex items-center gap-4 ml-2">
            <button class="text-gray-400 hover:text-white transition-all duration-300" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5" />
                <path d="M2 16c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" />
              </svg>
            </button>

            <button
              class="px-5 py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all duration-300">
              Sign In
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-white">
            <svg v-if="isMenuOpen" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>

            <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- MOBILE MENU -->
    <transition name="mobile-menu">
      <div v-if="isMenuOpen"
        class="lg:hidden absolute left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10">
        <ul class="flex flex-col px-6 py-6 space-y-5 text-gray-300 font-medium">
          <li>
            <router-link to="/" class="hover:text-white transition" @click="isMenuOpen = false">
              Home
            </router-link>
          </li>

          <li>
            <router-link to="/shop" class="hover:text-white transition" @click="isMenuOpen = false">
              Shop
            </router-link>
          </li>

          <li>
            <router-link to="/about" class="hover:text-white transition" @click="isMenuOpen = false">
              About
            </router-link>
          </li>

          <li>
            <router-link to="/contact" class="hover:text-white transition" @click="isMenuOpen = false">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </transition>

    <!-- Search -->
    <SearchBar :is-open="isSearchOpen" @close="isSearchOpen = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// == use store import
import { useCartStore } from '../../stores/cart';
// use store wishlist
import { useWishlistStore } from '../../stores/wishlist';

// Imports Components ដែលនៅសល់
import DesktopMenu from './DesktopMenu.vue';
import SearchBar from './SearchBar.vue';
import BaseButton from '../ui/BaseButton.vue'; // ថែមការ import នេះសម្រាប់ប្រើក្នុង Actions ខាងលើ

const isSearchOpen = ref(false);
const isMenuOpen = ref(false);

// === logic search bar
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) isMenuOpen.value = false;
};

// === usr sote
const cartStore = useCartStore();

// === use wishlist
const wishListStore = useWishlistStore();
</script>


<style scoped>
/* mobile menu transition style */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease-out;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>