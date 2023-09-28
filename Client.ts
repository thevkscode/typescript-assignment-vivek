import { BlogPostRepository } from "./BlogPostRepository";
import { post1, post2, post3 } from "./posts";
export class Client {
  constructor(private blogPostRepository: BlogPostRepository) {}
  async performBlogOperations() {
    try {
      console.log(post1);
      console.log(post2);
      console.log(post3);

      //save
      await this.blogPostRepository.save(post1).then(() => {
        console.log(`save post with id ${post1.id}`);
      });
      await this.blogPostRepository.save(post2).then(() => {
        console.log(`save post with id ${post2.id}`);
      });
      await this.blogPostRepository.save(post2).then(() => {
        console.log(`save post with id ${post2.id}`);
      });

      //get all
      await this.blogPostRepository.getall().then(() => {
        console.log(`All posts here: `);
      });

      //delete
      await this.blogPostRepository.delete(post1).then(() => {
        console.log(`Deleted post of id: ${post1.id}`);
      });
    } catch (error) {
      console.log(`error found`);
    }
  }
}
const blogPostRepository = new BlogPostRepository();
const a = new Client(blogPostRepository);
a.performBlogOperations();
