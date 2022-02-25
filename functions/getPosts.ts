import { PostType } from "types/PostType";

export async function getPosts(): Promise<PostType[]> {
  const posts: Promise<PostType[]> = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "GET",
    }
  )
    .then((data) => data.json())
    .then((json) => json);
  return posts;
}
