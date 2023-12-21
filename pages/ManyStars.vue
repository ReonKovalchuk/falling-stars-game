<template>
  <div class="stars__container">
    <Faller
      v-for="faller in fallers"
      :key="faller.id"
      :faller-style="`
      animation-duration:${faller.animationDuration}; 
      font-size:${faller.fontSize};
      margin-left: -${faller.offset};
  margin-top: -${faller.offset};
  color:${faller.color}`"
      :wrapper-style="`left:${faller.left};top:0px;animation-duration:${faller.animationDuration}`"
      :faller-icon="faller.icon"
      @click="counter++"
    />
    <p class="counter">{{ counter }}</p>
  </div>
</template>
<script setup>
const fallersRate = 1;
const { generateIconData, findIconByName } = useIcons();

const fallers = ref([]);
const counter = useState("counter", () => 0);
const createFaller = () => {
  const fallerParameters = {};
  if (counter.value < 30) {
    //default gold star
  } else if (counter.value <= 30 && counter.value < 60) {
    //star with random colors
    fallerParameters.color = "random";
  } else if (counter.value <= 60 && counter.value < 90) {
    fallerParameters.icon = "random";
    //color default
  } else {
    fallerParameters.icon = "random";
    fallerParameters.color = "random";
  }
  fallers.value.push(
    generateIconData(fallerParameters.icon, fallerParameters.color)
  );
};

const disappearFallers = () => {
  fallers.value = fallers.value.slice(-100);
};

const fallersManagement = setInterval(() => {
  createFaller();
  disappearFallers();
}, fallersRate * 1000);
</script>
~/composables/useColors
