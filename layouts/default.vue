<template>
  <div>
    <div class="drawer" :class="showDrawer ? 'drawer-open' : ''">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <div class="navbar bg-base-300">
          <a class="btn btn-ghost text-xl" @click="showDrawer = !showDrawer"
            >Meny</a
          >
        </div>
        <slot />
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <MenuSection
            :title="menu.first?.title"
            :menu-items="menu.first?.menuItems"
          />
          <MenuSection
            :title="menu.second?.title"
            :menu-items="menu.second?.menuItems"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const menu = ref([]);
const showDrawer = ref(false);

onMounted(async () => {
  try {
    const data = await $fetch("/api/get-menu");
    menu.value = data.desktopMenu.products;
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
});
</script>

<script>
export default {
  name: "DefaultLayout",
};
</script>
