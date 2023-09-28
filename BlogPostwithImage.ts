import { BlogPost } from "./BlogPost";
export type BlogPostWithImage = BlogPost & {
  image: string;
};
