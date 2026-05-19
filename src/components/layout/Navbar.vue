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
          <button @click="isMenuOpen = !isMenuOpen" class="text-white p-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <SearchBar :is-open="isSearchOpen" @close="isSearchOpen = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import NavLogo from './NavLogo.vue';
import DesktopMenu from './DesktopMenu.vue';
import NavActions from './NavActions.vue';
import SearchBar from './SearchBar.vue';

const isSearchOpen = ref(false);
const isMenuOpen = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
</script>