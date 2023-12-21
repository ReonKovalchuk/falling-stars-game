<template>
  <div class="stars__container">
    <Star
      v-for="star in stars"
      :key="star.id"
      :star-style="`
      animation-duration:${star.animationDuration}; 
      font-size:${star.fontSize};
      margin-left: -${star.offset};
  margin-top: -${star.offset};
  color:${star.color}`"
      :wrapper-style="`left:${star.left};top:0px;animation-duration:${star.animationDuration}`"
      @click="counter++"
    />
    <p class="counter">{{ counter }}</p>
  </div>
</template>
<script setup>
import { COLORS } from "@/composables/colors";

const starsRate = 1;
const maxAnimationDuration = 8;
const maxStarsOnScreen = Math.ceil(maxAnimationDuration / starsRate) + 1;
const stars = ref([
  // {
  //   left: "500px",
  //   animationDuration: "6s",
  //   fontSize: "30px",
  //   offset: "15px",
  // },
]);
const counter = ref(0);
const createStar = () => {
  const starSize = Math.floor(20 + Math.random() * 30);
  const starColor = COLORS[Math.round(Math.random() * COLORS.length)];
  stars.value.push({
    id: new Date().valueOf(),
    left: Math.floor(Math.random() * (window.innerWidth - starSize)) + "px",
    animationDuration:
      Math.floor(
        maxAnimationDuration / 2 + (Math.random() * maxAnimationDuration) / 2
      ) + "s",
    fontSize: starSize + "px",
    offset: starSize / 2 + "px",
    color: starColor,
    burstOffset: Math.floor(Math.random() * 45),
  });
};

const disappearStar = () => {
  stars.value = stars.value.slice(-100);
};

const starManagement = setInterval(() => {
  createStar();
  disappearStar();
}, starsRate * 1000);
</script>
