<template>
  <section class="relative overflow-hidden py-40 px-6 lg:px-16 bg-white">

    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0" style="background:#f5f5f7;"></div>

      <div
        class="absolute top-[-250px] left-1/2 -translate-x-1/2
               w-[900px] h-[900px] rounded-full blur-3xl opacity-40"
        style="background:rgba(0,0,0,0.03)"
      ></div>

      <div
        class="absolute inset-0 opacity-[0.03]"
        style="
          background-image:
            linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px);
          background-size:60px 60px;
        "
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl mx-auto text-center">
      <p class="uppercase tracking-[0.35em] text-xs text-gray-500 mb-6">
        Stay Connected
      </p>

      <h2 class="text-5xl md:text-7xl font-semibold leading-tight text-black mb-6">
        Exclusive Access,
        <span class="block text-gray-400 font-light">
          Delivered Daily
        </span>
      </h2>

      <p class="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
        Subscribe for curated drops, early access to new collections,
        and member-only offers. No spam — only the good stuff.
      </p>

      <!-- Form -->
      <form
        @submit.prevent="handleSubscribe"
        class="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto"
      >
        <input
          v-model="emailInput"
          type="email"
          required
          placeholder="your@email.com"
          class="w-full flex-1 px-7 py-5 rounded-2xl
                 bg-white border border-gray-200
                 shadow-sm
                 text-black placeholder:text-gray-400
                 outline-none
                 focus:border-black/20
                 focus:ring-4 focus:ring-black/5
                 transition-all duration-300"
        />

        <button
          type="submit"
          :disabled="loading"
          class="px-10 py-5 rounded-2xl
                 bg-black text-white
                 font-medium
                 hover:bg-gray-800
                 transition-all duration-300
                 whitespace-nowrap disabled:opacity-50"
        >
          {{ subscribeSuccess ? '✓ Subscribed!' : loading ? 'Loading...' : 'Subscribe' }}
        </button>
      </form>

      <!-- message -->
      <p v-if="message" class="mt-4 text-sm text-gray-500">
        {{ message }}
      </p>

      <p class="mt-6 text-xs text-gray-400 tracking-wide">
        Unsubscribe at any time · No spam guaranteed
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const emailInput = ref('')
const subscribeSuccess = ref(false)
const loading = ref(false)
const message = ref('')

const handleSubscribe = async () => {
  if (!emailInput.value) return

  loading.value = true
  message.value = ''

  try {
    // simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    subscribeSuccess.value = true
    message.value = 'You are now subscribed successfully 🎉'

    // reset input
    emailInput.value = ''

    // auto reset button state
    setTimeout(() => {
      subscribeSuccess.value = false
    }, 3000)

  } catch (err) {
    message.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>