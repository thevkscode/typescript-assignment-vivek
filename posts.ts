import { BlogPost, Category } from "./BlogPost";
const post1: BlogPost = {
  id: 1,
  title: "First Post",
  content: "This is the first Post",
  date: new Date(),
  category: Category.Food,
  authorId: 9,
};
const post2: BlogPost = {
  id: 2,
  title: "Second Post",
  content: "This is the Second Post",
  date: new Date(),
  category: Category.Travel,
  authorId: 8,
};
const post3: BlogPost = {
  id: 3,
  title: "Third Post",
  content: "This is the third Post",
  date: new Date(),
  category: Category.Food,
  authorId: 7,
};
export { post1, post2, post3 };
