import Link from "next/link";
import classes from "./Footer.module.css"; 

const Footer = () => {
  return (
    <div className={classes.Footer_container1}>
      <div className={classes.Footer_logo}>Pixelize</div>
      <div className={classes.Footer_columns}>
        <div>
          <Link href={"/ServicePage"}>WHAT WE DO</Link>
          <Link href={"/"}>BLOG</Link>
        </div>
        <div>
          <Link href={"/WorkPage"}>OUR WORK</Link>
          <Link href={"/"}>CUSTOMER STORIES</Link>
        </div>
        <div>
          <Link href={"/ServicePage"}>WHY US?</Link>
          <Link href={"/"}>IN NEWS</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
