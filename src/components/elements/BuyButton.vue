<script setup>
    defineProps({
  buttonName: String,
})
</script>
<template>
    <div>
        <button class="px-10 py-2 min-w-[100px] text-black border-2 bg-[#E5E7EB] buy-button"> {{buttonName}} </button>
    </div>
</template>

<style>
.buy-button{
    clip-path: polygon(
            0px 0,
            calc(100% - 15px) 0,
            100% 15px,
            100% calc(100% - 0px),
            calc(100% - 15px) 100%,
            15px 100%,
            0 calc(100% - 15px),
            0 15px
        );
}
</style>