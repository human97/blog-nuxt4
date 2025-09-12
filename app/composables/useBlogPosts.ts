import { blogApi } from '@/utils/api';

export const useBlogPosts = (postsPerPage: number = 8) => {
  const currentPage = ref(1);

  const { data, pending, error } = useAsyncData(
    'blogData',
    async () => {
      const [posts, totalCount] = await Promise.all([
        blogApi.getPosts(currentPage.value, postsPerPage),
        blogApi.getTotalPostsCount(),
      ]);
      
      return {
        posts,
        totalPages: Math.ceil(totalCount / postsPerPage),
      };
    },
    {
      watch: [currentPage],
    }
  );

  const fetchPosts = (page: number) => {
    currentPage.value = page;
  };

  return {
    posts: computed(() => data.value?.posts || []),
    currentPage,
    totalPages: computed(() => data.value?.totalPages || 1),
    isLoading: pending,
    error,
    fetchPosts,
  };
};