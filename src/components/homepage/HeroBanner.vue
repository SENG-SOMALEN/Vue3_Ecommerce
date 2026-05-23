<template>
    <section class="bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">

            <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-screen py-20">

                    <!-- LEFT CONTENT -->
                <div class="text-center lg:text-left">

                    <p class="uppercase tracking-[0.25em] text-sm text-gray-500 mb-6">
                        New Season Collection
                    </p>

                    <h1
                        class="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-gray-900 mb-8">
                        Curated
                        <br>
                        <span class="italic font-light">
                            Luxury
                        </span>
                        <br>
                        Awaits You
                    </h1>

                    <p class="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                        Discover handpicked products that define modern elegance.
                        From timeless classics to bold statements — every piece
                        tells a story.
                    </p>

                    <!-- BUTTONS -->
                    <div
                        class="flex flex-col sm:flex-row items-center lg:items-start gap-4">

                        <button
                            class="px-8 py-4 rounded-full bg-black text-white hover:scale-105 duration-300">
                            Shop Now
                        </button>

                        <button
                            class="px-8 py-4 rounded-full border border-gray-300 hover:bg-gray-100 duration-300">
                            Explore
                        </button>

                    </div>

                </div>

                <!-- RIGHT IMAGE -->
                <div class="relative">

                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                        alt="Luxury Collection"
                        class="w-full h-[500px] lg:h-[700px] object-cover rounded-[40px]"
                    >

                    <!-- FLOATING CARD -->
                    <div
                        class="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl rounded-3xl px-6 py-4 shadow-xl border border-white/50">

                        <p class="text-sm text-gray-500 mb-1">
                            Today's Pick
                        </p>

                        <h4 class="text-lg font-medium text-gray-900">
                            Premium Lifestyle Goods
                        </h4>

                        <div class="flex gap-1 mt-2 text-yellow-500 text-xs">
                            <span v-for="i in 5" :key="i">★</span>
                        </div>

                    </div>

                    <!-- DECORATIVE BLUR -->
                    <div
                        class="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full blur-3xl opacity-40">
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
</script>

<style scoped>
/* ── Flash sale scrollbar ──────────────────────────────────────── */
.flash-scroll-track::-webkit-scrollbar        { height: 3px; }
.flash-scroll-track::-webkit-scrollbar-track  { background: #141828; }
.flash-scroll-track::-webkit-scrollbar-thumb  { background: #c9a84c44; border-radius: 2px; }

/* ── Scroll animation ──────────────────────────────────────────── */
@keyframes scrollLine {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  50.1%{ transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
.scroll-line {
  animation: scrollLine 1.8s ease-in-out infinite;
}
</style>