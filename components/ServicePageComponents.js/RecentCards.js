import classes from "./RecentCards.module.css";

const RecentCards = ({ title, image }) => {
  return (
    <div className={classes.RecentCardsContainer}>
      <div>
      <h5>{title}</h5>
      <img src={image} alt={title}></img>
      </div> 
    </div>
  );
};

export default RecentCards; 
