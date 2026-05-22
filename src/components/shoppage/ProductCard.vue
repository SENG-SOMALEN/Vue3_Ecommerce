<template>
    <section class="px-6 py-10 bg-stone-50 min-h-screen rounded-3xl">

        <div class="max-w-6xl mx-auto px-6">

            <!-- Loading State -->
            <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                <div v-for="n in 8" :key="n" class="bg-white rounded-2xl overflow-hidden animate-pulse">
                    <div class="bg-stone-200 h-64 w-full" />
                    <div class="p-4 space-y-3">
                        <div class="h-3 bg-stone-200 rounded w-3/4" />
                        <div class="h-3 bg-stone-200 rounded w-1/2" />
                        <div class="h-8 bg-stone-200 rounded-xl w-full mt-4" />
                    </div>
                </div>
            </div>

            <!-- Product Grid -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                <article v-for="product in items" :key="product.id"
                    class="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <!-- Image -->
                    <div class="relative overflow-hidden bg-stone-100 h-64">
                        <img :src="product.images?.[0]" :alt="product.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <!-- Category Badge -->
                        <span v-if="product.category"
                            class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-600 text-xs font-medium px-2.5 py-1 rounded-full">
                            {{ product.category?.name ?? product.category }}
                        </span>
                        <!-- Wishlist -->
                        <button
                            class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                            aria-label="Add to wishlist">
                            <svg class="w-4 h-4 text-stone-400 hover:text-rose-500 transition-colors" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>

                    <!-- Content -->
                    <div class="p-4 flex flex-col flex-1">
                        <h4 class="text-sm font-semibold text-stone-800 leading-snug line-clamp-2 mb-1">
                            {{ product.title }}
                        </h4>

                        <!-- Stars -->
                        <div class="flex items-center gap-1 my-2">
                            <template v-for="star in 5" :key="star">
                                <svg class="w-3.5 h-3.5"
                                    :class="star <= Math.round(product.rating ?? 0) ? 'text-amber-400' : 'text-stone-200'"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </template>
                            <span class="text-xs text-stone-400 ml-1">({{ product.rating?.toFixed(1) ?? '0.00'
                                }})</span>
                        </div>

                        <!-- Price & CTA -->
                        <div class="mt-auto flex items-center justify-between pt-3 border-t border-stone-100">
                            <!-- ស្វែងរកជួរដេកតម្លៃរួចប្តូរមកដូចខាងក្រោម៖ -->
                            <span class="text-base font-bold text-stone-900">
                                ${{ product.price ? product.price.toFixed(2) : '0.00' }}
                            </span>
                            <button
                                class="bg-stone-900 text-white text-xs font-medium px-4 py-2 rounded-xl hover:bg-stone-700 active:scale-95 transition-all duration-150">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>

    </section>
</template>

<script setup>

// ==== logic
const prop = defineProps({
    items: {
        type: Array,
        required: true
    },
    isLoading: {
        type: Boolean,
        default: true
    }
})
</script>