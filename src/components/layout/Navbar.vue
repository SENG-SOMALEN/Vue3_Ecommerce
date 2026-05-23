<template>
  <header class="bg-black text-white sticky top-0 z-50 border-b border-gray-800">
    <nav class="font-sans max-w-6xl mx-auto px-6">
      <div class="flex justify-between items-center h-14 relative z-50 bg-black">
        
        <div class="flex items-center">
          <NavLogo />
          <DesktopMenu />
        </div>

        <NavActions @toggle-search="toggleSearch" />

        <div class="flex-grow flex justify-end lg:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white p-1 focus:outline-none">
            <svg v-if="isMenuOpen" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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

    <transition name="mobile-menu">
      <div v-if="isMenuOpen" class="lg:hidden bg-black border-b border-gray-800 px-6 py-4 absolute w-full left-0 z-40 shadow-xl">
        <ul class="flex flex-col space-y-4 font-semibold text-gray-300">
          <li>
            <router-link to="/" class="hover:text-white block py-1" @click="isMenuOpen = false">Home</router-link>
          </li>
          <li>
            <router-link to="/shop" class="hover:text-white block py-1" @click="isMenuOpen = false">Shop</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-white block py-1" @click="isMenuOpen = false">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-white block py-1" @click="isMenuOpen = false">Contact</router-link>
          </li>
        </ul>
      </div>
    </transition>

    <SearchBar :is-open="isSearchOpen" @close="isSearchOpen = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'; // កុំភ្លេច import RouterLink បើមានប្រើក្នុង Mobile Menu
import NavLogo from './NavLogo.vue';
import DesktopMenu from './DesktopMenu.vue';
import NavActions from './NavActions.vue';
import SearchBar from './SearchBar.vue';

const isSearchOpen = ref(false);
const isMenuOpen = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) isMenuOpen.value = false; // បិទ Mobile menu បើបើក Search
};
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