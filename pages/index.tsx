import type { NextPage } from "next";
import Image from "next/image";
import BaseLayout from "~/layouts/BaseLayout";
import classes from "~/styles/pages/index/index.module.scss";

const Index = () => {
  return (
    <div className={classes.container}>
      <div className={classes.posts}>Blog</div>
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

Index.PageLayout = BaseLayout;

export default Index;
