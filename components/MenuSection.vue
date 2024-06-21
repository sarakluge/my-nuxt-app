<template>
  <div>
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <li v-for="item in menuItems" :key="item?.title">
      <nuxt-link :to="item.url" class="flex flex-col items-start">
        <h3 class="text-base font-semibold">{{ item?.title }}</h3>
        <p>{{ item?.teaserText }}</p>
      </nuxt-link>
    </li>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  menuItems: Array,
});
</script>

<script>
export default {
  name: "MenuSection",
};
</script>
