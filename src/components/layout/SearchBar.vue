<template>
  <transition name="search-slide">
    <div v-if="isOpen" class="navbar__search-wrapper absolute left-0 right-0 top-14 z-40">
      <div class="navbar__search-bar bg-black border-t border-gray-800 flex items-center shadow-lg w-full h-14">
        <div class="w-full max-w-6xl mx-auto flex items-center justify-between px-6">
          <div class="flex items-center space-x-4 w-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="text-gray-400 flex-shrink-0">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5" />
              <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <input 
              ref="searchInput"
              class="border-0 outline-none bg-transparent text-base text-white placeholder-gray-400 font-light w-full" 
              type="text" 
              placeholder="Search products, categories..." 
              maxlength="100"
            >
          </div>
          <button @click="$emit('close')" class="text-gray-400 hover:text-white transition-colors text-sm pl-4 flex-shrink-0">✕</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';

const props = defineProps({
  isOpen: Boolean
});

defineEmits(['close']);

const searchInput = ref(null);

// ដំណើរការការ Focus ទៅលើ Input នៅពេលដែលប្រអប់ស្វែងរកត្រូវបានបើក (isOpen = true)
watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    await nextTick();
    searchInput.value?.focus();
  }
});
</script>

<style scoped>
.navbar__search-wrapper {
  top: 100%;
  margin-top: 0px;
}

/* search style animation */
.search-slide-enter-active,
.search-slide-leave-active {
  transition: opacity 0.2s ease, max-height 0.25s ease;
  max-height: 56px;
  overflow: hidden;
}

.search-slide-enter-from,
.search-slide-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>