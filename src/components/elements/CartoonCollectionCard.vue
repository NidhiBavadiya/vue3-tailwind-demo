<script setup>
defineProps({
  title: String,
  titleCount: String,
  currentTime:String,
  endingTime:String,
  cartoonNumber:Number,
})
</script>

<template>
    <div>
        <div class=" card cartoon-card overflow-hidden relative lg:w-[383px] md:w-[350px] w-[290px] bg-[#382F5E] transition duration-700 ease-in-out hover:bg-[#9489c163] max-h-[500px] p-4 m-2 rounded-lg">
            <div calss="mx-auto">
                <img src="../../assets/icons/cartoon-char-1.svg" alt="cartoon" v-if ="cartoonNumber == 1" class="z-20">
                <img src="../../assets/icons/cartoon-char-2.svg" alt="cartoon" v-if ="cartoonNumber == 2" class="z-20">
                <img src="../../assets/icons/cartoon-char-3.svg" alt="cartoon" v-if ="cartoonNumber == 3" class="z-20">
                <img src="../../assets/icons/cartoon-char-4.svg" alt="cartoon" v-if ="cartoonNumber == 4" class="z-20">
                <img src="../../assets/icons/cartoon-char-5.svg" alt="cartoon" v-if ="cartoonNumber == 5" class="z-20">
                <img src="../../assets/icons/cartoon-char-6.svg" alt="cartoon" v-if ="cartoonNumber == 6" class="z-20">
                <img src="../../assets/icons/cartoon-char-7.svg" alt="cartoon" v-if ="cartoonNumber == 7" class="z-20">
                <img src="../../assets/icons/cartoon-char-8.svg" alt="cartoon" v-if ="cartoonNumber == 8" class="z-20">
                <div class="card-body px-2">
                    <h4 class="card-title flex justify-between pt-4">
                        <span class="text-base">{{ title }} </span>
                        <span>{{ titleCount }} </span>
                    </h4>
                    <div class="flex justify-between pt-3">
                        <p class="card-text grid"> <span class="text-sm text-gray-500">Current Bid</span><span class="text-base">{{ currentTime }}</span></p>
                        <p class="card-text grid"><span class="text-sm text-gray-500">Ending in</span><span class="text-base">{{ endingTime }} </span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>