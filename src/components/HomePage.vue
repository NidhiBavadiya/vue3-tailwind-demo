<script setup>
import WebNavbar from './elements/WebNavbar.vue'
import WebFooter from './elements/WebFooter.vue'
import CartoonCollectionCard from './elements/CartoonCollectionCard.vue'
import BuyButton from './elements/BuyButton.vue'
import MoreButton from './elements/MoreButton.vue'

document.addEventListener('DOMContentLoaded', function () {
  // Items
  var card = document.querySelector('.display-img')
  var mainHeader = document.querySelector('.main-header-content')
  var glass = document.querySelector('.glass-effect')

  // Moving Animation Event
  mainHeader.addEventListener('mousemove', function (e) {
    let xAxis = (window.innerWidth / 2 - e.clientX) / 25
    let yAxis = (window.innerHeight / 2 - e.clientY) / 25
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  })

  // Animate on Hover
  mainHeader.addEventListener('mouseenter', function () {
    card.classList.add('has-transform')
    glass.classList.add('has-transform')
  })

  mainHeader.addEventListener('mouseleave', function () {
    // Pop Back on mouseleave
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    card.classList.remove('has-transform')
    glass.classList.remove('has-transform')
  })
})
</script>

<template>
  <div>
    <!-- display header & main containt -->
    <div>
      <web-navbar class="container mx-auto" />
      <!-- main img content -->
      <div class="block xl:flex mt-20 container mx-auto">
        <!-- contact -->
        <div class="xl:w-1/2 px-5 text-center xl:text-left">
          <h1 class="text-5xl md:text-7xl mt-12">
            discover the <br />
            world of NFT <br />
            with <span class="spartak">SPARTAK</span> <br />
            token
          </h1>
          <p class="text-sm md:text-base font-normal mt-8">
            Do you want to be trendy and have something that no one else has? Then you need our NFT
            pictures. They are real art, created for you. You can be sure that no one can copy or
            steal your picture. You can earn money on your collection, selling or exchanging your
            NFT pictures on the market. But hurry up, because our collection is limited and quickly
            sold out. Don’t miss your chance, buy our NFT pictures right now!
          </p>
          <div class="flex xl:justify-start justify-center mt-12">
            <more-button buttonName="More" />
            <buy-button buttonName="Buy" />
          </div>
        </div>
        <!-- img -->
        <div class="main-header-content">
          <div class="mx-auto mt-12 xl:mt-0 xl:w-1/2 xl:min-w-[800px] relative display-img">
            <img
              src="../assets/icons/main_display_img.svg"
              alt="display-cartoon"
              class="mx-auto z-10 relative hidden xl:block"
            />
            <img src="../assets/icons/header-display-img.svg" alt="game" class="xl:hidden block" />
            <div
              class="glass-effect h-[300px] md:w-[60%] w-[70%] absolute xl:-top-3 xl:left-32 z-0 hidden xl:block"
            ></div>
            <div
              class="glass-effect h-full md:w-[50%] w-[70%] max-h-[600px] absolute -bottom-16 right-36 hidden xl:block"
            ></div>
            <div
              class="absolute top-0 right-20 z-20 w-max px-8 py-4 rounded-xl glass-effect card-3d-effect hidden xl:flex"
            >
              <p class="text-2xl font-semibold grid">
                BID NOW!
                <span class="text-xs font-normal">Latest Collection</span>
              </p>
            </div>
            <div
              class="absolute bottom-40 right-20 w-max z-20 px-4 py-4 rounded-xl glass-effect hidden xl:flex"
            >
              <div>
                <img src="../assets/icons/twoline-img.svg" alt="line-img" />
              </div>
              <div>
                <p class="text-3xl font-semibold">HAPE #6959</p>
                <span class="text-xs text-black">HAPES PRIME</span>
              </div>
            </div>
            <div
              class="absolute bottom-6 left-9 justify-between w-[334px] z-20 px-8 py-4 rounded-xl glass-effect hidden xl:flex"
              id="parallelogram"
            >
              <p class="grid mr-8">
                <span class="font-semibold text-2xl">5.758 ETH</span>
                <span>Latest Bid</span>
              </p>
              <p class="grid">
                <span>$5758.31</span>
                <span class="text-green-500">+12.45%</span>
              </p>
            </div>
            <div
              class="absolute -bottom-20 left-44 z-10 w-max px-6 py-2 rounded-xl glass-effect hidden xl:flex"
            >
              <p class="text-lg font-semibold grid">
                Auction
                <span class="text-sm font-medium">End In</span>
              </p>
            </div>
            <div
              class="absolute -bottom-28 right-44 z-10 w-max px-12 py-4 rounded-xl glass-effect hidden xl:flex"
            >
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
      </div>

      <div class="relative">
        <!-- cards -->
        <div
          class="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between xl:my-40 my-20 container mx-auto"
        >
          <div class="flex flex-wrap justify-center xl:justify-start md:flex-nowrap">
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
          </div>
          <div class="p-8 xl:text-left text-center">
            <p>
              NFT stands for non-fungible token. It is a unique digital token that is recorded on a
              blockchain and verifies ownership and authenticity. It cannot be copied or replaced by
              other tokens. It contains references to digital files, such as art, music, photos or
              videos, which can be linked to real or imaginary assets. It differs from
              cryptocurrencies, which are fungible and can be exchanged for one another. Owning an
              NFT does not mean having rights to the associated file or its use, as this depends on
              the legal status of the NFT and the file. NFTs can be created, sold and exchanged on
              digital markets, where they can have high value or none. NFTs are criticized for their
              environmental impact, as some types of blockchain consume a lot of energy and create a
              large carbon footprint. NFTs are also criticized for their speculative nature, as
              their price can fluctuate greatly or fall to zero.
            </p>
            <div
              class="mt-8 flex justify-between bg-[#382F5E] md:p-8 p-4 rounded-tr-3xl rounded-bl-3xl max-w-[700px] mx-auto"
            >
              <p class="grid px-4">
                <span class="text-xl md:text-4xl">21k+</span>
                <span class="text-sm md:text-xl text-gray-500">Working</span>
              </p>
              <p class="grid px-4">
                <span class="text-xl md:text-4xl">11k+</span>
                <span class="text-sm md:text-xl text-gray-500">At the aution</span>
              </p>
              <p class="grid px-4">
                <span class="text-xl md:text-4xl">3k+</span>
                <span class="text-sm md:text-xl text-gray-500">Arts</span>
              </p>
            </div>
          </div>
        </div>

        <!-- company -->
        <div class="company-cards mx-8">
          <div class="container mx-auto">
            <!--  Carousel 1    -->
            <div class="slider h-[60px] relative w-full grid place-items-center overflow-hidden">
              <div class="slide-track">
                <div class="slide"><img src="../assets/icons/MetaMask.svg" alt="MetaMask" /></div>
                <div class="slide">
                  <img src="../assets/icons/trustwllet.svg" alt="trustwllet" />
                </div>
                <div class="slide">
                  <img src="../assets/icons/wallet-contact.svg" alt="wallet-contact" />
                </div>
                <div class="slide"><img src="../assets/icons/Exodus.svg" alt="Exodus" /></div>
                <div class="slide"><img src="../assets/icons/safepal.svg" alt="safepal" /></div>
                <!--  slides doubled (duplicate) -->
                <div class="slide"><img src="../assets/icons/MetaMask.svg" alt="MetaMask" /></div>
                <div class="slide">
                  <img src="../assets/icons/trustwllet.svg" alt="trustwllet" />
                </div>
                <div class="slide">
                  <img src="../assets/icons/wallet-contact.svg" alt="wallet-contact" />
                </div>
                <div class="slide"><img src="../assets/icons/Exodus.svg" alt="Exodus" /></div>
                <div class="slide"><img src="../assets/icons/safepal.svg" alt="safepal" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- top collector -->
      <div class="mt-24 container mx-auto">
        <h2 class="collction text-4xl lg:text-7xl px-2 text-center font-medium">TOP COLLECTIONS</h2>

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

      <!-- working step -->
      <div class="my-40 container mx-auto">
        <h1 class="text-center text-3xl px-2 font-medium">Everything works in 3 steps</h1>
        <div class="flex justify-evenly md:flex-nowrap flex-wrap mt-24">
          <!-- step-1 -->
          <div
            class="flex justify-center items-center flex-col bg-[#382F5E] md:p-8 p-12 m-3 w-[250px] h-[250px] md:w-[338px] md:h-[337px] rounded-3xl"
          >
            <img class="card-img-top" src="../assets/icons/worker.svg" alt="worker" />
            <h4 class="card-title text-center text-2xl">work</h4>
          </div>
          <!-- step-2 -->
          <div
            class="flex justify-center items-center flex-col bg-[#382F5E] md:p-8 p-12 m-3 w-[250px] h-[250px] md:w-[338px] md:h-[337px] rounded-3xl"
          >
            <img class="card-img-top" src="../assets/icons/shop.svg" alt="shop" />
            <h4 class="card-title text-center text-2xl">sell it</h4>
          </div>
          <!-- step-3 -->
          <div
            class="flex justify-center items-center flex-col bg-[#382F5E] md:p-8 p-12 m-3 w-[250px] h-[250px] md:w-[338px] md:h-[337px] rounded-3xl"
          >
            <img class="card-img-top" src="../assets/icons/sell.svg" alt="sell" />
            <h4 class="card-title text-center text-2xl">sell</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="px-5 md:px-20 lg:px-30 xl:px-40 bg-[#140E3A]">
      <!-- get updates -->
      <div class="py-32 border-b border-gray-100">
        <h1 class="text-center text-5xl font-medium">Get More Updates</h1>
        <p class="text-center pt-8 text-sm font-medium">
          Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and
          tips and tricks
        </p>
        <div class="bg-white mt-6 flex min-w-max justify-between rounded-3xl p-1 mx-auto w-1/2">
          <input
            type="email"
            class="w-3/4 border-0 focus:outline-none p-2 min-w-[200px] text-black rounded-3xl focus-visible:outline-none"
          />
          <button
            class="bg-button-color px-4 md:px-8 py-2 rounded-3xl text-right whitespace-nowrap"
          >
            I'm In
          </button>
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
