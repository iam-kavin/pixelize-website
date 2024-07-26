import classes from "./RecentCard.module.css";

const RecentCard = ({ image, title, description }) => {
  return (
    <div className={classes.RecentCard_container}>
      <img src={image} alt={title}></img>
      <div>
      <h5>{title}</h5>
      <p>{description}</p> 
      </div>
    </div>
  );
};

export default RecentCard; 
