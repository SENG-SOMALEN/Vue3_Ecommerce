<template>
  <section
    class="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-6 py-16 overflow-hidden"
  >
    <div
      class="w-full max-w-6xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 grid grid-cols-1 lg:grid-cols-2"
    >
      <!-- LEFT SIDE -->
      <div
        class="relative bg-black text-white p-10 lg:p-16 flex flex-col justify-between overflow-hidden"
      >
        <!-- gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-gray-900 opacity-95"
        ></div>

        <!-- glow -->
        <div
          class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"
        ></div>

        <div class="relative z-10">
          <p class="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
            Welcome Back
          </p>

          <h1
            class="text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            Sign in to continue shopping.
          </h1>

          <p
            class="mt-8 text-gray-400 text-lg leading-relaxed max-w-lg"
          >
            Access your orders, wishlist, exclusive products, and personalized
            shopping experience in one place.
          </p>
        </div>

        <!-- features -->
        <div class="relative z-10 mt-16 space-y-6">
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl"
            >
              🛍️
            </div>

            <div>
              <h4 class="font-medium text-lg">
                Premium Shopping
              </h4>

              <p class="text-gray-400 text-sm mt-1">
                Discover curated products with modern shopping experiences.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl"
            >
              ⚡
            </div>

            <div>
              <h4 class="font-medium text-lg">
                Fast & Responsive
              </h4>

              <p class="text-gray-400 text-sm mt-1">
                Optimized interfaces built using Vue 3 and TailwindCSS.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl"
            >
              🔒
            </div>

            <div>
              <h4 class="font-medium text-lg">
                Secure Account
              </h4>

              <p class="text-gray-400 text-sm mt-1">
                Your account and information stay safe and protected.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="p-8 md:p-14 lg:p-16 flex items-center">
        <div class="w-full">
          <!-- top -->
          <div class="mb-10">
            <p class="uppercase tracking-[0.3em] text-xs text-gray-400 mb-5">
              Sign In
            </p>

            <h2
              class="text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Welcome back.
            </h2>

            <p class="mt-4 text-gray-500 leading-relaxed">
              Sign in with your email and password to access your account.
            </p>
          </div>

          <!-- FORM -->
          <form class="space-y-6">
            <!-- email -->
            <div>
              <label class="text-sm text-gray-500 block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
              />
            </div>

            <!-- password -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-sm text-gray-500">
                  Password
                </label>

                <button
                  type="button"
                  class="text-sm text-gray-400 hover:text-black transition-all duration-300"
                >
                  Forgot password?
                </button>
              </div>

              <div class="relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter your password"
                  class="w-full h-14 px-5 pr-14 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
                />

                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute top-1/2 right-5 -translate-y-1/2 text-gray-400 hover:text-black transition-all duration-300"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>

            <!-- remember -->
            <div class="flex items-center justify-between">
              <label class="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  class="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                />

                <span class="text-sm text-gray-500">
                  Remember me
                </span>
              </label>
            </div>

            <!-- submit -->
            <button
              type="submit"
              class="w-full h-14 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300"
            >
              Sign In
            </button>

            <!-- divider -->
            <div class="relative flex items-center justify-center py-2">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
              </div>

              <span
                class="relative bg-white px-4 text-sm text-gray-400"
              >
                or continue with
              </span>
            </div>

            <!-- social -->
            <div class="grid grid-cols-2 gap-4">
              <button
                type="button"
                class="h-14 rounded-2xl border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span></span>
                <span>Apple</span>
              </button>

              <button
                type="button"
                class="h-14 rounded-2xl border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>G</span>
                <span>Google</span>
              </button>
            </div>

            <!-- signup -->
            <div class="pt-4 text-center">
              <p class="text-gray-500">
                Don’t have an account?

                <button
                  type="button"
                  class="text-black font-medium hover:underline ml-1"
                >
                  Create account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
</script>