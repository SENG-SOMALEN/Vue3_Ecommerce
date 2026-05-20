<template>
    <section class="max-w-6xl mx-auto">
        <div>
            <div v-if="isLoading">
                loading...
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div v-for="(user, index) in userTestimon" :key="user.id" class="bg-[#0d1225] border border-[#1e2440] p-8 rounded-sm relative overflow-hidden
           transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-950">

                    <div class="absolute top-4 right-6 text-6xl font-serif leading-none pointer-events-none"
                        style="color:#c9a84c18;">"</div>

                    <!-- ⭐ Stars -->
                    <div class="flex gap-1 mb-5">
                        <span v-for="s in 5" :key="s" class="text-yellow-400" :class="s <= user.rating ? 'text-yellow-400' : 'text-gray-600'">
                            ★
                        </span>
                    </div>

                    <!-- 📝 Text -->
                    <p class="text-sm leading-relaxed mb-6 italic text-[#9a9580]">
                        "{{ testimonials[index].text }}"
                    </p>

                    <!-- 👤 User -->
                    <div class="flex items-center gap-4">
                        <img :src="user.avatar" :alt="user.name" class="w-10 h-10 rounded-full object-cover"
                            style="filter:saturate(0.7);">

                        <div>
                            <h3 class="text-sm font-medium text-[#f0ece2]">{{ user.name }}</h3>
                            <p class="text-xs text-[#9a9580]">{{ user.role }}</p>
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