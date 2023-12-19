<template>
  <div
    class="star-wrapper"
    :style="wrapperStyle"
    :class="{ paused: isPaused }"
    @click="handleClick"
  >
    <div
      class="star"
      :style="starStyle"
      :class="{ paused: isPaused, hidden: isPaused }"
    >
      <IconsStarIcon></IconsStarIcon>
    </div>
    <Burst v-show="showBurst"></Burst>
  </div>
</template>

<style>
.star-wrapper {
  height: 50px;
  width: 50px;
}
</style>

<script setup>
const { starStyle, wrapperStyle } = defineProps(["starStyle", "wrapperStyle"]);
const showBurst = ref(false);
const isPaused = ref(false);
const handleClick = () => {
  //stop falling animation
  isPaused.value = true;
  //fade star out
  //burst
  showBurst.value = true;
  //delete from array
};
</script>
