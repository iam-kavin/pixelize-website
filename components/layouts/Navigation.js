"use client";

import Link from "next/link";
import classes from "./Navigation.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Navigation = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      <nav className={classes.Nav}>
        <Link href={"/"} className={classes.Nav_company}>
          Pixelize
        </Link>
        <button>
          <FiAlignJustify />
        </button>
        <div className={classes.Nav_center}>
          <Link href={"/"}>Home</Link>
          <Link href={"/ServicePage"}>WHAT WE DO</Link>
          {/* <Link href={"/WorkPage"}>OUR WORK</Link> */}
          <Link href={"/WhyUsPage"}>WHY US?</Link>
        </div>
        <div className={classes.Nav_contact}>
          <Link href={"/SignupPage"}>CONTACT US</Link>
          <BsArrowUpRight fontSize="1em" strokeWidth="1" />
        </div>
      </nav>
      <div className={classes.Mobile_Nav_Container}>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className={classes.Mobile_Nav_Icon}
        >
          <FiAlignJustify fontSize="1.5rem" />
        </button>
        {show && (
          <div className={classes.Mobile_Nav}>
            <Link href={"/"}>HOME</Link>
            <Link href={"/ServicePage"}>WHAT WE DO</Link>
            <Link href={"/WorkPage"}>OUR WORK</Link>
            <Link href={"/ServicePage"}>WHY US?</Link>
            <Link href={"/SignupPage"}>CONTACT US</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
