import RecentCards from "@/components/ServicePageComponents.js/RecentCards";
import Footer from "@/components/layouts/Footer";
import InstantQuoteCard from "@/components/layouts/InstantQuoteCard";
import Navigation from "@/components/layouts/Navigation";
import classes from "./WorkPage.module.css";

const WorkPage = () => {
  return (
    <div className={classes.WorkPageCard}>
      <div className={classes.nav_container}> 
        <Navigation />
      </div>
      <div className={classes.title1_container}>
        <h3>Refreshing Cream's digital presence</h3>
      </div>
      <img
        src="\images\img_rectangle_1_586x1130.png"
        alt="image"
        className={classes.img1}
      ></img>
      <div className={classes.description1_container}>
        <p>
          Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada
          justo aliquet accumsan nulla arcu dolor. Tortor lorem nec ut vulputate
          purus quis tellus proin at. Urna diam blandit at sit pellentesque
          lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
        </p>
        <div className={classes.description1_table}>
          <div>
            <h5>Client</h5>
            <h6>Cream</h6>
          </div>
          <div>
            <h5>Industry</h5>
            <h6>Cosmetics</h6>
          </div>
          <div>
            <h5>Duration</h5>
            <h6>12 Weeks</h6>
          </div>
        </div>
      </div>
      <div>
        <img></img>
        <img></img>
      </div>
      <div className={classes.logo_description}>
        <div>
        <h5>The logo</h5>
        <h6>Identity of Cream's digital presence</h6>
        </div>
        <p>
          Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada
          justo aliquet accumsan nulla arcu dolor. Tortor lorem nec ut vulputate
          purus quis tellus proin at. Urna diam blandit at sit pellentesque
          lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
        </p>
      </div>
      <div className={classes.image1_container}>
      <img src="./images/a1a130987014a5837c078ddf2406f8dc.jpeg" alt="image"></img>
      </div>
      <div className={classes.images2_container}>
        <img
          src="./images/img_rectangle_16.png"
          alt="image"
        ></img> 
        <img
          src="./images/img_rectangle_17.png"
          alt="image"
        ></img>
      </div>  
      <div className={classes.logo_description}>
        <div>
        <h5>The logo</h5>
        <h6>Identity of Cream's digital presence</h6>
        </div>
        <p>
          Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada
          justo aliquet accumsan nulla arcu dolor. Tortor lorem nec ut vulputate
          purus quis tellus proin at. Urna diam blandit at sit pellentesque
          lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
        </p>
      </div>
      <div className={classes.images3_container}>
        <img
          src="./images/img_rectangle_19.png"
          alt="image"
          width="100px"
        ></img>
        <img
          src="./images/img_rectangle_20.png"
          alt="image"
          width="100px"
        ></img>
        <img
          src="./images/img_rectangle_21.png"
          alt="image"
          width="100px"
        ></img>
      </div>
      <div className={classes.InterestingProjects}>
        <h5>Our other</h5>
        <h5>Interesting projects</h5>
        <ul>
          {RecentCardsData.map((OneCardData) => (
            <li key={OneCardData.title}>
              <RecentCards {...OneCardData} />
            </li>
          ))}
        </ul>
        </div>
        <div className={classes.BottomContainer}>
      <div className={classes.InstantQuoteCardContainer}>
        <InstantQuoteCard background="#020202"/>
        </div>
      <div className={classes.FooterCard}>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default WorkPage;

const RecentCardsData = [
  { title: "Config1", image: "/images/img_rectangle_34.png" },
  { title: "Config2", image: "/images/img_rectangle_34.png" },
  { title: "Config3", image: "/images/img_rectangle_34.png" },
];
