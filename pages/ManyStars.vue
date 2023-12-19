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
      :wrapper-style="`left:${star.left};top:0px;animation-duration:${star.animationDuration}`"
      @click="destroyStar(star.id)"
    />
    <p class="counter">{{ counter }}</p>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";

const starsRate = 1000;
const stars = ref([
  // {
  //   left: "500px",
  //   animationDuration: "6s",
  //   fontSize: "30px",
  //   offset: "15px",
  // },
]);
const counter = ref(0);
function createStar() {
  const starSize = Math.floor(20 + Math.random() * 30);
  stars.value.push({
    id: new Date().valueOf(),
    left: Math.floor(Math.random() * (window.innerWidth - starSize)) + "px",
    animationDuration: Math.floor(4 + Math.random() * 4) + "s",
    fontSize: starSize + "px",
    offset: starSize / 2 + "px",
    burstOffset: Math.floor(Math.random() * 45),
  });
}
function destroyStar(id) {
  counter.value++;
  setTimeout(() => {
    stars.value = stars.value.filter((star) => {
      return star.id !== id;
    });
  }, 500);
}
const useStarDestructionInterval = (delay) => {
  setTimeout(() => {
    starDestruction = setInterval(() => {
      if (stars.value.length > 7) stars.value.shift();
    }, starsRate);
  }, starsRate + delay);
};
let starDestruction;

const starCreation = setInterval(() => {
  createStar();
}, starsRate);
onMounted(() => {
  useStarDestructionInterval(7000);
});
</script>
