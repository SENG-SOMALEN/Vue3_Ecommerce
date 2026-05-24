<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">

      <hr class="border-gray-200 my-10" />

      <div class="flex items-center gap-2 mb-6">
        <span class="text-2xl">❤️</span>
        <h2 class="text-2xl font-bold text-gray-800">My Wishlist (length)</h2>
      </div>

      <div class="bg-white text-center py-12 rounded-xl shadow-sm border border-dashed border-gray-300">
        <span class="text-5xl block mb-4">🛒</span>
        <p class="text-gray-500 text-lg">Your wishlist is empty.</p>
        <p class="text-gray-400 text-sm mt-1">Tap the heart icon on products to save them here.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col justify-between">
          <div>
            <img class="w-full h-40 object-cover" />
            <div class="p-4">
              <h3 class="font-semibold text-gray-700 truncate">name</h3>
              <p class="text-red-500 font-bold mt-1">$</p>
            </div>
          </div>
          
          <div class="p-4 pt-0">
            <button class="w-full text-center text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 py-2 rounded-lg transition">
              Remove Item
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>