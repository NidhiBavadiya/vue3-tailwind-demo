<script setup>
import MoreButton from './MoreButton.vue';
</script>
<template>
  <div>
    <div class="mx-3" v-if="false">
      <nav class="flex justify-between items-center px-5">
        <div>
          <img src="../../assets/icons/spartak_main_logo.svg" alt="logo" />
        </div>
        <div class="hidden md:block">
          <ul class="flex">
            <li class="px-2 py-1 mx-3">Marketplace</li>
            <li class="px-2 py-1 mx-3">Collection</li>
            <li class="px-2 py-1 mx-3">Community</li>
            <li class="px-2 py-1 mx-3">Create</li>
          </ul>
        </div>
        <div class="hidden md:block">
          <button class="bg-button-color px-4 py-2 rounded-tr-lg rounded-bl-lg">
            Connect Wallet
          </button>
        </div>
        <div class="block md:hidden">
          <img src="../../assets/icons/threeline_icon.svg" alt="threeline" />
        </div>
      </nav>
    </div>
    <div>
      <nav class="bg-transprent w-full">
        <div class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
          <img src="../../assets/icons/spartak_main_logo.svg" alt="logo" />
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <more-button buttonName=" Connect Wallet"/>
            <!-- nav-button show in responsive -->

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-white"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transprent"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded bg-transparent md:text-[#9173D1] md:p-0"
                  aria-current="page"
                  >Marketplace</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9173D1] md:p-0 md:dark:hover:text-[#9173D1] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Collection</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9173D1] md:p-0 md:dark:hover:text-[#9173D1] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Community</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9173D1] md:p-0 md:dark:hover:text-[#9173D1] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Create</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
