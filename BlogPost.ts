import { Category } from "./Category";
interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: Date;
  category: Category;
  authorId: number;
}
export { BlogPost, Category };
