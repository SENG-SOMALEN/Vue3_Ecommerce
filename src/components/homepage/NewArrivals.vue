<template>
  <!-- New Arrivals -->
  <section class="max-w-6xl mx-auto px-6 mt-20">

    <!-- Loading -->
    <div v-if="isLoading" class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="i in 4"
        :key="i"
        class="animate-pulse h-72 rounded-3xl bg-gray-100"
      ></div>
    </div>

    <!-- Grid -->
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px]">

      <div
        v-for="(product, index) in newProduct"
        :key="product.id"
        class="relative overflow-hidden rounded-3xl group cursor-pointer
               bg-gray-50 shadow-sm hover:shadow-xl
               transition-all duration-500 hover:-translate-y-1"
        :class="index === 0 ? 'md:col-span-2 md:row-span-2' : ''"
      >

        <!-- Image -->
        <img
          :src="product.images?.[0]"
          :alt="product.title"
          class="absolute inset-0 w-full h-full object-cover
                 transition-transform duration-700 group-hover:scale-110"
        />

        <!-- Soft Apple overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        <!-- Content -->
        <div class="absolute bottom-0 p-6 text-white">

          <span class="text-[11px] tracking-[0.25em] uppercase text-white/70">
            New
          </span>

          <h3
            class="font-light mt-1 leading-snug drop-shadow-sm"
            :class="index === 0 ? 'text-2xl' : 'text-sm'"
          >
            {{ product.title }}
          </h3>

          <p class="text-sm mt-1 text-white/80 font-medium">
            ${{ product.price }}
          </p>

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