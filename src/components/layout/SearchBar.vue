<template>
  <transition name="search-slide">
    <div v-if="isOpen" class="absolute left-0 right-0 top-16 z-50">

      <div class="bg-black/80 backdrop-blur-2xl border-b border-white/10">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col">

          <!-- SEARCH BAR -->
          <div class="h-16 flex items-center gap-4">

            <!-- Icon -->
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
              class="text-gray-400 flex-shrink-0">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>

            <!-- Input -->
            <input
              ref="searchInput"
              v-model="query"
              type="text"
              maxlength="100"
              placeholder="Search products, categories..."
              class="w-full bg-transparent border-0 outline-none text-white placeholder:text-gray-500 text-base font-light"
            />

            <!-- Close -->
            <button @click="$emit('close')" class="text-gray-400 hover:text-white">
              ✕
            </button>

          </div>

          <!-- SUGGESTIONS -->
          <div v-if="filteredResults.length" class="pb-4 max-h-72 overflow-y-auto">

            <p class="text-gray-500 text-xs mb-2">Suggestions</p>

            <ul class="space-y-2">

              <li
                v-for="item in filteredResults"
                :key="item.id + item.type"
                @click="goToItem(item)"
                class="text-white/80 hover:text-white cursor-pointer transition"
              >
                <div class="flex items-center justify-between">

                  <span>
                    {{ item.title || item.name }}
                  </span>

                  <span class="text-xs text-gray-500">
                    {{ item.type }}
                  </span>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </div>

    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { product_Data } from '../../api/ProductApi'
import { categories_data } from '../../api/CategoriesApi'

const router = useRouter()

const props = defineProps({
  isOpen: Boolean
})

defineEmits(['close'])

const searchInput = ref(null)
const query = ref('')

const products = ref([])
const categories = ref([])

/* =========================
   LOAD DATA
========================= */
onMounted(async () => {
  try {
    products.value = await product_Data()
    categories.value = await categories_data()
  } catch (err) {
    console.error('API load error:', err)
  }
})

/* =========================
   FOCUS INPUT
========================= */
watch(() => props.isOpen, async (val) => {
  if (val) {
    await nextTick()
    searchInput.value?.focus()
  } else {
    query.value = ''
  }
})

/* =========================
   SEARCH
========================= */
const filteredResults = computed(() => {
  if (!query.value.trim()) return []

  const q = query.value.toLowerCase()

  const productMatches = (products.value || [])
    .filter(p => p.title?.toLowerCase().includes(q))
    .slice(0, 5)
    .map(p => ({
      id: p.id,
      title: p.title,
      type: 'product'
    }))

  const categoryMatches = (categories.value || [])
    .filter(c => c.name?.toLowerCase().includes(q))
    .slice(0, 3)
    .map(c => ({
      id: c.id,
      name: c.name,
      type: 'category'
    }))

  return [...productMatches, ...categoryMatches]
})

/* =========================
   NAVIGATION FIX
========================= */
const goToItem = (item) => {

  if (item.type === 'product') {
    router.push({
      name: 'ProductDetail',
      params: { id: item.id }
    })
  }

  if (item.type === 'category') {
    router.push({
      name: 'Shop',
      query: { category: item.id }
    })
  }

  // close search after click
  emit('close')
}
</script>