import Link from "next/link";
import classes from "./InstantQuoteCard.module.css"

const InstantQuoteCard = ({background}) => {
  return (
    <div className={classes.InstantQuoteCard} style={{background:background}}>
        <p>
          Get a stunning product developed and online within the next 10 days.
        </p>
        <div>
        <Link href={"/"}>Get an instant quote</Link>
        </div>
    </div>
  );
};

export default InstantQuoteCard;
