export class User {
  private id: number;
  private firstName: string;
  private lastName: string;
  private userName: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    userName: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
  }
  getId(): number {
    return this.id;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  getUserName(): string {
    return this.userName;
  }
}
