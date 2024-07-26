import Navigation from "@/components/layouts/Navigation";
import classes from "./SignUpPage.module.css"; 

const SignupPage = () => { 
  return (
    <div className={classes.SignUpModule}>
      <Navigation />
      <div className={classes.PageContainer}>
      <div className={classes.CustomerReview}>
        <div className={classes.CustomerReview_img}>
        <img
          src="./images/img_rectangle_221.png"
          alt="image"
        ></img>
        </div>
        <h4>
          Haptica went above and beyond to make sure we got something we were
          happy with
        </h4>
        <h5>Johnson Root</h5>
        <h6>Creative Director, Black Wheel</h6>
      </div>
      <div className={classes.FormContainer}>
        <h5>Let’s start at the very beginning</h5>
        <form>
          <div>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Company"></input>
          </div>
          <button>Next Step</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;
