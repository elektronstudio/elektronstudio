<script setup lang="ts">
type Props = {
  navItems: {
    name: string;
    path: string;
  }[];
};

const { navItems } = defineProps<Props>();
const menuItemsLength = navItems ? navItems.length : 0;
</script>

<template>
  <nav class="ENav">
    <!-- <RouterLink v-for="item in navItems" :key="item.name" :to="item.path"> -->
    <!-- {{ item.name }} -->
    <!-- </RouterLink> -->
  </nav>
</template>

<style scoped>
.ENav {
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
}
.ENav > :deep(*) {
  display: inline-flex;
  height: var(--h-9);
  padding: var(--p-1) var(--p-3);
  border: var(--border-DEFAULT) solid var(--gray-500);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  color: var(--gray-300);
}

.ENav > :deep(*):not(:first-child) {
  margin-top: calc(var(--border-DEFAULT) * -1);
}

/* @TODO: Add breakpoints system */
@media only screen and (min-width: 600px) {
  .ENav {
    display: grid;

    --menu-items-count: v-bind(menuItemsLength);
    grid-template-columns: repeat(var(--menu-items-count), 1fr);
  }
  .ENav > :deep(*) {
    padding: var(--p-1);
  }
  .ENav > :deep(*):not(:first-child) {
    margin-top: 0;
    margin-left: calc(var(--border-DEFAULT) * -1);
  }
  .ENav > .router-link-active,
  .ENav > :deep(*):hover {
    border-image: url("/images/bg-router-link-activeexture-xs.gif") 1;
    z-index: 2;
  }
}
</style>
