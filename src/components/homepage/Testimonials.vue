<template>
    <section class="max-w-6xl mx-auto px-6 py-16">
        <!-- edd -->
        <div>
            <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                <div v-for="i in 3" :key="i"
                    class="relative overflow-hidden rounded-2xl p-8 bg-white border border-gray-100">

                    <!-- Quote skeleton -->
                    <div class="absolute top-4 right-6 text-6xl text-gray-100 font-serif">
                        "
                    </div>

                    <!-- Stars skeleton -->
                    <div class="flex gap-1 mb-5">
                        <div v-for="s in 5" :key="s" class="w-3 h-3 bg-gray-200 rounded-sm animate-pulse"></div>
                    </div>

                    <!-- Text skeleton -->
                    <div class="space-y-3 mb-6">
                        <div class="h-3 bg-gray-100 rounded w-full animate-pulse"></div>
                        <div class="h-3 bg-gray-100 rounded w-5/6 animate-pulse"></div>
                        <div class="h-3 bg-gray-100 rounded w-4/6 animate-pulse"></div>
                    </div>

                    <!-- User skeleton -->
                    <div class="flex items-center gap-4">
                        <div class="w-11 h-11 rounded-full bg-gray-100 animate-pulse"></div>

                        <div class="space-y-2">
                            <div class="h-3 w-24 bg-gray-100 rounded animate-pulse"></div>
                            <div class="h-2 w-16 bg-gray-100 rounded animate-pulse"></div>
                        </div>
                    </div>

                </div>

            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                <div v-for="(user, index) in userTestimon" :key="user.id" class="relative overflow-hidden rounded-2xl p-8
                    bg-white border border-gray-100
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg hover:border-gray-200">

                    <!-- Quote -->
                    <div
                        class="absolute top-4 right-6 text-6xl font-serif leading-none pointer-events-none text-gray-100">
                        "
                    </div>

                    <!-- ⭐ Stars -->
                    <div class="flex gap-1 mb-5">
                        <span v-for="s in 5" :key="s" class="text-sm"
                            :class="s <= user.rating ? 'text-yellow-400' : 'text-gray-200'">
                            ★
                        </span>
                    </div>

                    <!-- 📝 Text -->
                    <p class="text-sm leading-relaxed mb-6 text-gray-600">
                        "{{ testimonials[index].text }}"
                    </p>

                    <!-- 👤 User -->
                    <div class="flex items-center gap-4">
                        <img :src="user.avatar" :alt="user.name"
                            class="w-11 h-11 rounded-full object-cover ring-1 ring-gray-100" />

                        <div>
                            <h3 class="text-sm font-medium text-gray-900">
                                {{ user.name }}
                            </h3>
                            <p class="text-xs text-gray-500">
                                {{ user.role }}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { users_data } from '../../api/UserApi';

const userTestimon = ref([]);
const isLoading = ref(true);

onMounted(async () => {

    try {
        const response = await users_data();

        const dataAll = response;

        userTestimon.value = dataAll.slice(0, 3);
    }
    catch (error) {
        console.log("Testmonials api error: ", error);
    }
    finally {
        isLoading.value = false;
    }
});

const testimonials = [
    {
        id: 1,
        rating: 5,
        text: "Impeccable taste. I discovered items here I had not found anywhere else — exactly the kind of quiet luxury I love in my daily objects."
    },
    {
        id: 2,
        rating: 5,
        text: "Fast shipping, beautiful packaging, and products that genuinely live up to the imagery. Rare to find this level of care in an online store."
    },
    {
        id: 3,
        rating: 4,
        text: "The curation here is absolutely unmatched. Every product feels intentional, and the quality never disappoints. My go-to for premium finds."
    }
]
</script>