<template>
    <section>
        <aside
        
            class="w-full lg:w-72 rounded-3xl p-5 bg-stone-100 lg:self-start lg:sticky lg:top-6 shadow-md border border-stone-200">

            <div class="mb-6">
                <h4 class="font-semibold text-stone-800">Filter</h4>
                <p class="text-xs text-stone-500">Search or filter products by category and price</p>
            </div>

            <!-- scrolling bar categories -->
            <div class="space-y-6 mb-6">
                <h4 class="text-xs uppercase font-medium text-stone-400 tracking-[0.2em]">category</h4>
                <div
                    class="max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent">
                    <ul class="space-y-1">

                        <!-- All Categories -->
                        <li>
                            <button type="button"
                                class="w-full rounded-2xl px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 hover:bg-stone-200"
                                @click="selectCategories('all')"
                                :class="seleCategory === 'all' ? 'bg-stone-900 text-white hover:bg-stone-800' : 'text-stone-600'">
                                All Categories
                            </button>
                        </li>

                        <!-- Dynamic Categories -->
                        <li v-for="cate in categories" :key="cate.id">
                            <button type="button"
                                class="w-full rounded-2xl px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 hover:bg-stone-200"
                                @click="selectCategories(cate.name)"
                                :class="seleCategory === cate.name ? 'bg-stone-900 text-white hover:bg-stone-800' : 'text-stone-600'">
                                {{ cate.name }}
                            </button>
                        </li>

                    </ul>
                </div>
            </div>

            <!-- price range -->
            <div>
                <h4 class="text-xs font-medium uppercase tracking-[0.2em] text-stone-400 mb-3">price range</h4>
                <div class="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">

                    <div class="mb-4 flex flex-col items-center justify-center border-b border-stone-100 pb-3">
                        <span class="uppercase text-stone-400 text-[10px] tracking-widest font-semibold">max price
                            filter</span>
                        <span class="text-2xl font-bold text-emerald-600">${{ currentPrice }}</span>
                    </div>

                    <div class="relative flex items-center mt-2">
                        <input type="range" :min="minPrice" :max="maxPrice" v-model.number="currentPrice"
                            @input="handlePriceChange" :style="{
                                background: `linear-gradient(to right, #10b981 0%, #10b981 ${((currentPrice - minPrice) / (maxPrice - minPrice)) * 100}%, #f5f5f4 ${((currentPrice - minPrice) / (maxPrice - minPrice)) * 100}%, #f5f5f4 100%)`
                            }" class="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-500 focus:outline-none" />
                    </div>

                    <div class="flex justify-between items-center mt-3 text-xs font-medium text-stone-400 px-1">
                        <span>Min: ${{ minPrice }}</span>
                        <span>Max: ${{ maxPrice }}</span>
                    </div>
                </div>
            </div>
        </aside>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { categories_data } from '../../api/CategoriesApi';

// ====== variables
const categories = ref([]);
const isLoading = ref(true);
const seleCategory = ref("all");

// កែប្រែ៖ បន្ថែម state សម្រាប់តម្លៃ (អាចដូរតាមទំនិញជាក់ស្តែងរបស់អ្នក)
const minPrice = ref(0);
const maxPrice = ref(100);
const currentPrice = ref(100); // ឱ្យវាស្មើតម្លៃអតិបរមាជាមុន

// កែប្រែ៖ បន្ថែម Emit សម្រាប់តម្លៃ
const emit = defineEmits(["changeCategories", "changePrice"]);

// ====== fetch categories api
onMounted(async () => {
    try {
        const response = await categories_data();
        categories.value = response;
        emit("changePrice", currentPrice.value)
    }
    catch (error) {
        console.error("error fetching categories", error);
    }
    finally {
        isLoading.value = false;
    }
});

// ===== logic filter category
const selectCategories = (cateName) => {
    seleCategory.value = cateName;
    emit("changeCategories", cateName);
};

// កែប្រែ៖ បង្កើត function សម្រាប់ចាប់ទិន្នន័យពេលរំកិលតម្លៃ
const handlePriceChange = () => {
    emit("changePrice", currentPrice.value);
};
</script>