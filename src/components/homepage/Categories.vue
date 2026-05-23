<template>
    <!-- Categories Section -->
    <section class="bg-white py-24 overflow-hidden">

        <div class="max-w-7xl mx-auto px-6">

                <!-- HEADER -->
            <div class="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">

                <div class="text-center lg:text-left">

                    <p class="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
                        Categories
                    </p>

                    <h2 class="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                        Shop By Category
                    </h2>

                    <p class="text-gray-500 max-w-2xl leading-relaxed">
                        Discover collections designed for modern lifestyles,
                        timeless aesthetics, and premium experiences.
                    </p>

                </div>

            </div>

            <!-- LOADING -->
            <div
                v-if="isloading"
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                <div
                    v-for="i in 5"
                    :key="i"
                    class="h-[320px] rounded-[32px] bg-gray-200 animate-pulse">
                </div>

            </div>

            <!-- CATEGORIES -->
            <div
                v-else
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                <div
                    v-for="(cate, index) in categoies"
                    :key="cate.id"
                    class="group relative overflow-hidden rounded-[32px] cursor-pointer"
                    :class="index === 0 ? 'lg:col-span-2' : ''"
                >

                    <!-- IMAGE -->
                    <img
                        :src="cate.image"
                        :alt="cate.name"
                        class="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                    >

                    <!-- OVERLAY -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                    </div>

                    <!-- CONTENT -->
                    <div
                        class="absolute inset-0 flex flex-col justify-end p-8">

                        <p
                            class="uppercase tracking-[0.25em] text-xs text-white/70 mb-2">
                            Collection
                        </p>

                        <h3
                            class="text-2xl font-medium text-white tracking-tight">
                            {{ cate.name }}
                        </h3>

                    </div>

                    <!-- HOVER BORDER -->
                    <div
                        class="absolute inset-0 rounded-[32px] border border-white/0 group-hover:border-white/30 transition-all duration-300">
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { categories_data } from '../../api/CategoriesApi'

const categoies = ref([])
const isloading = ref(true)

onMounted(async () => {
    try {
        const response = await categories_data()

        const allData = response.data || response

        categoies.value = allData.slice(0, 5)

    } catch (error) {
        console.log('Categories api error:', error)

    } finally {
        isloading.value = false
    }
})
</script>