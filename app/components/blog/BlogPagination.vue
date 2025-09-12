<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
}>();

const emit = defineEmits<{
  (e: 'page-change', page: number): void;
}>();

const maxVisible = props.maxVisiblePages || 5;

const visiblePages = computed(() => {
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, props.currentPage - half);
  let end = Math.min(props.totalPages, start + maxVisible - 1);
  
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }
  
  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});
</script>

<template>
  <nav v-if="totalPages > 1" class="flex justify-start mt-12">
    <ul class="flex items-center space-x-2">
      <li v-if="currentPage > 1">
        <UiPaginationButton 
          class="border-gray-light bg-white text-black-rich hover:bg-gray-soft hover:border-gray-soft"
          @click="$emit('page-change', currentPage - 1)"
        >
          <img
            class="rotate-180"
            src="~/assets/images/next.svg" 
            alt="Prev" 
          />
        </UiPaginationButton>
      </li>

      <li v-for="page in visiblePages" :key="page">
        <UiPaginationButton
          @click="$emit('page-change', page)"
          :active="page === currentPage"
        >
          {{ page }}
        </UiPaginationButton>
      </li>

      <li v-if="currentPage < totalPages">
        <UiPaginationButton 
          class="border-gray-light bg-white text-black-rich hover:bg-gray-soft hover:border-gray-soft"
          @click="$emit('page-change', currentPage + 1)"
        >
          <img src="~/assets/images/next.svg" alt="Next" /> 
        </UiPaginationButton>
      </li>
    </ul>
  </nav>
</template>

