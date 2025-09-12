<script setup lang="ts">
import AppHeader from '@/components/ui/AppHeader.vue';
import AppFooter from '@/components/ui/AppFooter.vue';
</script>

<template>
  <div>
    <AppHeader />
    <main class="px-28 py-[100px]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

