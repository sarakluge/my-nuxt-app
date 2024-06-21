<template>
  <div
    class="hero"
    :style="{ backgroundImage: `url('https://www1.minuc.se${imageUrl}')` }"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content p-11 text-neutral-content justify-self-start">
      <div class="max-w-lg">
        <div v-html="text"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  imageUrl: String,
});
</script>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="css">
h1 {
  @apply text-5xl font-bold;
}
</style>
