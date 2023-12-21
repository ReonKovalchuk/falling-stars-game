<template>
  <main class="page-wrapper">
    <div>
      <Faller
        faller-style="font-size:40px;
      margin-top:-20px; margin-left:-20px;
      animation-play-state: paused;"
        wrapper-style="animation-play-state: paused; position:relative; top:0"
        faller-icon="star"
        @click="redirect"
      >
      </Faller>
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
const { findIconByName } = useIcons();
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
</style>
