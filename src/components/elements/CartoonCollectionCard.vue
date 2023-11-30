<script setup>
defineProps({
  title: String,
  titleCount: String,
  currentTime:String,
  endingTime:String,
  cartoonNumber:Number,
})

document.addEventListener("DOMContentLoaded", () => {  
  document.getElementByClassName("cartoon-card")
    .addEventListener('mouseenter', (e) => {
			let parentOffset = this.offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			this.find('span').css({top:relY, left:relX});
    })
    .addEventListener('mouseout', (e) => {
			let parentOffset = this.offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	this.find('span').css({top:relY, left:relX});
    });
  ('[href=#]').click(function(){return false});
});

</script>

<template>
    <div>
        <div class=" card cartoon-card overflow-hidden relative lg:w-[383px] md:w-[350px] w-[290px] bg-[#382F5E] max-h-[500px] p-4 m-2 rounded-lg">
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
            <span class="span-effect absolute block w-0 h-0  bg-[#382f5e63] z-10" ></span>
        </div>
    </div>
</template>
<style scoped>
</style>