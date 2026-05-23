<template>
  <transition name="search-slide">
    <div
      v-if="isOpen"
      class="absolute left-0 right-0 top-16 z-40"
    >
      <!-- SAME STYLE AS NAVBAR -->
      <div class="
          bg-black/80
          backdrop-blur-2xl
          border-b border-white/10
        "
      >
        <div
          class="
            max-w-7xl mx-auto
            h-16
            px-6 lg:px-10
            flex items-center justify-between
          "
        >
          <!-- Search -->
          <div class="flex items-center gap-4 w-full">

            <!-- Icon -->
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              class="text-gray-400 flex-shrink-0"
            >
              <circle
                cx="8"
                cy="8"
                r="5.5"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M12.5 12.5L16 16"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <!-- Input -->
            <input
              ref="searchInput"
              type="text"
              maxlength="100"
              placeholder="Search products, categories..."
              class="
                w-full
                bg-transparent
                border-0
                outline-none
                text-white
                placeholder:text-gray-500
                text-base
                font-light
              "
            />
          </div>

          <!-- Close -->
          <button
            @click="$emit('close')"
            class="
              ml-5
              text-gray-400
              hover:text-white
              transition-all duration-300
            "
          >
            ✕
          </button>
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