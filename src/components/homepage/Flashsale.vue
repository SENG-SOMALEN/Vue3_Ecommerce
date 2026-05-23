<template>
    <!-- Flash Sale -->
    <section class="bg-[#f7f7f5] py-24 overflow-hidden">

        <div class="max-w-7xl mx-auto px-6">

                <!-- HEADER -->
            <div
                class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">

                <div class="text-center lg:text-left">

                    <p
                        class="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
                        Limited Time
                    </p>

                    <h2
                        class="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                        Flash Sale
                    </h2>

                </div>

                <!-- COUNTDOWN -->
                <div class="flex items-center gap-4">

                    <div
                        class="w-20 h-20 rounded-3xl bg-white shadow-sm flex flex-col items-center justify-center">

                        <span class="text-2xl font-semibold text-gray-900">
                            12
                        </span>

                        <span class="text-xs uppercase tracking-widest text-gray-500">
                            Hours
                        </span>

                    </div>

                    <div
                        class="w-20 h-20 rounded-3xl bg-white shadow-sm flex flex-col items-center justify-center">

                        <span class="text-2xl font-semibold text-gray-900">
                            45
                        </span>

                        <span class="text-xs uppercase tracking-widest text-gray-500">
                            Min
                        </span>

                    </div>

                    <div
                        class="w-20 h-20 rounded-3xl bg-white shadow-sm flex flex-col items-center justify-center">

                        <span class="text-2xl font-semibold text-gray-900">
                            18
                        </span>

                        <span class="text-xs uppercase tracking-widest text-gray-500">
                            Sec
                        </span>

                    </div>

                </div>

            </div>

            <!-- PRODUCTS -->
            <div
                class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

                <div
                    v-for="flash in flashProduct"
                    :key="flash.id"
                    class="group min-w-[280px] max-w-[280px] bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl duration-500 flex-shrink-0 snap-start cursor-pointer">

                    <!-- IMAGE -->
                    <div class="relative overflow-hidden">

                        <img
                            :src="flash.images"
                            :alt="flash.title"
                            class="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                        >

                        <!-- BADGE -->
                        <div
                            class="absolute top-4 left-4 px-4 py-2 rounded-full bg-black text-white text-xs tracking-wider">

                            -{{ getDiscount() }}%

                        </div>

                    </div>

                    <!-- CONTENT -->
                    <div class="p-6">

                        <p
                            class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">

                            {{ flash.category?.name || 'Collection' }}

                        </p>

                        <h3
                            class="text-xl font-medium text-gray-900 line-clamp-1 mb-4">

                            {{ flash.title }}

                        </h3>

                        <!-- PRICE -->
                        <div class="flex items-center gap-3">

                            <span
                                class="text-2xl font-semibold text-gray-900">

                                ${{ discountedPrice(flash.price) }}

                            </span>

                            <span
                                class="text-sm text-gray-400 line-through">

                                ${{ flash.price }}

                            </span>

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