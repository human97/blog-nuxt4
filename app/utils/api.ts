import type { BlogPost } from "@/types/blog";

const BASE_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work';

export const blogApi = {
  async getPosts(page: number = 1, limit: number = 8): Promise<BlogPost[]> {
    const url = `${BASE_URL}/posts?page=${page}&limit=${limit}`;
    return await $fetch<BlogPost[]>(url);
  },

  async getPost(id: string): Promise<BlogPost> {
    const url = `${BASE_URL}/posts/${id}`;
    return await $fetch<BlogPost>(url);
  },

  async getTotalPostsCount(): Promise<number> {
    const url = `${BASE_URL}/posts`;
    const posts = await $fetch<BlogPost[]>(url);
    return posts.length;
  }
};