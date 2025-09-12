export type BlogPost = {
  id: string;
  title: string;
  preview: string;
  description: string;
  image: string;
  createdAt: string;
  author?: string;
  tags?: string[];
};

export interface BlogApiResponse {
  posts: BlogPost[];
  totalCount: number;
}