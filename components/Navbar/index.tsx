import type { NextComponentType } from "next";
import Link from "next/link";
import classes from "~/styles/components/Navbar/index.module.scss";
import { FaSearch, FaAddressCard, FaHome } from "react-icons/fa";

const Navbar: NextComponentType = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.left}>
        <Link href="/" passHref>
          <span className={`${classes.navbar_item} active`}>
            <FaHome />
            Home
          </span>
        </Link>
        <Link href="/aboutme" passHref>
          <span className={classes.navbar_item}>
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
