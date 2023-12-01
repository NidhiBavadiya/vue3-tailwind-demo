<script setup>
import CartoonCollectionCard from './CartoonCollectionCard.vue'
</script>
<template>
    <div>
        <!-- tabs -->
        <div class="text-xl font-medium text-center text-white my-12">
          <ul class="flex justify-center flex-wrap -mb-px">
            <li class="me-2">
              <a
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                aria-current="page"
                >Art</a
              >
            </li>
            <li class="me-2">
              <a
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >Collectibles</a
              >
            </li>
            <li class="me-2">
              <a
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >Metaverse</a
              >
            </li>
            <li class="me-2">
              <a
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >Virtual Worlds</a
              >
            </li>
            <li class="me-2">
              <a
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >Sports</a
              >
            </li>
            <li class="me-2">
              <a
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >Music</a
              >
            </li>
          </ul>
        </div>

         <div class="flex justify-center flex-wrap">
          <cartoon-collection-card
            title="Dartcat"
            titleCount="#234T67"
            currentTime="5.54 ETH"
            endingTime="21h 47m"
            cartoonNumber= 1
          />
          <cartoon-collection-card
            title="Skeletok"
            titleCount="#234T67"
            currentTime="2.90 ETH"
            endingTime="71h 19m"
            cartoonNumber= 2
          />
          <cartoon-collection-card
            title="COSMOcat"
            titleCount="#F34T67"
            currentTime="0.54 ETH"
            endingTime="27h 47m"
            cartoonNumber= 3
          />
          <cartoon-collection-card
            title="Skeletok"
            titleCount="#994T57"
            currentTime="2.81 ETH"
            endingTime="41h 21m"
            cartoonNumber= 4
          />

          <cartoon-collection-card
            title="DRAcat"
            titleCount="#234T67"
            currentTime="5.54 ETH"
            endingTime="21h 47m"
            cartoonNumber= 5
          />
          <cartoon-collection-card
            title="GHOSTCAT"
            titleCount="#881T77"
            currentTime="1.90 ETH"
            endingTime="11h 19m"
            cartoonNumber= 6
          />
          <cartoon-collection-card
            title="KNIGHTcat"
            titleCount="#034T67"
            currentTime="7.54 ETH"
            endingTime="91h 47m"
            cartoonNumber= 7
          />
          <cartoon-collection-card
            title="KINGCAT"
            titleCount="#T34T67"
            currentTime="2.21 ETH"
            endingTime="31h 1m"
            cartoonNumber= 8
          />
        </div> 
    </div>
</template>
<style scoped>

</style>