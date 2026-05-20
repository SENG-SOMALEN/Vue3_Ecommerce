<template>
        <section class="py-28 px-6 lg:px-16 relative overflow-hidden" style="background:linear-gradient(135deg,#0d1225,#0a0e1a);">
      <!-- Background decoration -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5" style="background:#c9a84c; filter:blur(80px); transform:translate(-30%,-30%);"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style="background:#c9a84c; filter:blur(80px); transform:translate(30%,30%);"></div>
      </div>

      <div class="relative z-10 max-w-2xl mx-auto text-center">
        <p class="tracking-[0.3em] text-xs uppercase mb-4" style="color:#c9a84c; font-family:'DM Mono',monospace;">Stay Connected</p>
        <h2 class="text-4xl md:text-5xl font-light mb-4" style="color:#f0ece2;">Exclusive Access,<br><em class="italic">Delivered Daily</em></h2>
        <p class="text-sm mb-10 leading-relaxed" style="color:#9a9580; font-family:'DM Sans',sans-serif;">
          Subscribe for curated drops, early access to new collections, and member-only offers. No spam — only the good stuff.
        </p>

        <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            v-model="emailInput"
            type="email"
            required
            placeholder="your@email.com"
            class="flex-1 px-6 py-4 text-sm outline-none bg-transparent border"
            style="border-color:#1e2440; color:#f0ece2; font-family:'DM Sans',sans-serif; background:#0d1225;"
          />
          <button
            type="submit"
            class="px-8 py-4 text-xs tracking-widest uppercase font-medium whitespace-nowrap transition-all duration-300 hp-subscribe-btn"
            style="background:#c9a84c; color:#0a0e1a; font-family:'DM Mono',monospace;"
          >
            {{ subscribeSuccess ? '✓ Subscribed!' : 'Subscribe' }}
          </button>
        </form>
        <p class="mt-4 text-xs" style="color:#4a4e65; font-family:'DM Mono',monospace;">Unsubscribe at any time · No spam guaranteed</p>
      </div>
    </section>
</template>

<script setup></script>