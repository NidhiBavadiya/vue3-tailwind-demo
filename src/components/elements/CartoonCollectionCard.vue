<script setup>
defineProps({
  title: String,
  titleCount: String,
  currentTime:String,
  endingTime:String,
  cartoonNumber :Number,
})
</script>

<template>
    <div class="card w-[383px] bg-[#382F5E] p-4 m-2 rounded-lg">
        <div calss="mx-auto">
            <img src="../../assets/icons/cartoon-char-1.svg" alt="cartoon" v-if ="cartoonNumber == 1">
            <img src="../../assets/icons/cartoon-char-2.svg" alt="cartoon" v-if ="cartoonNumber == 2">
            <img src="../../assets/icons/cartoon-char-3.svg" alt="cartoon" v-if ="cartoonNumber == 3">
            <img src="../../assets/icons/cartoon-char-4.svg" alt="cartoon" v-if ="cartoonNumber == 4">
            <img src="../../assets/icons/cartoon-char-5.svg" alt="cartoon" v-if ="cartoonNumber == 5">
            <img src="../../assets/icons/cartoon-char-6.svg" alt="cartoon" v-if ="cartoonNumber == 6">
            <img src="../../assets/icons/cartoon-char-7.svg" alt="cartoon" v-if ="cartoonNumber == 7">
            <img src="../../assets/icons/cartoon-char-8.svg" alt="cartoon" v-if ="cartoonNumber == 8">
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
</template>
<style scoped>

</style>