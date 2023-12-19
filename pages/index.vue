<template>
  <main class="page-wrapper">
    <div>
      <Star
        star-style="font-size:40px;
      margin-top:-20px; margin-left:-20px;
      animation-play-state: paused;"
        wrapperStyle="animation-play-state: paused; position:relative;"
        @click="redirect"
      >
      </Star>
    </div>
  </main>
</template>
<script setup>
const router = useRouter();
const redirect = () => {
  setTimeout(() => {
    router.push({ path: "/ManyStars" });
  }, 1000);
};
</script>
<style lang="scss">
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  text-align: center;
}
strong {
  color: var(--color-gold);
}
</style>
