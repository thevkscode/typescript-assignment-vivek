import { User } from "./User";
export class Admin extends User {
  public permissions: string[] = [];
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    userName: string
  ) {
    super(id, firstName, lastName, userName);
  }
}
