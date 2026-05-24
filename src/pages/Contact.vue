<template>
  <section class="bg-white text-black overflow-hidden">
    <!-- HERO -->
    <div class="relative border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36 text-center">
        <p
          class="uppercase tracking-[0.3em] text-xs text-gray-500 mb-5"
        >
          Contact Us
        </p>

        <h1
          class="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
        >
          We’re here to help.
        </h1>

        <p
          class="mt-6 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed"
        >
          Questions about orders, products, shipping, or your account?
          Our support team is available anytime to assist you.
        </p>

        <div
          class="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact-form"
            class="px-7 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
          >
            Send Message
          </a>

          <button
            class="px-7 py-3 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Live Support
          </button>
        </div>
      </div>
    </div>

    <!-- CONTACT INFO -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- card -->
        <div
          class="rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6"
          >
            📞
          </div>

          <h3 class="text-2xl font-semibold mb-3">
            Call Us
          </h3>

          <p class="text-gray-500 leading-relaxed mb-5">
            Speak directly with our support team for quick assistance.
          </p>

          <div class="space-y-1 text-sm">
            <p>+855 12 345 678</p>
            <p class="text-gray-400">
              Mon — Fri / 8AM — 8PM
            </p>
          </div>
        </div>

        <!-- card -->
        <div
          class="rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6"
          >
            ✉️
          </div>

          <h3 class="text-2xl font-semibold mb-3">
            Email Support
          </h3>

          <p class="text-gray-500 leading-relaxed mb-5">
            Send us your questions and we’ll respond within 24 hours.
          </p>

          <div class="space-y-1 text-sm">
            <p>support@luxestore.com</p>
            <p class="text-gray-400">
              Available every day
            </p>
          </div>
        </div>

        <!-- card -->
        <div
          class="rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6"
          >
            📍
          </div>

          <h3 class="text-2xl font-semibold mb-3">
            Our Store
          </h3>

          <p class="text-gray-500 leading-relaxed mb-5">
            Visit our flagship experience store and explore the latest products.
          </p>

          <div class="space-y-1 text-sm">
            <p>Phnom Penh, Cambodia</p>
            <p class="text-gray-400">
              Open daily / 9AM — 10PM
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- FORM SECTION -->
    <div
      id="contact-form"
      class="bg-[#f5f5f7] border-y border-gray-200"
    >
      <div
        class="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <!-- left -->
        <div>
          <p class="uppercase tracking-[0.3em] text-xs text-gray-500 mb-5">
            Customer Care
          </p>

          <h2
            class="text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Let’s start a conversation.
          </h2>

          <p class="mt-6 text-gray-500 leading-relaxed max-w-lg">
            Whether you need help with an order, product recommendation,
            delivery issue, or anything else — our team is ready to assist.
          </p>

          <!-- small info -->
          <div class="mt-10 space-y-6">
            <div class="flex gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm"
              >
                🚚
              </div>

              <div>
                <h4 class="font-medium">
                  Fast Delivery Support
                </h4>

                <p class="text-sm text-gray-500 mt-1">
                  Track and manage your orders anytime.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm"
              >
                🔒
              </div>

              <div>
                <h4 class="font-medium">
                  Secure Assistance
                </h4>

                <p class="text-sm text-gray-500 mt-1">
                  Your information is always protected and private.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm"
              >
                💬
              </div>

              <div>
                <h4 class="font-medium">
                  Premium Support
                </h4>

                <p class="text-sm text-gray-500 mt-1">
                  Dedicated customer care for every purchase.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div
          class="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-200"
        >
          <form class="space-y-6">
            <!-- name -->
            <div>
              <label class="text-sm text-gray-500 mb-2 block">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
              />
            </div>

            <!-- email -->
            <div>
              <label class="text-sm text-gray-500 mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
              />
            </div>

            <!-- subject -->
            <div>
              <label class="text-sm text-gray-500 mb-2 block">
                Subject
              </label>

              <input
                type="text"
                placeholder="Order issue, support, product..."
                class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
              />
            </div>

            <!-- message -->
            <div>
              <label class="text-sm text-gray-500 mb-2 block">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                class="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <!-- button -->
            <button
              type="submit"
              class="w-full h-14 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="max-w-5xl mx-auto px-6 lg:px-10 py-24">
      <div class="text-center mb-16">
        <p class="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
          FAQ
        </p>

        <h2 class="text-4xl md:text-5xl font-semibold tracking-tight">
          Frequently asked questions.
        </h2>
      </div>

      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
        >
          <div class="flex justify-between items-start gap-4">
            <div>
              <h4 class="text-lg font-medium">
                {{ faq.question }}
              </h4>

              <p class="text-gray-500 mt-3 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>

            <span class="text-2xl text-gray-400">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    id: 1,
    question: 'How long does shipping take?',
    answer:
      'Orders are usually processed within 1–2 business days and delivered depending on your location.',
  },
  {
    id: 2,
    question: 'Can I return or exchange products?',
    answer:
      'Yes. We offer easy returns and exchanges within 14 days after receiving your order.',
  },
  {
    id: 3,
    question: 'How can I track my order?',
    answer:
      'After your order is shipped, you will receive a tracking link through email.',
  },
]
</script>