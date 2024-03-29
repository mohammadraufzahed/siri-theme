import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import { useState } from "react";
import { PostType } from "types/PostType";
import PostBox from "~/components/PostBox";
import BaseLayout from "~/layouts/BaseLayout";
import classes from "~/styles/pages/index/index.module.scss";

const chunk = (arr: Array<any>, size: number) =>
  arr.reduce(
    (acc, e, i) => (
      i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
    ),
    []
  );

const Index = ({ posts }: { posts: PostType[] }) => {
  const dividedPosts: Array<PostType[]> = chunk(posts, 5);
  const [pagination, setPagination] = useState<number>(0);
  return (
    <div className={classes.container}>
      <div className={classes.posts}>
        {dividedPosts
          ? dividedPosts[pagination].map((post, key) => {
              return <PostBox post={post} key={key} />;
            })
          : null}
      </div>
      <section className={classes.aboutme}>
        <figure>
          <Image
            src="https://www.gravatar.com/avatar/3eb7989de34e885a479929a2dc8aa9a1?s=250"
            alt=""
            width={250}
            height={250}
          />
        </figure>
        <h1>Mohammad Raufzahed</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          earum odio iure consectetur placeat culpa sapiente maxime consequatur.
          Obcaecati, necessitatibus.
        </p>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then((data) => data.json())
    .then((json) => json);
  return {
    props: {
      posts,
    },
  };
};

Index.PageLayout = BaseLayout;

export default Index;
