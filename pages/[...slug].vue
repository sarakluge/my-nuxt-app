<template>
  <div>
    <Hero :text="hero.text" :image-url="hero.imageUrl" />
    <div v-if="errorMessage" class="flex justify-center pt-8">
      <p>{{ errorMessage }}</p>
    </div>
    <div v-else class="flex justify-center pt-8">Sidans innehåll visas här</div>
  </div>
</template>

<script setup>
const { params, path } = useRoute();
const route = useRoute();
const content = ref(undefined);
const errorMessage = ref(undefined);

const hero = computed(() => {
  return {
    imageUrl:
      content?.value?.mainContentArea?.expandedValue[0]?.backgroundImageDesktop
        ?.value?.url,
    text: content?.value?.mainContentArea?.expandedValue[0]?.text?.value,
  };
});

const slug = computed(() => params.slug);

const handleGoToIdexPage = () => {
  router.push({ name: "index" });
};

onMounted(async () => {
  try {
    const data = await $fetch(`/api/pages/get-${slug.value}`);

    if (!data.mainContentArea) {
      errorMessage.value = `Sidan du sökte gick inte att hitta, ${path}  `;
      return;
    }
    content.value = data;
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
});
</script>

<script>
export default {
  name: "ContentPage",
};
</script>
