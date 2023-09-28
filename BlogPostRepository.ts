import { BlogPost } from "./BlogPost";
import { BlogPostWithImage } from "./BlogPostwithImage";
import { User } from "./User";
import { post1, post2, post3 } from "./posts";
export class BlogPostRepository {
  async save(post: BlogPost): Promise<BlogPost> {
    return new Promise<BlogPost>((resolve) => {
      setTimeout(() => {
        resolve(post);
      }, 2000);
    });
  }
  async delete(post: BlogPost): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  async getall(): Promise<BlogPost[]> {
    const posts: BlogPost[] = [post1, post2, post3];
    return new Promise<BlogPost[]>((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 2000);
    });
  }
}
const a = new BlogPostRepository();
a.save(post1).then(() => {
  console.log(`post save with id :${post1.id}`);
});
