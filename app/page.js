import BenefitsCard from "@/components/HomePageComponents/BenefitsCard";
import HelpCard from "@/components/HomePageComponents/HelpCard";
import RecentCard from "@/components/HomePageComponents/RecentCard";
import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";
import Link from "next/link";
import classes from "./HomePage.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.HeaderCard}>
        <Navigation />
        <h3>We bridge the gap between vision and reality</h3>
        <div className={classes.HeaderCard_para}>
        <p>
          Full-Stack Development & Marketing Solutions for Growth-Driven
          Businesses
        </p>
        </div>
      </div>
      <div className={classes.img_container}>
        <img src="\images\img_group_346.png" alt="image"/>
        <div className={classes.img_container_lines}>
          <p>Feeling overwhelmed by the product development process?</p>
          <p>
            Struggling to translate your brilliant idea into a market-ready
            solution?
          </p>
        </div>
      </div>
      <div className={classes.para_container}>
        <p>
          At Haptico, we're your one-stop shop for crafting exceptional digital
          products and propelling them to success. We're a passionate team of
          <span> developers, designers, and marketing experts</span> who believe
          in the power of collaboration. We partner with businesses like yours
          to bring your vision to life, from the initial concept to launch and
          beyond.
        </p>
      </div>
      <div className={classes.title1_container}>
        <h4>Here's how we can help</h4>
      </div>
      <ul className={classes.HelpCard_container}>
        {HelpCardData.map((OneCardData) => (
          <li key={OneCardData.title}>
            <HelpCard {...OneCardData} />
          </li>
        ))}
      </ul>
      <h4 className={classes.title2_container}>Recent work</h4>
      <ul className={classes.RecentCard_container}>
        {RecentCardData.map((OneCardData) => (
          <li key={OneCardData.title}>
            <RecentCard {...OneCardData} />
          </li>
        ))}
      </ul>
      <div className={classes.title3_container}>
      <h4>Benefits of Working with Us</h4>
      </div>
      <div>
        <hr></hr>
      <ul className={classes.BenefitsCard_container}>
        {BenefitsCardData.map((OneCardData) => (
          <li key={OneCardData.title}>
            <BenefitsCard {...OneCardData} />
          </li>
        ))}
      </ul>
      <hr></hr>
      </div>
      <div className={classes.title4_container}>
      <h4>
        Ready to stop chasing trends and start creating something truly
        remarkable?
      </h4>
      </div>
      <div className={classes.links_container}>
        <Link href={"/SignupPage"} className={classes.link1}>Get a Free Consultation</Link>
        <Link href={"/ServicePage"} className={classes.link2}>Learn More About Our Services</Link>
      </div>
      <div className={classes.Footer_container}>
      <Footer />
      </div>
    </>
  );
};

export default Home;

const HelpCardData = [
  {
    title: "Product Development",
    image: "/images/img_rectangle_5.png",
    description:
      "Our skilled developers build robust front-end and back-end solutions tailored to your specific needs.",
  },
  {
    title: "Marketing Mastery",
    image: "/images/img_rectangle_6.png",
    description:
      "We leverage SEO, SEM, and SMM strategies to ensure your product reaches the right audience.",
  },
  {
    title: "Data-Driven Decisions",
    image: "/images/img_rectangle_7.png",
    description:
      "We utilize data insights to optimize your product and marketing strategies for maximum impact.",
  },
];

const RecentCardData = [
  {
    title: "HIP HIP",
    image: "/images/img_rectangle_8.png",
    description:
      "A coffee brand’s complete branding and helped them to 3x their growth rate",
  },
  {
    title: "HIP HIP",
    image: "/images/img_rectangle_9.png",
    description:
      "A coffee brand’s complete branding and helped them to 3x their growth rate",
  },
  {
    title: "HIP HIP",
    image: "/images/img_rectangle_10.png",
    description:
      "A coffee brand’s complete branding and helped them to 3x their growth rate",
  },
];

const BenefitsCardData = [
  {
    title: "Seamless Collaboration",
    description:
      "We work closely with you to understand your vision and goals.",
  },
  {
    title: "Faster Time to Market",
    description:
      "Our streamlined approach helps you launch your product efficiently.",
  },
  {
    title: "Scalable Solutions",
    description: "We build products that can grow alongside your business.",
  },
  {
    title: "Measurable Results",
    description:
      "We track key metrics to demonstrate the success of your product and marketing efforts.",
  },
];
