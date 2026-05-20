<template>
    <!-- categorise section -->
    <section class="max-w-6xl mx-auto px-6">
        <h1 class="text-5xl font-medium">Categoies</h1>
        <!-- loading categoies -->
        <div v-if="isloading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            <div v-for="i in 5" :key="i" class="animate-pulse rounded-sm h-48" style="background:#141828;"></div>
        </div>
        <!-- reder categories -->
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            <div v-for="(cate, index) in categoies" :key="cate.id"
                class="relative overflow-hidden rounded-sm cursor-pointer group"
                :class="index === 0 ? 'col-span-2 md:col-span-1 lg:col-span-2' : ''" style="height:220px;">
                <img :src="cate.image" :alt="cate.name"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style="filter:saturate(0.7) brightness(0.5);" />
                <div class="absolute inset-0 category-overlay transition-opacity duration-300"></div>
                <div class="absolute inset-0 flex flex-col justify-end p-5">
                    <p class="text-xs tracking-widest uppercase mb-1"
                        style="color:#c9a84c; font-family:'DM Mono',monospace;">
                        Shop
                    </p>
                    <h3 class="text-lg font-light text-white leading-tight">{{ cate.name }}</h3>
                </div>
                <!-- Hover border accent -->
                <div
                    class="absolute inset-0 border border-transparent group-hover:border-yellow-600/40 transition-all duration-300 rounded-sm pointer-events-none">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { categories_data } from '../../api/CategoriesApi';

const categoies = ref([]);
const isloading = ref(true);

onMounted(async () => {
    try {
        const response = await categories_data();

        const allData = response.data || response;

        categoies.value = allData.slice(0, 5)
    }
    catch (error) {
        console.log("Categories api error: ", error);
    }
    finally {
        isloading.value = false
    }
});
</script>