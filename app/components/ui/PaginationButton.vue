<script setup lang="ts">
defineProps<{
  active?: boolean;
  disabled?: boolean;
}>();
</script>  				

<template>
  <button
    :class="[
      'size-11 rounded-xl border flex items-center justify-center',
      active
        ? 'bg-black-rich text-white border-black-rich'
        : 'border-gray-soft bg-gray-soft text-black-rich hover:bg-gray-light hover:border-gray-light'
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

