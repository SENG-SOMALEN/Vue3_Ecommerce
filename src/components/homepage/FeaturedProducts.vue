<template>
    <!-- Featured Products -->
    <section class="bg-[#f7f7f5] py-24 overflow-hidden">

        <div class="max-w-7xl mx-auto px-6">

            <!-- HEADER -->
            <div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">

                <div class="text-center lg:text-left">

                    <p class="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
                        Featured Collection
                    </p>

                    <h2 class="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                        Crafted For Modern Living
                    </h2>

                    <p class="text-gray-500 max-w-2xl leading-relaxed">
                        Explore our most loved products curated with elegance,
                        simplicity, and timeless design.
                    </p>

                </div>

                <!-- BUTTON -->
                <div>
                    <router-link to="/shop">
                        <button
                            class="px-8 py-4 rounded-full border border-gray-300 hover:bg-black hover:text-white duration-300 flex items-center gap-3">

                            View Collection

                            <span class="text-lg">
                                →
                            </span>

                        </button>
                    </router-link>
                </div>

            </div>

            <!-- PRODUCT GRID -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <!-- CARD -->
                <div class="group cursor-pointer">

                    <div class="overflow-hidden rounded-[32px] bg-white">

                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80" alt=""
                            class="w-full h-[420px] object-cover group-hover:scale-105 duration-500">

                    </div>

                    <div class="pt-5">

                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                            Minimal Watch
                        </h4>

                        <p class="text-gray-500 mb-3">
                            Premium everyday essential.
                        </p>

                        <span class="text-lg font-semibold text-gray-900">
                            $249
                        </span>

                    </div>

                </div>

                <!-- CARD -->
                <div class="group cursor-pointer">

                    <div class="overflow-hidden rounded-[32px] bg-white">

                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80" alt=""
                            class="w-full h-[420px] object-cover group-hover:scale-105 duration-500">

                    </div>

                    <div class="pt-5">

                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                            Luxury Sneakers
                        </h4>

                        <p class="text-gray-500 mb-3">
                            Comfort meets modern design.
                        </p>

                        <span class="text-lg font-semibold text-gray-900">
                            $320
                        </span>

                    </div>

                </div>

                <!-- CARD -->
                <div class="group cursor-pointer">

                    <div class="overflow-hidden rounded-[32px] bg-white">

                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80" alt=""
                            class="w-full h-[420px] object-cover group-hover:scale-105 duration-500">

                    </div>

                    <div class="pt-5">

                        <h4 class="text-xl font-medium text-gray-900 mb-2">
                            Wireless Headphones
                        </h4>

                        <p class="text-gray-500 mb-3">
                            Immersive sound experience.
                        </p>

                        <span class="text-lg font-semibold text-gray-900">
                            $199
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
</script>