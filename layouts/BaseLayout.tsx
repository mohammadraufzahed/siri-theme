import type { NextComponentType } from "next";
import Head from "next/head";
import { Children, ReactChild, ReactChildren } from "react";
import Navbar from "~/components/Navbar";
import classes from "../styles/layouts/BaseLayout/index.module.scss";

const BaseLayout = ({ children }: { children: ReactChild | ReactChildren }) => {
  return (
    <div className={`default ${classes.container}`}>
      <Head>
        <title>Siri - Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer className={classes.footer}>
        Developed by love and patience by Mohammad Raufzahed
      </footer>
    </div>
  );
};

export default BaseLayout;
