import type { NextComponentType } from "next";
import Link from "next/link";
import classes from "~/styles/components/Navbar/index.module.scss";
import { FaSearch, FaAddressCard, FaHome } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar: NextComponentType = () => {
  const router = useRouter();
  return (
    <nav className={classes.container}>
      <div className={classes.left}>
        <Link href="/" passHref>
          <span
            className={`${classes.navbar_item} ${
              router.asPath == "/" ? "active" : null
            }`}
          >
            <FaHome />
            Home
          </span>
        </Link>
        <Link href="/aboutme" passHref>
          <span
            className={`${classes.navbar_item} ${
              router.asPath == "/aboutme" ? "active" : null
            }`}
          >
            {" "}
            <FaAddressCard />
            About me
          </span>
        </Link>
      </div>
      <div className={classes.right}>
        <input type="text" placeholder="search" />
        <button>
          <FaSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
