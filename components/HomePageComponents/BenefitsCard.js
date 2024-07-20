import classes from "./BenefitsCard.module.css";

const BenefitsCard = ({ title, description }) => {
  return (
    <div className={classes.BenefitsCard_container1}>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}; 

export default BenefitsCard;
