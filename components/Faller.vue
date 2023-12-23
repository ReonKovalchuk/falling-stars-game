<template>
  <div class="faller-wrapper" :style="wrapperStyle" @click="handleClick">
    <div class="faller" :style="fallerStyle" :class="{ hidden: isHidden }">
      <component :is="findIconByName(fallerIcon).component" />
    </div>
    <Burst v-show="showBurst" class="effect"></Burst>
  </div>
</template>

<style></style>

<script setup>
const { findIconByName } = useIcons();
const { fallerStyle, wrapperStyle, fallerIcon } = defineProps([
  "fallerStyle",
  "wrapperStyle",
  "fallerIcon",
]);
const showBurst = ref(false);
const isHidden = ref(false);
const handleClick = () => {
  isHidden.value = true;
  showBurst.value = true;
};
</script>
