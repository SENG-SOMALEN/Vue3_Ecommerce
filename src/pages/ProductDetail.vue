<template>
    <div class="min-h-screen bg-gray-100 py-10 px-4">
        <div class="max-w-6xl mx-auto mb-6">
            <button 
                @click="$router.back()" 
                class="flex items-center gap-2 text-gray-600 hover:text-black transition font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Products
            </button>
        </div>

        <div v-if="loading" class="text-center text-xl font-semibold py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            Loading...
        </div>

        <div
            v-else-if="products"
            class="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden"
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">

                <div>
                    <div class="bg-gray-100 rounded-2xl overflow-hidden border">
                        <img
                            :src="selectedImage || products.images?.[0]"
                            :alt="products.title"
                            class="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div class="flex gap-4 mt-4 overflow-x-auto pb-2">
                        <img
                            v-for="(img, index) in products.images"
                            :key="index"
                            :src="img"
                            @click="selectedImage = img" 
                            :class="[
                                'w-20 h-20 rounded-xl object-cover border-2 cursor-pointer transition',
                                (selectedImage === img || (!selectedImage && index === 0)) ? 'border-black scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                            ]"
                        />
                    </div>
                </div>

                <div class="flex flex-col justify-between">
                    <div>
                        <span v-if="products.category" class="bg-black text-white text-sm px-4 py-1 rounded-full">
                            {{ products.category.name ?? products.category }}
                        </span>

                        <h1 class="text-4xl font-bold mt-4 text-gray-800">
                            {{ products.title }}
                        </h1>

                        <div class="mt-4 flex items-center gap-4">
                            <span class="text-3xl font-bold text-black">${{ products.price }}</span>
                            <span class="line-through text-gray-400 text-lg">$120</span>
                            <span class="bg-red-100 text-red-500 px-3 py-1 rounded-lg text-sm">-20%</span>
                        </div>

                        <p class="mt-6 text-gray-600 leading-relaxed italic">
                            {{ products.description }}
                        </p>
                    </div>

                    <div class="mt-10">
                        <div class="flex items-center gap-4 mb-6">
                            <button @click="detailQuantity > 1 ? detailQuantity-- : null" class="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold">-</button>
                            <span class="text-xl font-semibold">{{ detailQuantity }}</span>
                            <button @click="detailQuantity++" class="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold">+</button>
                        </div>

                        <div class="flex gap-4">
                            <button @click="handleAddToCart" class="flex-1 bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition active:scale-95">
                                Add to Cart
                            </button>
                            <button class="px-6 py-4 border rounded-2xl hover:bg-gray-100 transition">
                                ❤️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-20 bg-white max-w-6xl mx-auto rounded-3xl shadow">
            <h2 class="text-2xl font-bold text-red-500">រកមិនឃើញផលិតផលឡើយ!</h2>
            <p class="text-gray-500 mb-6">ផលិតផលនេះប្រហែលត្រូវបានលុប ឬ ID មិនត្រឹមត្រូវ។</p>
            <router-link to="/" class="bg-black text-white px-6 py-2 rounded-xl">ត្រឡប់ទៅទំព័រដើម</router-link>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute, RouterLink } from 'vue-router';
    // == api product
    import { product_Data } from '../api/ProductApi';

    // === use store import
    import { useCartStore } from '../stores/cart';

    // state
    const route = useRoute();
    const products = ref(null);
    const loading = ref(true);
    const selectedImage = ref("");

    const productId = route.params.id;

    // === fetch api 
    onMounted(async () => {
        try {
            const response = await product_Data();

            // ២. Logic ស្វែងរកផលិតផលជាក់លាក់ចេញពី Array តាមរយៈ ID ពី URL
            if (response && Array.isArray(response)) {
                const foundProduct = response.find(p => p.id === Number(productId) || p.id === productId);
                
                if (!foundProduct) {
                    throw new Error("Product not found in list");
                }
                products.value = foundProduct;
            } else if (response && !response.error) {
                // ករណី API បញ្ជូនមកជា Object ផលិតផលតែមួយចំៗ
                products.value = response;
            } else {
                throw new Error("Invalid API response");
            }
        }
        catch (error) {
            console.log("Error fetching product detail:", error); 
        }
        finally {
            loading.value = false; // ៣. កែសម្រួលដោយថែម .value ដើម្បីបាត់ Error ក្រហម
        }
    });

    // === use store
    const cartStore = useCartStore();
    const detailQuantity = ref(1);

    const handleAddToCart = () => {
        if (products.value) {
            const productWithQuantity = {
                ...products.value,
                quantity: detailQuantity.value
            };

            cartStore.addToCart(productWithQuantity);

            detailQuantity.value = 1;

            alert("Item successfully added to cart!")
        }
    };
</script>