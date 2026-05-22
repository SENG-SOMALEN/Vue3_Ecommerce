<template>
  <div class="flex flex-wrap items-center justify-center gap-3 rounded-3xl bg-white p-4 shadow-sm border border-stone-100">
    <button
      type="button"
      class="rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="$emit('pageChange', currentPage - 1)"
    >
      Prev
    </button>

    <button
      v-for="page in pagesToShow"
      :key="page"
      type="button"
      class="rounded-full px-4 py-2 text-sm font-semibold transition"
      :class="page === currentPage ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'"
      @click="page !== '...' && $emit('pageChange', page)"
      :disabled="page === '...'"
    >
      {{ page }}
    </button>

    <button
      type="button"
      class="rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="$emit('pageChange', currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// 💡 កែប្រែទី១៖ ប្តូរមកប្រើ defineProps ឱ្យបានត្រឹមត្រូវដើម្បីទទួលទិន្នន័យពី shop.vue
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

// 💡 កែប្រែទី២៖ ប្រកាស Emit តែមួយដងគត់សម្រាប់ផ្ញើព្រឹត្តិការណ៍ត្រឡប់ទៅវិញ
const emit = defineEmits(['pageChange'])

// Logic គណនាបង្ហាញលេខទំព័រ (រក្សាទុកល្អដដែល)
const pagesToShow = computed(() => {
  const pages = []
  const lower = Math.max(1, props.currentPage - 2)
  const upper = Math.min(props.totalPages, props.currentPage + 2)
  
  for (let i = lower; i <= upper; i += 1) {
    pages.push(i)
  }
  
  if (pages[0] !== 1) {
    pages.unshift(1)
    if (pages[1] !== 2) pages.splice(1, 0, '...')
  }
  
  if (pages[pages.length - 1] !== props.totalPages) {
    if (pages[pages.length - 1] !== props.totalPages - 1) pages.push('...')
    pages.push(props.totalPages)
  }
  
  return pages
})
</script>