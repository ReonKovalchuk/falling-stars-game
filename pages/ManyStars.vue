<template>
  <div class="fallers__container">
    <Faller
      v-for="faller in fallers.keys()"
      :key="faller.id"
      :faller-style="`
      animation-duration:${faller.animationDuration}; 
      margin-left: -${faller.offset};
margin-top: -${faller.offset};
      font-size:${faller.fontSize};
      
  color:${faller.color}`"
      :wrapper-style="`left:${faller.left};animation-duration:${faller.animationDuration}`"
      :faller-icon="faller.icon"
      @increment="counter++"
    />
    <p class="counter">{{ counter }}</p>
  </div>
</template>
<script setup>
//
const fallersRate = 0.85;
const { generateIconData } = useIcons();

const fallers = ref(new Map());
const counter = useState("counter", () => 0);
function createFaller() {
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
  fallers.value.set(newFaller, newFaller.id);
}
function disappearFallers() {
  const checkpoint = new Date().valueOf() - 9000;
  if (fallers.value.size > 25) {
    for (let key of fallers.value.keys()) {
      if (key.id < checkpoint) {
        fallers.value.delete(key);
      }
    }
  }
}

if (process.client) {
  const fallersManagement = setInterval(() => {
    createFaller();

    disappearFallers();
  }, fallersRate * 1000);
}
</script>
