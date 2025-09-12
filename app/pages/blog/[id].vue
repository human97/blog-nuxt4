<script setup lang="ts">
import { blogApi } from '@/utils/api';

const route = useRoute();

const { data: post, pending, error } = await useAsyncData(
  `post-${route.params.id}`,
  async () => {
    try {
      const fetchedPost = await blogApi.getPost(route.params.id as string);
      if (!fetchedPost.description) {
        fetchedPost.description = 'В этой статье нет описания, но мы уверены, что она очень интересная!';
      }
      return fetchedPost;
    } catch (err) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Статья не найдена'
      });
    }
  }
);

if (!post.value && !pending.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Статья не найдена'
  });
}

useHead({
  title: post.value?.title || 'Статья блога',
  meta: [
    {
      name: 'description',
      content: post.value?.description || ''
    }
  ]
});
</script>

<template>
  <div class="container mx-auto px-4">
    <div v-if="pending" class="text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Загрузка статьи...</p>
    </div>
    
    <div v-else-if="error" class="text-center py-12">
      <h1 class="text-2xl font-bold text-red-600 mb-4">Ошибка загрузки</h1>
      <p class="text-gray-600">{{ error }}</p>
      <NuxtLink 
        to="/"
        class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block"
      >
        Вернуться к статьям
      </NuxtLink>
    </div>
    
    <article v-else class="mx-auto max-w-[1200px]">
      <header class="mb-8">
        <h1 class="text-[84px] text-black-rich mb-5">{{ post.title }}</h1>
      </header>
      
      <div class="relative h-[700px] mb-8 overflow-hidden bg-gray-light flex items-center justify-center">
        <img
          v-if="post.image"
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover"
          @error="$event.target.src = '/images/placeholder-image.svg'"
        />
        <div v-else class="text-gray-pro">
          Изображение не доступно
        </div>
      </div>
      
      <div>
        <NuxtLink to="/" >
          About
        </NuxtLink>
        <p class="text-4xl leading-[124%] w-3/5 mt-5">
          {{ post.description || 'Описание отсутствует' }}
        </p>
      </div>
    </article>
  </div>
</template>

