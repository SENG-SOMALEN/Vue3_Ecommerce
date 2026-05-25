<template>
    <section class="max-w-6xl mx-auto px-6 lg:h-[calc(100vh-2rem)] lg:overflow-hidden">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-stretch mt-5 lg:h-full">
            
            <FilterSidebar @changeCategories="handleCategories"
                            @changePrice="handlePrice" />
                            
            <div class="flex-1 w-full lg:h-full lg:overflow-y-auto pb-20 pr-1">
                <SearchBar @searchCategories="handleSearch" />

                <section class="max-w-6xl mx-auto px-6">
                    <div class="mt-5 mb-6 flex flex-col gap-4 rounded-3xl bg-stone-100 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between border border-stone-200">
                        <div class="space-y-1">
                            <p class="text-xs text-stone-500 font-medium">Showing</p>
                            <h2 class="text-xl font-bold text-stone-900">{{ filteredProducts.length }} products</h2>
                        </div>

                        <div class="flex flex-wrap items-center gap-3 text-sm text-stone-600">
                            <div class="flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-stone-200 shadow-sm">
                                <label for="sortSelect" class="font-medium text-stone-500">Sort:</label>
                                <select id="sortSelect" v-model="sortOrder"
                                    class="bg-transparent font-semibold text-stone-900 focus:outline-none cursor-pointer pr-2">
                                    <option value="default">Recommended</option>
                                    <option value="low">Price: Low to High</option>
                                    <option value="high">Price: High to Low</option>
                                </select>
                            </div>

                            <span class="rounded-full bg-white px-4 py-2 border border-stone-200 shadow-sm capitalize">
                                Category: <span class="font-bold text-stone-900">{{ selectCategory }}</span>
                            </span>
                        </div>
                    </div>
                </section>

                <ProductCard :items="paginatedProducts" :isLoading="isLoading" />

                <div class="mt-8 mb-12">
                    <Pagination 
                        v-if="totalPages > 1"
                        :currentPage="currentPage" 
                        :totalPages="totalPages" 
                        @pageChange="handlePageChange" 
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { product_Data } from '../api/ProductApi';
import ProductCard from '../components/shoppage/ProductCard.vue';
import FilterSidebar from '../components/shoppage/FilterSidebar.vue';
import SearchBar from '../components/shoppage/SearchBar.vue';
import Pagination from '../components/shoppage/Pagination.vue';

import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';

const route = useRoute();

const products = ref([]);
const isLoading = ref(true);

const selectCategory = ref("all");
const searchQuery = ref("");
const sortOrder = ref("default"); 
const filterPrice = ref(100);

const currentPage = ref(1);
const itemsPerPage = ref(9); 

const handlePrice = (price) => {
    filterPrice.value = price; 
};

// === មុខងារពិនិត្យ និងចាប់យកទិន្នន័យពី URL Query Parameters ===
const checkUrlQuery = () => {
    // ចាប់យក Category ពី URL
    if (route.query.category) {
        selectCategory.value = String(route.query.category);
    } else {
        selectCategory.value = "all";
    }

    // ចាប់យកពាក្យគន្លឹះស្វែងរកពី URL (ភ្ជាប់មកពី Search component)
    if (route.query.search) {
        searchQuery.value = String(route.query.search);
    } else {
        searchQuery.value = "";
    }
};

onMounted(async () => {
    checkUrlQuery(); // ពិនិត្យ URL ពេលទំព័រត្រូវបាន Load ភ្លាម
    
    try {
        isLoading.value = true;
        const response = await product_Data();
        
        // === 💡 ចំណុចកែប្រែការពារការចាប់យក Array ខុសទម្រង់ (ដូចក្នុង search.vue) ===
        if (response && Array.isArray(response)) {
            products.value = response;
        } else if (response && response.data && Array.isArray(response.data)) {
            products.value = response.data;
        } else {
            products.value = [];
        }
    }
    catch (error) {
        console.error("Error fetching products: ", error);
    }
    finally {
        isLoading.value = false;
    }
});

const handleCategories = (category) => {
    selectCategory.value = category;
};

const handleSearch = (text) => {
    searchQuery.value = text;
};

// === តាមដានរាល់ពេល URL Query ដូរ (ដោះស្រាយបញ្ហាពេលចុច Enter ពីប្រអប់ស្វែងរក) ===
watch(() => [route.query.category, route.query.search], () => {
    checkUrlQuery();
});

watch([selectCategory, searchQuery, filterPrice], () => {
    currentPage.value = 1;
});

// === មុខងារចម្រោះផលិតផល (Computed) ===
const filteredProducts = computed(() => {
    let result = products.value.filter(product => {
        const productName = product.title || product.name || "";
        
        const productCatId = typeof product.category === 'object' ? product.category?.id : product.category;
        const productCatName = typeof product.category === 'object' ? product.category?.name : product.category;

        // ចម្រោះតាមប្រភេទ Category
        const matchCategory = selectCategory.value === "all" ||
            (productCatId && String(productCatId).toLowerCase() === String(selectCategory.value).toLowerCase()) ||
            (productCatName && String(productCatName).toLowerCase() === String(selectCategory.value).toLowerCase());

        // ចម្រោះតាមពាក្យគន្លឹះស្វែងរក
        const matchSearch = productName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                            (productCatName && String(productCatName).toLowerCase().includes(searchQuery.value.toLowerCase()));

        // ចម្រោះតាមតម្លៃ
        const matchPrice = Number(product.price ?? 0) <= Number(filterPrice.value);

        return matchCategory && matchSearch && matchPrice;
    });

    // រៀបលំដាប់តម្លៃ តូចទៅធំ ឬ ធំទៅតូច
    if (sortOrder.value === "low") {
        return [...result].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } 
    else if (sortOrder.value === "high") {
        return [...result].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    return result;
});

const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / itemsPerPage.value);
});

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredProducts.value.slice(start, end);
});

const handlePageChange = (page) => {
    currentPage.value = page;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>