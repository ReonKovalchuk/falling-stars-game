<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<script setup>
const animationPlaying = ref(false);
const handleClick = () => {
  animationPlaying.value = true;
  setTimeout(() => {
    animationPlaying.value = false;
  }, 1000);
};
</script>
<style lang="scss" scoped>
ul,
li {
  // position: ;
  list-style-type: none;
  margin: 0;
  padding: 0;
  --translate: 0%;
}

ul::before,
ul::after,
li::before,
li::after {
  content: "";
  position: absolute;
}

ul {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
}
@mixin transform {
  @for $i from 1 through 8 {
    &:nth-child(#{$i}) {
      transform: rotate(#{$i * 45-45}deg);
    }
  }
}

li {
  width: 6px;
  height: 40px;
  border-radius: 30px;
  transform-origin: 50% 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -40px;
  margin-left: -6px;
  @include transform();
}

li::before,
li::after {
  width: 100%;
  height: 50%;
  background: inherit;
  border-radius: 30px;
  animation: burst 0.5s ease-in-out 1;
  animation-fill-mode: both;
}

li::after {
  animation-delay: 0.05s;
}

// li:nth-child(1) {
//   transform: translateX(var(--translate)) rotate(0deg);
// }

// li:nth-child(2) {
//   transform: translateX(var(--translate)) rotate(45deg);
// }

// li:nth-child(3) {
//   transform: translateX(var(--translate)) rotate(90deg);
// }

// li:nth-child(4) {
//   transform: translateX(var(--translate)) rotate(135deg);
// }

// li:nth-child(5) {
//   transform: translateX(var(--translate)) rotate(180deg);
// }

// li:nth-child(6) {
//   transform: translateX(var(--translate)) rotate(225deg);
// }

// li:nth-child(7) {
//   transform: translateX(var(--translate)) rotate(270deg);
// }

// li:nth-child(8) {
//   transform: translateX(var(--translate)) rotate(315deg);
// }

@keyframes burst {
  0%,
  100% {
    top: 100%;
    opacity: 0;
    background-color: #fff;
  }

  20% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  65% {
    opacity: 1;
  }

  99% {
    top: -50%;
    opacity: 0;
    height: 0;
    background-color: transparent;
  }
}

.burst-wrapper {
  align-items: center;
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
