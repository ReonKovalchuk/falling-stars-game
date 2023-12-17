<template>
  <div class="stars__container">
    <Star
      v-for="star in stars"
      :key="star.id"
      :style="`left:${star.left};animation-duration:${star.animationDuration}; font-size:${star.fontSize}`"
    />
  </div>
</template>
<script setup>
const starsRate = 500;
const stars = ref([]);
function createStar() {
  stars.value.push({
    id: new Date().valueOf(),
    left: Math.random() * +innerWidth + "px",
    animationDuration: 4 + Math.random() * 4 + "s",
    fontSize: 20 + Math.random() * 30 + "px",
  });
}

setTimeout(() => {
  stars.value.shift();
  setInterval(() => {
    stars.value.shift();
  }, starsRate);
}, 6000);

setInterval(() => {
  createStar();
}, starsRate);
</script>
