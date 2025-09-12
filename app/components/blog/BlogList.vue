<script setup lang="ts">
import { BlogPost } from '@/types/blog';

const props = withDefaults(defineProps<{
  posts?: BlogPost[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}>(), {
  posts: () => []
});

const emit = defineEmits<{
  (e: 'page-change', page: number): void;
  (e: 'refresh'): void;
}>();

const handlePageChange = (page: number) => {
  emit('page-change', page);
};

const columns = ref(4);

const isLastRow = (index: number) => {
  const total = props.posts.length;
  const cols = columns.value;
  if (total === 0 || cols === 0) return false;
  
  const startIndexOfLastRow = total - (total % cols || cols);
  return index >= startIndexOfLastRow;
};
</script>

<template>
  <div class="blog-container">
    <div v-if="isLoading" class="text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Загрузка статей...</p>
    </div>
    
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600 mb-4">{{ error }}</p>
      <button 
        @click="$emit('refresh')" 
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Попробовать снова
      </button>
    </div>
    
    <template v-else>
      <div class="grid grid-cols-4 gap-y-5">
        <BlogCard 
          v-for="(post, index) in posts" 
          :key="post.id" 
          :post="post"
          :is-last-row="isLastRow(index)"
        />
      </div>
      
      <BlogPagination
        v-if="posts.length > 0"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
      
      <div v-else class="text-center py-12">
        <p class="text-gray-600">Статьи не найдены</p>
      </div>
    </template>
  </div>
</template>

