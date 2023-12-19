<template>
  <!-- <nav>
    <ul>
      <li>
        <NuxtLink to="/">One star</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/ManyStars">Many stars</NuxtLink>
      </li>
    </ul>
  </nav> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
nav {
  display: flex;
  place-content: center;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 24px;
}
li {
  font-size: 24px;
  color: #fff;
}
a {
  text-decoration: none;
}
a:visited {
  color: #fff;
}
.router-link-exact-active {
  border-bottom: 1px solid #fff;
}
</style>

<script setup>
useHead({
  title: "Falling stars",
  description: "Учебный проект на Nuxt",
});
</script>
