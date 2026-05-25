<template>
    <main class="bg-[#f7f7f5] text-gray-900 overflow-hidden">

        <HeroBanner />
        <section class="space-y-24 py-24">
            <FeaturedProducts />
            <Categories />
            <Flashsale />
            <NewArrivals />
            <Testimonials />
            <NwesLetter />
        </section>

    </main>
</template>

<script setup>
import HeroBanner from '../components/homepage/HeroBanner.vue'
import FeaturedProducts from '../components/homepage/FeaturedProducts.vue'
import Categories from '../components/homepage/Categories.vue'
import Flashsale from '../components/homepage/Flashsale.vue'
import NewArrivals from '../components/homepage/NewArrivals.vue'
import NwesLetter from '../components/homepage/NewsLetter.vue'
import Testimonials from '../components/homepage/Testimonials.vue'
</script>