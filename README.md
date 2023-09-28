# Typescript Assignment
​
Complete the following typescript questions (create new files whereever required).
​
Initialize a new project with proper `tsconfig.json` and add the solutions to following questions in the project.
​
- [ ] Q1 Create an `enum` called `Category` and add 3-5 values in this enum.
​
- [ ] Q2 Create an `interface` called `BlogPost` with the following properties:
  - `id`
  - `title`
  - `content`
  - `date`
  - `category` (use the above created enum)
  - `authorId`
  
- [ ] Q3 Create 3 objects using the `BlogPost` interface.
​
- [ ] Q4 Create an `intersection` type using the `BlogPost` interface called `BlogPostWithImage`. This type should have all the properties of `BlogPost` and following additional properties (use typescript's concept of intersection types):
    - `image`
  
- [ ] Q5 Show an example of typescript's `union` types and berifly explain how they differ from `intersection` types.
​
- [ ] Q6 Create a new file, add a class named `User` in this file and export the class. Add the following properties to the `User` class:
  - `id`
  - `firstName`
  - `lastName`
  - `username`
  
- [ ] Q7 Create a new file, import the `User` class, create a new class named `Admin` that extends from `User` class and add the following properties:
  - `permissions` array of string.
  
- [ ] Q8 Create a new file, import the `User` class, create a new class named `Author` that extends from `User` class and add the following properties:
  - `posts` array of `BlogPost`'s.
  
- [ ] Q9 In a new file, create a new class called `BlogPostRepository`, in this class implement the below promise based function:
  - `Promise<BlogPost> save(BlogPost)`
  - `Promise<void> delete(BlogPost)`
  - `Promise<BlogPost[]> getAll()` 
  
  Each of these methods will have a dummy implementation in which you will return a new Promise that resolves after 2 seconds. (Hint: use `setTimeout`).
  
- [ ] Q10 In a new file, create a new class called `Client`, in this class use the `BlogPostRepository` and call all the implemented methods.
