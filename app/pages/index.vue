<script setup lang="ts">
import { useBlogPosts } from '@/composables/useBlogPosts';

const postsPerPage = 8;
const { 
  posts, 
  currentPage, 
  totalPages, 
  isLoading, 
  error, 
  fetchPosts
} = useBlogPosts(postsPerPage);

const handlePageChange = (page: number) => {
  fetchPosts(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div class="mx-auto w-[1217px]">
    <h1 class="text-[84px] text-black-rich mb-5">Articles</h1>
    
    <BlogList
      :posts="posts"
      :current-page="currentPage"
      :total-pages="totalPages"
      :is-loading="isLoading"
      :error="error"
      @page-change="handlePageChange"
    />
  </div>
</template>