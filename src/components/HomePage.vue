<script setup>
import WebNavbar from './elements/WebNavbar.vue'
import WebFooter from './elements/WebFooter.vue'
import CartoonCollectionCard from './elements/CartoonCollectionCard.vue'
</script>

<template>
  <div class="main-display">
    <div class="container mx-auto">
      <web-navbar />
      <!-- main img content -->
      <div class="block md:flex mt-20 ">
        <!-- contact -->
        <div class="w-1/2 px-5">
          <h1 class="text-7xl mt-12">
            discover the <br />
            world of NFT <br />
            with <span class="spartak">SPARTAK</span> <br />
            token
          </h1>
          <p class="text-base font-normal mt-8">
            Do you want to be trendy and have something that no one else has? Then you need our NFT
            pictures. They are real art, created for you. You can be sure that no one can copy or
            steal your picture. You can earn money on your collection, selling or exchanging your
            NFT pictures on the market. But hurry up, because our collection is limited and quickly
            sold out. Don’t miss your chance, buy our NFT pictures right now!
          </p>
          <div class="flex mt-12">
            <button class="bg-button-color px-10 py-2 mr-2 rounded-tr-lg rounded-bl-lg text-black">
              More
            </button>
            <button
              class="rounded-tr-lg px-10 py-2 rounded-bl-lg bg-transparent border-2 border-white"
            >
              buy
            </button>
          </div>
        </div>
        <!-- img -->
        <div class="w-1/2 relative display-img">
          <img src="../assets/icons/main_display_img.svg" alt="display-cartoon" class="mx-auto z-10 relative" />
          <div class="glass-effect h-[300px] w-[60%] absolute -top-3 left-32 z-0" ></div>
          <div class="glass-effect h-full w-[50%] absolute -bottom-16 right-36"></div>
          <div class="absolute top-0 right-20 z-20 w-max flex px-8 py-4 rounded-xl glass-effect">
            <p class="text-2xl font-semibold grid">BID NOW!
              <span class="text-xs font-normal">Latest Collection</span>
            </p>
          </div>
          <div class="absolute bottom-40 right-20 w-max z-20 flex px-4 py-4 rounded-xl glass-effect">
            <div>
              <img src="../assets/icons/twoline-img.svg" alt="line-img">
            </div>
            <div>
              <p class="text-3xl font-semibold">HAPE #6959</p>
              <span class="text-xs text-black">HAPES PRIME</span>
            </div>
          </div>
          <div class="absolute bottom-6 left-9  flex justify-between w-[334px] z-20 px-8 py-4 rounded-xl glass-effect" id="parallelogram">
            <p class="grid mr-8">
              <span class="font-semibold text-2xl">5.758 ETH</span>
              <span>Latest Bid</span>
            </p>
            <p class="grid">
              <span>$5758.31</span>
              <span class="text-green-500">+12.45%</span>
            </p>
          </div>
          <div class="absolute -bottom-20 left-44 z-10 w-max flex px-6 py-2 rounded-xl glass-effect">
            <p class="text-lg font-semibold grid">Auction
              <span class="text-sm font-medium">End In</span>
            </p>
          </div>
          <div class="absolute -bottom-28 right-44 z-10 w-max flex px-12 py-4 rounded-xl glass-effect">
              <p class="grid">
                <span class="text-3xl font-medium">17</span>
                <span class="text-sm font-normal">hours</span> 
              </p>
              <span class="text-3xl px-2">:</span>
              <p class="grid">
                <span class="text-3xl font-medium">56</span>
                <span class="text-sm font-normal">Minutes</span> 
              </p>
              <span class="text-3xl px-2">:</span>
              <p class="grid">
                <span class="text-3xl font-medium">03</span>
                <span class="text-sm font-normal">Seconds</span> 
              </p> 
          </div>
        </div>
      </div>
      <!-- cards -->
      <div class="flex justify-between my-40">
        <div class="flex">
          <cartoon-collection-card
            title="Dartcat"
            titleCount="#234T67"
            currentTime="5.54 ETH"
            endingTime="21h 47m"
            cartoonNumber="1"
          />
          <cartoon-collection-card
            title="Skeletok"
            titleCount="#234T67"
            currentTime="2.90 ETH"
            endingTime="71h 19m"
            cartoonNumber="2"
          />
        </div>
        <div class="p-14">
          <p>
            NFT stands for non-fungible token. It is a unique digital token that is recorded on a
            blockchain and verifies ownership and authenticity. It cannot be copied or replaced by
            other tokens. It contains references to digital files, such as art, music, photos or
            videos, which can be linked to real or imaginary assets. It differs from
            cryptocurrencies, which are fungible and can be exchanged for one another. Owning an NFT
            does not mean having rights to the associated file or its use, as this depends on the
            legal status of the NFT and the file. NFTs can be created, sold and exchanged on digital
            markets, where they can have high value or none. NFTs are criticized for their
            environmental impact, as some types of blockchain consume a lot of energy and create a
            large carbon footprint. NFTs are also criticized for their speculative nature, as their
            price can fluctuate greatly or fall to zero.
          </p>
          <div class="mt-8 flex justify-between bg-[#382F5E] p-8 rounded-tr-3xl rounded-bl-3xl">
            <p class="grid">
              <span class="text-4xl">21k+</span>
              <span class="text-xl text-gray-500">Working</span>
            </p>
            <p class="grid">
              <span class="text-4xl">11k+</span>
              <span class="text-xl text-gray-500">At the aution</span>
            </p>
            <p class="grid">
              <span class="text-4xl">3k+</span>
              <span class="text-xl text-gray-500">Arts</span>
            </p>
          </div>
        </div>
      </div>
      <!-- company -->
      <div class="company-cards">
        <div class="container my-44 ">
          <ul class="flex items-center flex-wrap justify-center px-40">
            <li class="mx-8 my-3"><img src="../assets/icons/MetaMask.svg" alt="MetaMask" /></li>
            <li class="mx-8 my-3"><img src="../assets/icons/trustwllet.svg" alt="trustwllet" /></li>
            <li class="mx-8 my-3">
              <img src="../assets/icons/wallet-contact.svg" alt="wallet-contact" />
            </li>
            <li class="mx-8 my-3"><img src="../assets/icons/Exodus.svg" alt="Exodus" /></li>
            <li class="mx-8 my-3"><img src="../assets/icons/safepal.svg" alt="safepal" /></li>
          </ul>
        </div>
      </div>
      <!-- top collector -->
      <div class="mt-24">
        <h2 class="collction text-7xl text-center font-medium">TOP COLLECTIONS</h2>
        <ul class="flex justify-center">
          <li class="text-xl px-5 py-3 mx-5 my-8">Art</li>
          <li class="text-xl px-5 py-3 mx-5 my-8">Collectibles</li>
          <li class="text-xl px-5 py-3 mx-5 my-8">Metaverse</li>
          <li class="text-xl px-5 py-3 mx-5 my-8">Virtual Worlds</li>
          <li class="text-xl px-5 py-3 mx-5 my-8">Sports</li>
          <li class="text-xl px-5 py-3 mx-5 my-8">Music</li>
        </ul>
        <div class="flex flex-wrap">
          <cartoon-collection-card
            title="Dartcat"
            titleCount="#234T67"
            currentTime="5.54 ETH"
            endingTime="21h 47m"
            cartoonNumber="1"
          />
          <cartoon-collection-card
            title="Skeletok"
            titleCount="#234T67"
            currentTime="2.90 ETH"
            endingTime="71h 19m"
            cartoonNumber="2"
          />
          <cartoon-collection-card
            title="COSMOcat"
            titleCount="#F34T67"
            currentTime="0.54 ETH"
            endingTime="27h 47m"
            cartoonNumber="3"
          />
          <cartoon-collection-card
            title="Skeletok"
            titleCount="#994T57"
            currentTime="2.81 ETH"
            endingTime="41h 21m"
            cartoonNumber="4"
          />

          <cartoon-collection-card
            title="DRAcat"
            titleCount="#234T67"
            currentTime="5.54 ETH"
            endingTime="21h 47m"
            cartoonNumber="5"
          />
          <cartoon-collection-card
            title="GHOSTCAT"
            titleCount="#881T77"
            currentTime="1.90 ETH"
            endingTime="11h 19m"
            cartoonNumber="6"
          />
          <cartoon-collection-card
            title="KNIGHTcat"
            titleCount="#034T67"
            currentTime="7.54 ETH"
            endingTime="91h 47m"
            cartoonNumber="7"
          />
          <cartoon-collection-card
            title="KINGCAT"
            titleCount="#T34T67"
            currentTime="2.21 ETH"
            endingTime="31h 1m"
            cartoonNumber="8"
          />
        </div>
      </div>
      <!-- working step -->
      <div class="my-40">
        <h1 class="text-center text-3xl font-medium">Everything works in 3 steps</h1>
        <div class="flex justify-evenly mt-24">
          <!-- step-1 -->
          <div
            class="flex justify-center items-center flex-col bg-[#382F5E] p-8 w-[338px] h-[337px] rounded-3xl"
          >
            <img class="card-img-top" src="../assets/icons/worker.svg" alt="worker" />
            <h4 class="card-title text-center text-2xl">work</h4>
          </div>
          <!-- step-2 -->
          <div
            class="flex justify-center items-center flex-col bg-[#382F5E] p-8 w-[338px] h-[337px] rounded-3xl"
          >
            <img class="card-img-top" src="../assets/icons/shop.svg" alt="shop" />
            <h4 class="card-title text-center text-2xl">sell it</h4>
          </div>
          <!-- step-3 -->
          <div
            class="flex justify-center items-center flex-col bg-[#382F5E] p-8 w-[338px] h-[337px] rounded-3xl"
          >
            <img class="card-img-top" src="../assets/icons/sell.svg" alt="sell" />
            <h4 class="card-title text-center text-2xl">sell</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="px-40 bg-[#140E3A]">
      <!-- get updates -->
      <div class="py-32 border-b border-gray-100">
        <h1 class="text-center text-5xl font-medium">Get More Updates</h1>
        <p class="text-center pt-8 text-sm font-medium">
          Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and
          tips and tricks
        </p>
        <div class="bg-white mt-6 flex justify-between rounded-3xl p-1 mx-auto w-1/2">
          <input type="email" class="w-3/4 p-2 text-black rounded-3xl focus-visible:outline-none" />
          <button class="bg-button-color px-8 py-2 rounded-3xl text-right">I'm In</button>
        </div>
      </div>
      <!-- footer -->
      <div>
        <web-footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
