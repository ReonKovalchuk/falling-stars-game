<template>
  <div class="stars__container">
    <Star
      v-for="star in stars"
      :key="star.id"
      :star-style="`
      animation-duration:${star.animationDuration}; 
      font-size:${star.fontSize};
      margin-left: -${star.offset};
  margin-top: -${star.offset};`"
      :wrapper-style="`left:${star.left};animation-duration:${star.animationDuration}`"
    />
  </div>
</template>
<script setup>
const starsRate = 1000;
const stars = ref([
  // {
  //   left: "500px",
  //   animationDuration: "6s",
  //   fontSize: "30px",
  //   offset: "15px",
  // },
]);
function createStar() {
  const starSize = Math.floor(20 + Math.random() * 30);
  stars.value.push({
    id: new Date().valueOf(),
    left: Math.floor(Math.random() * window.innerWidth) + "px",
    animationDuration: Math.floor(10 + Math.random() * 4) + "s",
    fontSize: starSize + "px",
    offset: starSize / 2 + "px",
  });
}
let starDestruction;
setTimeout(() => {
  stars.value.shift();
  starDestruction = setInterval(() => {
    stars.value.shift();
  }, starsRate);
}, starsRate + 110000);

const starCreation = setInterval(() => {
  createStar();
}, starsRate);
onUnmounted(() => {
  clearInterval(starCreation);
  clearInterval(starDestruction);
});
</script>
