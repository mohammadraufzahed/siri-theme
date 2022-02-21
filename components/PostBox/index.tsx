import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "types/PostType";
import classes from "~/styles/components/PostBox/index.module.scss";

const PostBox = ({ post }: { post: PostType }) => {
  return (
    <article className={classes.post}>
      <figure>
        <Image
          src={`https://picsum.photos/seed/${nanoid()}/1024/524.jpg`}
          width={1024}
          height={524}
          alt=""
        />
      </figure>
      <Link href={`/post/${post.id}`} passHref>
        <h1>{post.title}</h1>
      </Link>
      <p>{post.body}</p>
      <Link href={`/post/${post.id}`}>Read more...</Link>
    </article>
  );
};
export default PostBox;
