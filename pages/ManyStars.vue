<template>
  <div class="stars__container">
    <Faller
      v-for="faller in fallers.values()"
      :key="faller.id"
      :faller-style="`
      animation-duration:${faller.animationDuration}; 
      font-size:${faller.fontSize};
      margin-left: -${faller.offset};
  margin-top: -${faller.offset};
  color:${faller.color}`"
      :wrapper-style="`left:${faller.left};animation-duration:${faller.animationDuration}`"
      :faller-icon="faller.icon"
      @click="counter++"
    />
    <p class="counter">{{ counter }}</p>
  </div>
</template>
<script setup>
const fallersRate = 0.5;
const { generateIconData } = useIcons();

const fallers = ref(new Map());
const counter = useState("counter", () => 0);
const createFaller = () => {
  const fallerParameters = {};
  if (counter.value < 30) {
    //default gold star
  } else if (counter.value >= 30 && counter.value < 60) {
    //star with random colors
    fallerParameters.color = "random";
  } else if (counter.value >= 60 && counter.value < 90) {
    fallerParameters.icon = "random";
    //color default
  } else {
    fallerParameters.icon = "random";
    fallerParameters.color = "random";
  }
  const newFaller = generateIconData(
    fallerParameters.icon,
    fallerParameters.color
  );
  fallers.value.set(newFaller.id, newFaller);
};

const disappearFallers = () => {
  const checkpoint = new Date().valueOf() - 9000;
  if (fallers.value.size > 50) {
    for (let key of fallers.value.keys()) {
      if (key < checkpoint) {
        fallers.value.delete(key);
      }
    }
  }
};

const fallersManagement = setInterval(() => {
  if (process.client) {
    createFaller();
  }
  disappearFallers();
}, fallersRate * 1000);
</script>
~/composables/useColors
