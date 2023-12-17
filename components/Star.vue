<template>
  <div class="star"></div>
</template>
<style lang="scss" scoped>
$size: random() * 12;
$duration: random() * 3;
$container-width: 1600;
.star {
  left: random() * $container-width + "px";
  font-size: 12 + $size + "px";
  animation-duration: 4 + $duration + "s";
}
</style>
