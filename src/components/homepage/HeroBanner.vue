<template>
    <div class="font-sans max-w-6xl mx-auto px-6">
        <section class="min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-12 mt-15">

            <!-- left action -->
            <div class="w-full flex flex-col items-center justify-center lg:justify-start lg:items-start">
                <p class="uppercase text-xs mb-8">New Season Collection </p>
                <h1 class="text-7xl mb-8">
                    Curated <br>
                    <em>Luxury</em><br>
                    Awaits You
                </h1>
                <p class="text-lg mb-8 max-w-md mx-auto lg:mx-0"> Discover handpicked products that define modern
                    elegance. From timeless classics to
                    bold statements — every piece tells a story. </p>
                <div class="mb-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                    <BaseButton class="px-10 py-4 " />
                    <BaseButton class="px-10 py-4" />
                </div>

                <div data-v-933e9cdf=""
                    class="flex gap-8 justify-center lg:justify-start pt-4 __web-inspector-hide-shortcut__">
                    <div data-v-933e9cdf="" class="text-center lg:text-left">
                        <p data-v-933e9cdf="" class="text-2xl font-light" style="color: rgb(201, 168, 76);">12K+</p>
                        <p data-v-933e9cdf="" class="text-xs tracking-widest uppercase mt-1"
                            style="color: rgb(154, 149, 128); font-family: &quot;DM Mono&quot;, monospace;">Products</p>
                    </div>
                    <div data-v-933e9cdf="" class="text-center lg:text-left">
                        <p data-v-933e9cdf="" class="text-2xl font-light" style="color: rgb(201, 168, 76);">98%</p>
                        <p data-v-933e9cdf="" class="text-xs tracking-widest uppercase mt-1"
                            style="color: rgb(154, 149, 128); font-family: &quot;DM Mono&quot;, monospace;">Satisfaction
                        </p>
                    </div>
                    <div data-v-933e9cdf="" class="text-center lg:text-left">
                        <p data-v-933e9cdf="" class="text-2xl font-light" style="color: rgb(201, 168, 76);">150+</p>
                        <p data-v-933e9cdf="" class="text-xs tracking-widest uppercase mt-1"
                            style="color: rgb(154, 149, 128); font-family: &quot;DM Mono&quot;, monospace;">Brands</p>
                    </div>
                </div>
            </div>

            <!-- Right action -->
            <div class="w-full relative flex-1">

                <img data-v-933e9cdf=""
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&amp;q=80"
                    alt="Featured collection" class="mosaic-main rounded-sm object-cover w-full h-[480px] lg:h-[560px]"
                    style="filter: saturate(0.85) contrast(1.05);">

                <!-- Floating accent card -->
                <div class="accent-card absolute bottom-8 lg:bottom-22 -left-8 p-4 rounded-sm shadow-2xl"
                    style="background:#0d1225; border:1px solid #c9a84c33; backdrop-filter:blur(12px);">
                    <p class="text-xs tracking-widest uppercase mb-1"
                        style="color:#c9a84c; font-family:'DM Mono',monospace;">Today's Pick</p>
                    <p class="text-sm font-light" style="color:#f0ece2;">Premium Lifestyle Goods</p>
                    <div class="flex gap-1 mt-2">
                        <span v-for="i in 5" :key="i" style="color:#c9a84c; font-size:10px;">★</span>
                    </div>
                </div>
                <!-- Decorative ring -->
                <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 opacity-30"
                    style="border-color:#c9a84c;"></div>
            </div>

            <!-- Scroll cue -->
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span class="text-xs tracking-widest uppercase"
                    style="font-family:'DM Mono',monospace; color:#9a9580;">Scroll</span>
                <div class="scroll-line w-px h-12"
                    style="background: linear-gradient(to bottom, #c9a84c, transparent);"></div>
            </div>
        </section>
    </div>
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