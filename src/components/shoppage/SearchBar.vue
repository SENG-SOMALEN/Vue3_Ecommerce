<template>
  <transition name="search-slide">
    <div v-if="isOpen" class="fixed left-0 right-0 top-16 z-[9999]">
      <div class="bg-neutral-950 border-b border-white/10 shadow-2xl relative w-full">

        <!-- SEARCH BAR -->
        <div
          class="max-w-7xl mx-auto h-16 px-6 lg:px-10 flex items-center justify-between"
        >
          <div class="flex items-center gap-4 w-full">
            <!-- ICON -->
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

            <!-- INPUT -->
            <input
              ref="searchInput"
              v-model.trim="searchQuery"
              @keyup.enter="goToShopWithQuery"
              type="text"
              maxlength="100"
              placeholder="Search products or categories..."
              class="w-full bg-transparent border-0 outline-none text-white placeholder:text-gray-500 text-base font-light"
            />
          </div>

          <!-- CLOSE -->
          <button
            @click="closeSearch"
            class="ml-5 text-gray-400 hover:text-white transition-all duration-300"
          >
            ✕
          </button>
        </div>

        <!-- SUGGESTIONS -->
        <div
          v-if="searchQuery.trim()"
          class="w-full bg-neutral-950 border-t border-white/5 absolute left-0 right-0 z-[9999] shadow-2xl"
        >
          <div
            class="max-w-7xl mx-auto px-6 lg:px-10 py-6 max-h-[60vh] overflow-y-auto space-y-6 text-left"
          >

            <!-- LOADING -->
            <div
              v-if="isLoading"
              class="text-gray-400 text-sm py-2 flex items-center gap-2"
            >
              <span
                class="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              ></span>

              Loading...
            </div>

            <!-- RESULTS -->
            <div v-else>

              <!-- CATEGORY -->
              <div v-if="categorySuggestions.length > 0" class="mb-4">
                <p
                  class="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold"
                >
                  Categories found
                </p>

                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="(cat, index) in categorySuggestions"
                    :key="cat.id || cat._id || index"
                    @click="selectCategory(cat.name || cat.title || cat.category_name)"
                    class="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
                  >
                    <span>📁</span>

                    {{ cat.name || cat.title || cat.category_name }}
                  </button>
                </div>
              </div>

              <!-- PRODUCTS -->
              <div v-if="productSuggestions.length > 0">
                <p
                  class="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold"
                >
                  Products found
                </p>

                <ul class="space-y-1">
                  <li
                    v-for="(product, index) in productSuggestions"
                    :key="product.id || product._id || index"
                    @click="selectProduct(product.id || product._id)"
                    class="text-gray-300 hover:text-white cursor-pointer py-2.5 px-3 rounded hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5"
                  >
                    <div class="flex items-center gap-3">
                      <span class="text-gray-500 text-sm">📦</span>

                      <span class="font-light text-sm">
                        {{
                          product.title ||
                          product.name ||
                          product.product_name
                        }}
                      </span>
                    </div>

                    <span
                      v-if="product.category"
                      class="text-[10px] bg-white/10 text-gray-400 px-2 py-0.5 rounded uppercase"
                    >
                      {{
                        typeof product.category === "object"
                          ? (
                              product.category.name ||
                              product.category.title
                            )
                          : product.category
                      }}
                    </span>
                  </li>
                </ul>
              </div>

              <!-- EMPTY -->
              <div
                v-if="
                  categorySuggestions.length === 0 &&
                  productSuggestions.length === 0
                "
                class="text-gray-500 text-sm py-4 text-center"
              >
                No results found for "{{ searchQuery }}"
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';

import { product_Data } from '../../api/ProductApi';
import { categories_data } from '../../api/CategoriesApi';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const router = useRouter();

const searchInput = ref(null);
const searchQuery = ref('');

const productSuggestions = ref([]);
const categorySuggestions = ref([]);

const isLoading = ref(false);

