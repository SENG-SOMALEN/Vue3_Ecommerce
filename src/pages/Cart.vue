<template>
    <section class="bg-[#f7f7f5] min-h-screen py-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">

            <div class="mb-16 text-center lg:text-left">
                <p class="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
                    Your Cart
                </p>
                <h1 class="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
                    Shopping Cart
                </h1>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-10 items-start">
                <div class="flex flex-col max-h-[calc(100vh-240px)] w-full">

                    <button @click="$router.push('/shop')" class="mb-8 text-xs uppercase tracking-[0.25em] text-gray-500 hover:text-black transition text-left shrink-0">
                        ← Continue Shopping
                    </button>

                    <div class="space-y-6 overflow-y-auto flex-1 pr-3 custom-scrollbar">

                        <div v-for="item in cartStore.carts" :key="item.id" class="bg-white rounded-4xl p-6 shadow-sm hover:shadow-xl transition duration-500 border border-gray-100">
                            <div class="flex flex-col md:flex-row gap-6 items-start">
                                
                                <div class="w-full md:w-[180px] h-[220px] rounded-[28px] overflow-hidden bg-gray-100 shrink-0">
                                    <img :src="item.images?.[0] || item.images" alt="" class="w-full h-full object-cover hover:scale-105 transition duration-700">
                                </div>

                                <div class="flex-1 w-full">
                                    <div class="mb-8">
                                        <p class="uppercase tracking-[0.25em] text-[11px] text-gray-400 mb-3">
                                            {{ item.category?.name || item.category || 'Product' }}
                                        </p>

                                        <h3 class="text-3xl font-medium tracking-tight text-gray-900 mb-2">
                                            {{ item.title || item.name }}
                                        </h3>
                                        <p class="text-gray-500 text-sm">Size: M · Color: Black</p>
                                    </div>

                                    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                        <div>
                                            <p class="text-2xl font-semibold text-gray-900">${{ item.price }}</p>
                                        </div>

                                        <div class="flex items-center bg-gray-100 rounded-full p-1">
                                            <button @click="item.quantity > 1 ? item.quantity-- : null" class="w-10 h-10 rounded-full hover:bg-white transition flex items-center justify-center">-</button>
                                            <span class="w-10 text-center text-sm font-medium">{{ item.quantity }}</span>
                                            <button @click="item.quantity++" class="w-10 h-10 rounded-full hover:bg-white transition flex items-center justify-center">+</button>
                                        </div>

                                        <div class="flex items-center gap-5">
                                            <span class="text-2xl font-semibold text-gray-900">
                                                ${{ (item.price * item.quantity).toFixed(2) }}
                                            </span>
                                            <button @click="cartStore.removeFromCart(item.id)" class="w-11 h-11 rounded-full border border-gray-200 hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition flex items-center justify-center">✕</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div v-if="cartStore.carts.length === 0" class="text-center py-12 bg-white rounded-4xl border border-dashed border-gray-200">
                            <p class="text-gray-400">Your shopping cart is empty.</p>
                        </div>

                    </div>

                    <div v-if="cartStore.carts.length > 0" class="flex items-center justify-between mt-8 px-2 shrink-0">
                        <p class="text-sm text-gray-500">{{ cartStore.carts.length }} items in your cart</p>
                        <button @click="cartStore.clearCart()" class="text-xs uppercase tracking-[0.25em] text-gray-500 hover:text-red-500 transition">
                            Clear Cart
                        </button>
                    </div>

                </div>

                <div class="bg-white rounded-4xl p-8 shadow-sm border border-gray-100 sticky top-8">
                    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 mb-8">Order Summary</h2>
                    <div class="space-y-6 pb-8 border-b border-gray-100">
                        <div class="flex items-center justify-between">
                            <p class="text-gray-500">Subtotal</p>
                            <span class="font-medium">${{ cartStore.totalPrice.toFixed(2) }}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-gray-500">Shipping</p>
                            <span class="text-green-600 font-medium">Free</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-500">Discount</p>
                                <p class="text-[11px] uppercase tracking-[0.25em] text-green-600 mt-1">Summer Sale</p>
                            </div>
                            <span class="text-red-500 font-semibold">No Discount</span>
                        </div>
                    </div>
                    <div class="my-8">
                        <div class="flex overflow-hidden rounded-2xl border border-gray-200">
                            <input type="text" placeholder="Promo Code" class="flex-1 px-5 py-4 outline-none bg-gray-50">
                            <button class="px-6 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white transition">Apply</button>
                        </div>
                    </div>
                    <div class="flex items-end justify-between mb-8">
                        <div>
                            <p class="text-lg tracking-wide text-gray-900">Total</p>
                            <p class="text-sm text-gray-500 mt-1">Tax included</p>
                        </div>
                        <span class="text-4xl font-semibold tracking-tight text-gray-900">${{ cartStore.totalPrice.toFixed(2) }}</span>
                    </div>
                    <button :disabled="cartStore.carts.length === 0" class="w-full bg-black text-white py-5 rounded-2xl uppercase tracking-[0.25em] text-xs font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed">
                        Proceed To Checkout
                    </button>
                    <div class="mt-8 pt-8 border-t border-gray-100 space-y-4">
                        <p class="text-sm text-gray-500">Secure checkout & SSL encrypted</p>
                        <p class="text-sm text-gray-500">Free returns within 30 days</p>
                        <p class="text-sm text-gray-500">Ships within 2–4 business days</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e4e4e7;
    border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #d4d4d8;
}
</style>