import Link from "next/link";
import classes from "./Navigation.module.css"; 

const Navigation = () => {
  return (
    <nav className={classes.Nav}>
        <Link href={"/"} className={classes.Nav_company}>Pixelize</Link>
      <div className={classes.Nav_center}>
        <Link href={"/ServicePage"}>WHAT WE DO</Link>
        <Link href={"/WorkPage"}>OUR WORK</Link>
        <Link href={"/ServicePage"}>WHY US?</Link>
      </div>
      <Link href={"/SignupPage"}>CONTACT US</Link>
    </nav>
  );
};

export default Navigation; 
