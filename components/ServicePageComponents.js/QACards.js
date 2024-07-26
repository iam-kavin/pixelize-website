"use client";
import { useState } from "react"; 

import classes from "./QACards.module.css";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const QACards = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  let Height='100px'
  if (show) { Height='247px' }
  return (
    <div className={classes.QACardsContainer} style={{height:Height}}>
      <div>
      <p className={classes.QACardsContainer_Question}>{question}</p>
      <button
        onClick={() => {
          setShow(!show); 
        }}
      >
        {show ? <BsArrowRightCircle className={classes.QACardsContainer_button}/> : <BsArrowDownCircle className={classes.QACardsContainer_button}/>}
      </button>
      </div>
      {show && <p className={classes.QACardsContainer_Answer}>{answer}</p>}
    </div>
  );
};

export default QACards;
