<template>
    <!-- New Arrivals -->
    <section class="max-w-6xl mx-auto px-6 mt-10">

        <div v-if="isLoading" class="mt-12 flex gap-6 overflow-hidden">
            <div v-for="i in 4" :key="i" class="animate-pulse rounded-sm h-72 flex-1" style="background:#141828; min-width:200px;"></div>
        </div>

        <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(product, index) in newProduct" :key="product.id"
                class="relative overflow-hidden rounded-sm group cursor-pointer bg-[#141828]"
                :class="index == 0? 'col-span-2 row-span-2 h-[400px]' : 'h-[190px]'">
                
                <img :src="product.images?.[0]" :alt="product.title"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style="filter:saturate(0.8) brightness(0.7)"/>

                <div class="absolute inset-0 flex flex-col justify-end p-5" style="background: linear-gradient(to top, rgba(10,14,26,0.9) 0%, transparent 60%);">
                    <span class="text-xs tracking-widest uppercase mb-1">New</span>
                    <h3 class="font-light truncate text-[#f0ece2]" :class="index == 0 ? 'text-lg':'text-sm'">{{ product.title }}</h3>
                    <p class="text-sm mt-1 text-[#c9a84c]">${{ product.price }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { product_Data } from '../../api/ProductApi';

    const newProduct = ref([]);
    const isLoading = ref(true);

onMounted(async () => {
    try {
        const response = await product_Data();

        // newest product
        const lastProduct = [...response].reverse();

        newProduct.value = lastProduct.slice(0, 5);

    } catch (error) {
        console.log("New Arrivals api error:", error);

    } finally {
        isLoading.value = false;
    }
});
</script>