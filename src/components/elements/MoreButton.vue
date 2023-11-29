<script setup>
defineProps({
  buttonName: String,
})

</script>
<template>
    <div>
        <button class="px-10 py-2 mr-2 transform transition duration-500 ease-in-out text-black more-button"> {{buttonName}} </button>
    </div>
</template>

<style >
.more-button {
    /* width: 200px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none; */
    color: #fff;
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
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out; 
}
.more-button:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
</style>