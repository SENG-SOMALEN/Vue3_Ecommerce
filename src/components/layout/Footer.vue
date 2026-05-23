<template>
  <footer class="bg-white border-t border-gray-100">

    <!-- Main footer -->
    <div class="py-16 text-gray-500 ">
      <div class="max-w-6xl mx-auto px-6">

        <div class="flex flex-wrap justify-between gap-10">

          <!-- Brand -->
          <div class="w-full xl:w-1/4">
            <a href="/" class="block w-56 mb-8 opacity-90 hover:opacity-100 transition">
              <!-- keep your SVG unchanged -->
              <slot />
            </a>

            <p class="text-sm leading-relaxed text-gray-500">
              Tailwindow is a collection of UI Components created using Tailwind CSS Framework.
              The UI Components gives you all of the building blocks you need to build modern interfaces.
            </p>
          </div>

          <!-- Company -->
          <div class="w-full sm:w-auto">
            <h2 class="text-sm font-medium text-gray-900 mb-5 tracking-wide">
              Company
            </h2>

            <ul class="space-y-3 text-sm">
              <li><a class="hover:text-gray-900 transition">About Us</a></li>
              <li><a class="hover:text-gray-900 transition">Terms & Conditions</a></li>
              <li><a class="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a class="hover:text-gray-900 transition">Contact Us</a></li>
            </ul>
          </div>

          <!-- Blog -->
          <div class="w-full sm:w-auto xl:w-1/3">
            <h2 class="text-sm font-medium text-gray-900 mb-5 tracking-wide">
              Blog
            </h2>

            <ul class="space-y-3 text-sm">
              <li><a class="hover:text-gray-900 transition">Getting Started With HTML and CSS</a></li>
              <li><a class="hover:text-gray-900 transition">What Is Flex And When to Use It?</a></li>
              <li><a class="hover:text-gray-900 transition">How TailwindCSS Can Help Your Productivity?</a></li>
              <li><a class="hover:text-gray-900 transition">5 Tips to Make Responsive Website</a></li>
              <li><a class="hover:text-gray-900 font-medium text-gray-700">See More</a></li>
            </ul>
          </div>

          <!-- Social -->
          <div class="w-full sm:w-auto">
            <h2 class="text-sm font-medium text-gray-900 mb-5 tracking-wide">
              Connect With Us
            </h2>

            <div class="flex gap-3">
              <a class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200
                        hover:border-gray-900 hover:text-gray-900 transition">
                <!-- icon -->
              </a>

              <a class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200
                        hover:border-gray-900 hover:text-gray-900 transition">
              </a>

              <a class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200
                        hover:border-gray-900 hover:text-gray-900 transition">
              </a>

              <a class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200
                        hover:border-gray-900 hover:text-gray-900 transition">
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-100 py-6 text-sm text-gray-500">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-2">

        <div>
          Copyright © 2020 - 2022 Tailwindow. All Rights Reserved.
        </div>

        <div class="text-gray-400">
          Made with <span class="text-red-400">♥</span> by Tailwindow.
        </div>

      </div>
    </div>

  </footer>
</template>