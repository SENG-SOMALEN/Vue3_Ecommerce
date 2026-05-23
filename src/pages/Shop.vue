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
// 💡 កែប្រែ៖ បន្ថែម watch ពី Vue មកជាមួយ
import { computed, onMounted, ref, watch } from 'vue';

const products = ref([]);
const isLoading = ref(true);

const selectCategory = ref("all");
const searchQuery = ref("");
const sortOrder = ref("default"); 
const filterPrice = ref(100);

// 💡 បន្ថែម៖ States សម្រាប់ Pagination
const currentPage = ref(1);
const itemsPerPage = ref(9); // បង្ហាញ ១២ ផលិតផលក្នុងមួយទំព័រ

const handlePrice = (price) => {
    filterPrice.value = price; 
};

onMounted(async () => {
    try {
        isLoading.value = true;
        const response = await product_Data();
        if (response && Array.isArray(response)) {
            products.value = response;
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

// 💡 បន្ថែម៖ បើអ្នកប្រើប្រាស់ប្តូរ Category, វាយ Search ឬរំកិលតម្លៃ ត្រូវរុញទៅទំព័រទី ១ វិញភ្លាម
watch([selectCategory, searchQuery, filterPrice], () => {
    currentPage.value = 1;
});

// ការ Filter និង Sort (បានកែសម្រួលត្រង់ matchSearch)
const filteredProducts = computed(() => {
    let result = products.value.filter(product => {
        const productName = product.title || product.name || "";
        const productCatValue = typeof product.category === 'object' ? product.category?.name : product.category;

        // 1. Filter តាម Category Sidebar
        const matchCategory = selectCategory.value === "all" ||
            (productCatValue && String(productCatValue).toLowerCase() === String(selectCategory.value).toLowerCase());

        // 2. Filter តាមការវាយ Search (ឆែកទាំងឈ្មោះ និង Category)
        const matchSearch = productName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                            (productCatValue && String(productCatValue).toLowerCase().includes(searchQuery.value.toLowerCase()));

        // 3. Filter តាមតម្លៃ
        const matchPrice = Number(product.price ?? 0) <= Number(filterPrice.value);

        return matchCategory && matchSearch && matchPrice;
    });

    if (sortOrder.value === "low") {
        return result.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    } 
    else if (sortOrder.value === "high") {
        return result.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    }

    return result;
});
// 💡 បន្ថែម៖ គណនាចំនួនទំព័រសរុប (ផ្អែកលើផលិតផលដែលចម្រោះរួច)
const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / itemsPerPage.value);
});

// 💡 បន្ថែម៖ កាត់យកផលិតផលទៅបង្ហាញតាមទំព័រនីមួយៗ (Slice)
const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredProducts.value.slice(start, end);
});

// 💡 បន្ថែម៖ Function សម្រាប់ប្តូរទំព័រ និងរំកិលអេក្រង់ទៅលើវិញបែប Smooth
const handlePageChange = (page) => {
    currentPage.value = page;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>