import classes from "./HelpCard.module.css";

const HelpCard = ({ title, image, description }) => {
  return (
    <div className={classes.HelpCard_container}>
      <h5>{title}</h5>
      <img src={image} alt={title} width="100px"></img>
      <p>{description}</p>
    </div>
  );
};

export default HelpCard;
