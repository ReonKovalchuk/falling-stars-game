<template>
  <div class="star-wrapper" :style="wrapperStyle" @click="handleClick">
    <div class="star" :style="starStyle" :class="{ hidden: isHidden }">
      <IconsStar></IconsStar>
    </div>
    <Burst v-show="showBurst"></Burst>
  </div>
</template>

<style></style>

<script setup>
const { starStyle, wrapperStyle } = defineProps(["starStyle", "wrapperStyle"]);
const showBurst = ref(false);
const isHidden = ref(false);
const handleClick = () => {
  //stop falling animation
  isHidden.value = true;
  //fade star out
  //burst
  showBurst.value = true;
  //delete from array
};
</script>
