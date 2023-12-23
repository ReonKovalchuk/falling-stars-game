<template>
  <main class="page-wrapper">
    <div>
      <Faller
        faller-style="font-size:40px;
      
      animation:unset;"
        wrapper-style="animation:unset; position:relative; top:0"
        faller-icon="star"
        @click="redirect"
      >
      </Faller>
    </div>
  </main>
</template>
<script setup>
//margin-top:-20px; margin-left:-20px;
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
</style>
