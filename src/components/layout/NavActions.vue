<template>
  <div class="flex items-center ml-3 space-x-4 text-gray-300">
    <button @click="$emit('toggle-search')" class="hover:text-white transition-colors p-1" aria-label="Search">
      <svg width="19" height="19" viewBox="0 0 18 18" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5" />
        <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </button>

    <a href="/wishlist" class="hover:text-white transition-colors p-1" aria-label="Wishlist">
      <svg width="19" height="19" viewBox="0 0 18 18" fill="none">
        <path d="M9 15S2 10.5 2 6a4 4 0 017-2.65A4 4 0 0116 6c0 4.5-7 9-7 9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
      </svg>
    </a>

    <a href="/cart" class="hover:text-white transition-colors p-1" aria-label="Cart">
      <svg width="19" height="19" viewBox="0 0 18 18" fill="none">
        <path d="M1 1h2.5l1.8 9h8.4l1.8-5H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="7.5" cy="14.5" r="1" fill="currentColor" />
        <circle cx="13.5" cy="14.5" r="1" fill="currentColor" />
      </svg>
    </a>

    <div class="hidden lg:flex items-center space-x-3 pl-2">
      <button class="hover:text-white transition-colors" aria-label="Account">
        <svg width="19" height="19" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="6" r="3.5" stroke="currentColor" stroke-width="1.5" />
          <path d="M2 16c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
      <BaseButton>sign in</BaseButton>
      <!-- <a href="/login" class="uppercase text-xs font-semibold text-white bg-blue-600 py-1.5 px-4 hover:bg-blue-700 transition duration-300">Sign In</a> -->
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
defineEmits(['toggle-search']);
</script>