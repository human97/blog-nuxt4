<script setup lang="ts">
import { BlogPost } from '@/types/blog';

defineProps<{
  post: BlogPost;
  isLastRow: boolean;
}>();

const isHovered = ref(false);
</script>

<template>
  <div
    class="relative w-[280px] h-[380px]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <NuxtLink :to="`/blog/${post.id}`">
      <article
        class="absolute inset-0 bg-white overflow-hidden flex flex-col transition-all duration-500 ease-in-out h-full flex flex-col gap-3 text-xl leading-[120%]"
        :class="{
          'h-[414px] z-10': isHovered,
          '-translate-y-[34px]': isHovered && !isLastRow,
        }"
      >
        <div class="size-[280px] flex-shrink-0">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover"
            loading="lazy"
            @error="$event.target.src = '/images/placeholder-image.svg'"
          />
        </div>
        <p class="line-clamp-3">
          {{ post.description || 'Описание отсутствует' }}
        </p>
        <p
          v-show="isHovered" 
          class="text-[#E2BEFF]"
        >
          Read more
        </p>
      </article>
    </NuxtLink>
  </div>
</template>