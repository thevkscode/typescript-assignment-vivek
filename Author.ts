import { User } from "./User";
import { BlogPost } from "./BlogPost";
export class Author extends User {
  posts: BlogPost[] = [];
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    userName: string
  ) {
    super(id, firstName, lastName, userName);
  }
}