let debounceTimeout = null;

/* -----------------------------
   CLEAN DATA
----------------------------- */
const cleanData = (res) => {
  if (!res) return [];

  if (Array.isArray(res)) return res;

  if (res.data) {
    if (Array.isArray(res.data)) {
      return res.data;
    }

    if (res.data.data && Array.isArray(res.data.data)) {
      return res.data.data;
    }

    const possibleArray = Object.values(res.data).find((val) =>
      Array.isArray(val)
    );

    if (possibleArray) {
      return possibleArray;
    }
  }

  return [];
};

/* -----------------------------
   WATCH SEARCH
----------------------------- */
watch(searchQuery, (newQuery) => {
  clearTimeout(debounceTimeout);

  if (!newQuery.trim()) {
    productSuggestions.value = [];
    categorySuggestions.value = [];
    isLoading.value = false;
    return;
  }

  isLoading.value = true;

  debounceTimeout = setTimeout(() => {
    executeSearch();
  }, 350);
});

/* -----------------------------
   SEARCH LOGIC
----------------------------- */
const executeSearch = async () => {
  const query = searchQuery.value.toLowerCase().trim();

  if (!query) {
    isLoading.value = false;
    return;
  }

  try {
    const [prodRes, catRes] = await Promise.all([
      product_Data().catch(() => []),
      categories_data().catch(() => [])
    ]);

    const rawProducts = cleanData(prodRes);
    const rawCategories = cleanData(catRes);

    /* CATEGORY FILTER */
    categorySuggestions.value = rawCategories
      .filter((cat) => {
        const name = (
          cat.name ||
          cat.title ||
          cat.category_name ||
          ''
        )
          .toString()
          .toLowerCase();

        return name.includes(query);
      })
      .slice(0, 5);

    /* PRODUCT FILTER */
    productSuggestions.value = rawProducts
      .filter((prod) => {
        const title = (
          prod.title ||
          prod.name ||
          prod.product_name ||
          prod.productName ||
          ''
        )
          .toString()
          .toLowerCase();

        let catName = '';

        if (prod.category) {
          catName = (
            typeof prod.category === 'object'
              ? (
                  prod.category.name ||
                  prod.category.title ||
                  ''
                )
              : prod.category
          )
            .toString()
            .toLowerCase();
        }

        return (
          title.includes(query) ||
          catName.includes(query)
        );
      })
      .slice(0, 6);

  } catch (error) {
    console.error('Search Logic Error:', error);
  } finally {
    isLoading.value = false;
  }
};

/* -----------------------------
   ENTER SEARCH
----------------------------- */
const goToShopWithQuery = async () => {
  const queryText = searchQuery.value.trim();

  if (!queryText) return;

  await router.push({
    path: '/shop',
    query: {
      search: queryText,
      t: Date.now()
    }
  });

  closeSearch();
};

/* -----------------------------
   SELECT PRODUCT
----------------------------- */
const selectProduct = (id) => {
  if (!id) return;

  router.push({
    name: 'ProductDetail',
    params: { id }
  });

  closeSearch();
};

/* -----------------------------
   SELECT CATEGORY
----------------------------- */
const selectCategory = (categoryName) => {
  if (!categoryName) return;

  router.push({
    path: '/shop',
    query: {
      category: categoryName,
      t: Date.now()
    }
  });

  closeSearch();
};

/* -----------------------------
   CLOSE SEARCH
----------------------------- */
const closeSearch = () => {
  searchQuery.value = '';

  productSuggestions.value = [];
  categorySuggestions.value = [];

  isLoading.value = false;

  emit('close');
};

/* -----------------------------
   AUTO FOCUS
----------------------------- */
watch(
  () => props.isOpen,
  async (newVal) => {
    if (newVal) {
      await nextTick();

      searchInput.value?.focus();
    }
  }
);
</script>

<style scoped>
.search-slide-enter-active,
.search-slide-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.search-slide-enter-from,
.search-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>