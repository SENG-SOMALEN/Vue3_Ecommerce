<template>
    <section class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center mb-12">
            <div>
                <p class="text-xs">limited Time</p>
                <h2 class="text-5xl">Flash Sale</h2>
            </div>
            <div class="flex gap-3 text-3xl font-semibold">
                <span>:</span>
                <span>:</span>
            </div>
        </div>

        <div class="flash-scroll-track overflow-x-auto pb-6 -mx-6 px-6">
            <div class="flex gap-6" style="width: max-content;">

                <div v-for="flash in flashProduct" :key="flash.id" class="w-[220px] bg-[#141828] relative rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
                <div class="relative overflow-hidden h-[200px]">
                    <img :src="flash.images" :alt="flash.name" class="w-full h-full object-center transition-transform duration-500 group-hover:scale-105" style="filter: saturate(0.8);">

                    <!-- Discount badge -->
                    <div class="absolute top-3 left-3 px-2 py-1 text-xs font-bold bg-[#c9a84c] text-[#0a0e1a]">
                        -{{ getDiscount() }}%
                    </div>
                </div>

                <div class="p-4">
                    <p class="text-xs truncate mb-1 text-[#9a9580]">{{ flash.category?.name || 'General' }}</p>
                    <h3 class="text-sm font-light truncate text-[#f0ece2]">{{ flash.title }}</h3>
                    <div class="flex gap-2 items-center mt-2">
                        <span class="text-base font-medium text-[#c9a84c]">${{ discountedPrice(flash.price) }}</span>
                        <span class="text-xs line-through text-[#9a9580]">${{ flash.price }}</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { product_Data } from '../../api/ProductApi';

    const flashProduct = ref([]);
    const isloading = ref(true);

    onMounted(async () => {
        try {
            const response = await product_Data();
            const allData = response;
            flashProduct.value = allData.slice(0,10);
        }
        catch (error) {
            console.log("flash product api error: ", error);
        }
        finally {
            isloading.value = false;
        }
    });

function discountedPrice(price) {
  return (price * 0.8).toFixed(0)
}

/** Simulate a random discount % for flash sale */
function getDiscount() {
  return [10, 15, 20, 25, 30][Math.floor(Math.random() * 5)]
}
</script>

<style scoped>
/* ── Flash sale scrollbar ──────────────────────────────────────── */
.flash-scroll-track::-webkit-scrollbar        { height: 3px; }
.flash-scroll-track::-webkit-scrollbar-track  { background: #141828; }
.flash-scroll-track::-webkit-scrollbar-thumb  { background: #c9a84c44; border-radius: 2px; }
</style>