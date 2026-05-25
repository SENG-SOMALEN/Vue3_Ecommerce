<template>
  <section class="min-h-screen bg-[#f5f5f7] text-black overflow-hidden">
    <!-- HERO -->
    <div class="border-b border-gray-200 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div
          class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <!-- left -->
          <div>
            <p class="uppercase tracking-[0.35em] text-xs text-gray-500 mb-5">
              My Account
            </p>

            <h1
              class="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
            >
              Welcome back,
              <br />
              Customer.
            </h1>

            <p
              class="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed"
            >
              Manage your profile, track orders, save favorites, and control
              your shopping experience in one place.
            </p>
          </div>

          <!-- profile -->
          <div
            class="bg-[#f5f5f7] border border-gray-200 rounded-[2rem] p-6 flex items-center gap-5 min-w-[320px]"
          >
            <div
              class="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl font-semibold"
            >
              S
            </div>

            <div>
              <h3 class="text-2xl font-semibold">
                Customer
              </h3>

              <p class="text-gray-500 mt-1">
                Premium Member
              </p>

              <div class="flex items-center gap-2 mt-3">
                <span
                  class="px-3 py-1 rounded-full bg-black text-white text-xs"
                >
                  Verified
                </span>

                <span
                  class="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs"
                >
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DASHBOARD -->
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <!-- SIDEBAR -->
        <aside
          class="xl:col-span-1 bg-white rounded-[2rem] border border-gray-200 p-6 h-fit sticky top-6"
        >
          <!-- nav -->
          <div class="space-y-2">
            <button
              v-for="item in sidebarItems"
              :key="item.id"
              class="w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300"
              :class="
                item.active
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-gray-600'
              "
            >
              <span class="text-xl">
                {{ item.icon }}
              </span>

              <span class="font-medium">
                {{ item.name }}
              </span>
            </button>
          </div>

          <!-- support -->
          <div
            class="mt-10 rounded-[2rem] bg-black text-white p-6 overflow-hidden relative"
          >
            <div
              class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"
            ></div>

            <div class="relative z-10">
              <p class="text-sm text-gray-300 mb-3">
                Need help?
              </p>

              <h4 class="text-2xl font-semibold leading-tight">
                Customer
                <br />
                Support
              </h4>

              <button
                class="mt-6 w-full h-12 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </aside>

        <!-- CONTENT -->
        <div class="xl:col-span-3 space-y-8">
          <!-- stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- card -->
            <div
              class="bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300"
            >
              <div
                class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl mb-6"
              >
                🛍️
              </div>

              <h3 class="text-4xl font-semibold">
                24
              </h3>

              <p class="text-gray-500 mt-2">
                Total Orders
              </p>
            </div>

            <!-- card -->
            <div
              class="bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300"
            >
              <div
                class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl mb-6"
              >
                ❤️
              </div>

              <h3 class="text-4xl font-semibold">
                18
              </h3>

              <p class="text-gray-500 mt-2">
                Wishlist Items
              </p>
            </div>

            <!-- card -->
            <div
              class="bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300"
            >
              <div
                class="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl mb-6"
              >
                ⭐
              </div>

              <h3 class="text-4xl font-semibold">
                Gold
              </h3>

              <p class="text-gray-500 mt-2">
                Membership
              </p>
            </div>
          </div>

          <!-- PROFILE -->
          <div
            class="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10"
          >
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10"
            >
              <div>
                <p
                  class="uppercase tracking-[0.3em] text-xs text-gray-400 mb-3"
                >
                  Profile
                </p>

                <h2 class="text-3xl md:text-4xl font-semibold">
                  Personal Information
                </h2>
              </div>

              <button
                class="h-12 px-6 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Edit Profile
              </button>
            </div>

            <!-- form -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- input -->
              <div>
                <label class="text-sm text-gray-500 block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value="Customer"
                  class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>

              <!-- input -->
              <div>
                <label class="text-sm text-gray-500 block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value="customer@example.com"
                  class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>

              <!-- input -->
              <div>
                <label class="text-sm text-gray-500 block mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  value="+855 12 345 678"
                  class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>

              <!-- input -->
              <div>
                <label class="text-sm text-gray-500 block mb-2">
                  Location
                </label>

                <input
                  type="text"
                  value="Phnom Penh, Cambodia"
                  class="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:border-black transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <!-- ORDERS -->
          <div
            class="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10"
          >
            <!-- header -->
            <div
              class="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10"
            >
              <div>
                <p
                  class="uppercase tracking-[0.3em] text-xs text-gray-400 mb-3"
                >
                  Orders
                </p>

                <h2 class="text-3xl md:text-4xl font-semibold">
                  Recent Purchases
                </h2>
              </div>

              <button
                class="h-12 px-6 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                View All
              </button>
            </div>

            <!-- table -->
            <div class="space-y-4">
              <!-- row -->
              <div
                v-for="order in orders"
                :key="order.id"
                class="border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
              >
                <div
                  class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
                >
                  <!-- left -->
                  <div class="flex items-center gap-5">
                    <div
                      class="w-20 h-20 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-3xl"
                    >
                      {{ order.icon }}
                    </div>

                    <div>
                      <h4 class="text-xl font-semibold">
                        {{ order.product }}
                      </h4>

                      <p class="text-gray-500 mt-1">
                        Order #{{ order.orderNumber }}
                      </p>
                    </div>
                  </div>

                  <!-- right -->
                  <div
                    class="flex flex-col sm:flex-row sm:items-center gap-5"
                  >
                    <div>
                      <p class="text-sm text-gray-400">
                        Status
                      </p>

                      <span
                        class="inline-flex mt-2 px-4 py-2 rounded-full text-sm"
                        :class="
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        "
                      >
                        {{ order.status }}
                      </span>
                    </div>

                    <div>
                      <p class="text-sm text-gray-400">
                        Total
                      </p>

                      <h5 class="text-xl font-semibold mt-1">
                        ${{ order.price }}
                      </h5>
                    </div>

                    <button
                      class="h-12 px-6 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SETTINGS -->
          <div
            class="bg-black text-white rounded-[2rem] p-8 md:p-10 overflow-hidden relative"
          >
            <div
              class="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            ></div>

            <div class="relative z-10">
              <p
                class="uppercase tracking-[0.3em] text-xs text-gray-400 mb-4"
              >
                Settings
              </p>

              <h2
                class="text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
              >
                Manage your account preferences.
              </h2>

              <p
                class="mt-6 text-gray-300 max-w-2xl leading-relaxed"
              >
                Control notifications, security settings, addresses, and payment
                methods for a personalized shopping experience.
              </p>

              <div class="mt-10 flex flex-wrap gap-4">
                <button
                  class="px-7 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  Account Settings
                </button>

                <button
                  class="px-7 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Payment Methods
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sidebarItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: '🏠',
    active: true,
  },
  {
    id: 2,
    name: 'Orders',
    icon: '📦',
    active: false,
  },
  {
    id: 3,
    name: 'Wishlist',
    icon: '❤️',
    active: false,
  },
  {
    id: 4,
    name: 'Addresses',
    icon: '📍',
    active: false,
  },
  {
    id: 5,
    name: 'Settings',
    icon: '⚙️',
    active: false,
  },
]

const orders = [
  {
    id: 1,
    product: 'Wireless Headphones',
    orderNumber: '845392',
    status: 'Delivered',
    price: '249',
    icon: '🎧',
  },
  {
    id: 2,
    product: 'Smart Watch Series',
    orderNumber: '845871',
    status: 'Processing',
    price: '399',
    icon: '⌚',
  },
]
</script>