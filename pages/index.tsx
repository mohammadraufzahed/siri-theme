import { getPosts } from "functions/getPosts";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
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
  const postsQuery = useQuery("posts-query", getPosts, {
    initialData: posts,
    cacheTime: 300000,
    staleTime: 300000,
    select: (data) => {
      return chunk(data, 5);
    },
  });
  const [pagination, setPagination] = useState<number>(0);
  return (
    <div className={classes.container}>
      <div className={classes.posts}>
        {postsQuery.data
          ? postsQuery.data[pagination].map((post: PostType, key: number) => {
              return <PostBox post={post} key={key} />;
            })
          : null}
        <div className={classes.pagination_container}>
          <button
            className={classes.pagination_prev}
            disabled={pagination <= 0}
            onClick={() => {
              setPagination(pagination - 1);
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Prev
          </button>
          <button
            className={classes.pagination_next}
            disabled={pagination >= postsQuery.data.length}
            onClick={() => {
              setPagination(pagination + 1);
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Next
          </button>
        </div>
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
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

Index.PageLayout = BaseLayout;

export default Index;
