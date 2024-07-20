import QACards from "@/components/ServicePageComponents.js/QACards";
import RecentCards from "@/components/ServicePageComponents.js/RecentCards";
import ServiceCards from "@/components/ServicePageComponents.js/ServicesCards";
import Footer from "@/components/layouts/Footer";
import InstantQuoteCard from "@/components/layouts/InstantQuoteCard";
import Navigation from "@/components/layouts/Navigation";
import Link from "next/link";
import classes from "./ServicePage.module.css";
import BenefitsCard from "@/components/HomePageComponents/BenefitsCard";

const ServicePage = () => {
  return (
    <>
      <div className={classes.HeaderCard}>
        <Navigation />
        <h2>Product Development</h2>
      </div>
      <img
        src="/images/img_rectangle_1.png"
        alt="image"
        width="100px"
        className={classes.img_container}
      ></img>
      <p className={classes.para_container}>
        Pretium nunc nulla eu dolor pellentesque. Hendrerit tempor malesuada
        justo aliquet accumsan nulla arcu dolor. Tortor lorem nec ut vulputate
        purus quis tellus proin at. Urna diam blandit at sit pellentesque
        lacinia lectus rhoncus. Turpis egestas venenatis nulla bibendum.
      </p>
      <hr></hr>
      <p className={classes.title1_container}>
        Brands trust us are more than 500
      </p>
      {/* <div> Brand Logos </div> */}
      <div className={classes.capabilities_container}>
        <p>
          Are you a startup brand, well established company, in the India or
          worldwide? It doesn't matter. We work with a range of clients.
        </p>
        <div>
          <h3>Our Website Capabilities</h3>
          <ul>
            <div className={classes.capabilities_list_container}>
              <li>Web Design</li>
              <li>eCommerce</li>
              <li>Wireframes</li>
            </div>
            <div className={classes.capabilities_list_container}>
              <li>UX Design</li>
              <li>Responsive Design</li>
              <li>Strategy</li>
            </div>
          </ul>
        </div>
      </div>
      <div className={classes.Card1}>
        <img src="/images/img_rectangle_13.png" width="100px"></img>
        <div>
          <h4>Our Website Capabilities</h4>
          <h5>
            We know it’s hard for brands to setup an online experience, and
            budgets can be tight.
          </h5>
          <p>
            Magna sit duis netus mauris cursus pellentesque pellentesque
            imperdiet. Commodo nullam tellus turpis dapibus et lectus egestas
            vitae. Vestibulum risus dolor enim turpis. Aliquam adipiscing id
            tristique nec. Non quis id fermentum vitae pulvinar. Semper elit at
            posuere mauris phasellus. Dignissim posuere faucibus phasellus sit
            iaculis elementum id ipsum. Enim mattis pellentesque.
          </p>
          <Link href={"/"}>Schedule a call with our team</Link>
        </div>
      </div>
      <div className={classes.Card2}>
        <div>
          <h4>Our Website Capabilities</h4>
          <h5>
            We know it’s hard for brands to setup an online experience, and
            budgets can be tight.
          </h5>
          <p>
            Magna sit duis netus mauris cursus pellentesque pellentesque
            imperdiet. Commodo nullam tellus turpis dapibus et lectus egestas
            vitae. Vestibulum risus dolor enim turpis. Aliquam adipiscing id
            tristique nec. Non quis id fermentum vitae pulvinar. Semper elit at
            posuere mauris phasellus. Dignissim posuere faucibus phasellus sit
            iaculis elementum id ipsum. Enim mattis pellentesque.
          </p>
          <Link href={"/"}>Get Demo for free</Link>
        </div>
        <img src="/images/img_rectangle_13.png" width="100px"></img>
      </div>
      <div className={classes.title2_container}>
        <h4>
          We use the latest technologies available to create timeless products.
        </h4>
      </div>
      {/* <div>Logos</div> */}
      <div className={classes.title3_container}>
        <h4>What we can help you with</h4>
        <p>
          A team of product development experts that can help you design and
          build a website you're proud of
        </p>
      </div>
      <div>
        <ul className={classes.BenefitsCard_container}>
          {ServicesCardsData.map((OneCardData) => (
            <li key={OneCardData.title}>
              <BenefitsCard {...OneCardData} />
            </li>
          ))}
        </ul>
        <div className={classes.BenefitsCardLink_container}>
          <Link href={"/"} className={classes.BenefitsCard_container_link1}>
            Get Demo for free
          </Link>
          <Link href={"/"} className={classes.BenefitsCard_container_link2}>
            Get in touch today
          </Link>
        </div>
      </div>
      <h4 className={classes.title4_container}>
        What our happy clients say about us
      </h4>
      <div className={classes.CustomerReviewCard}>
        <div className={classes.CustomerReviewCardText}>
          <p className={classes.CustomerReviewCardText1}>
            Haptica went above and beyond to make sure we got something we were
            happy with
          </p>
          <p className={classes.CustomerReviewCardText2}>Johnson Root</p>
          <p className={classes.CustomerReviewCardText3}>
            Creative Director, Black Wheel
          </p>
        </div>
        <img src="/images/img_rectangle_22.png" alt="image" width="100px"></img>
        {/* <div>Forward Backward</div> */}
      </div>
      <div className={classes.RecentCardContainer}>
        <div>
          <h4>Our favourite</h4>
          <h4>Recent Developed Products</h4>
        </div>
        <ul>
          {RecentCardsData.map((OneCardData) => (
            <li key={OneCardData.title}>
              <RecentCards {...OneCardData} />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.QACardContainer}>
        <h4>The answers to your questions.</h4>
        <ul>
          {QACardsData.map((OneCardData) => (
            <li key={OneCardData.question}>
              <QACards {...OneCardData} />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.BottomContainer}>
      <div className={classes.InstantQuoteCardContainer}>
        <InstantQuoteCard/>
        </div>
      <div className={classes.FooterCard}>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default ServicePage;

const WebsiteCapabilities = [
  "Web Design",
  "eCommerce",
  "Wireframes",
  "UX Design",
  "Responsive Design",
  "Strategy",
];

const ServicesCardsData = [
  {
    title: "Web Design",
    description:
      "We work closely with you to understand your vision and goals.",
  },
  {
    title: "eCommerce",
    description:
      "Our streamlined approach helps you launch your product efficiently.",
  },
  {
    title: "Wireframes",
    description: "We build products that can grow alongside your business.",
  },
  {
    title: "UX Design",
    description:
      "We track key metrics to demonstrate the success of your product and marketing efforts.",
  },
  {
    title: "Responsive Design",
    description:
      "We work closely with you to understand your vision and goals.",
  },
  {
    title: "Strategy",
    description:
      "Our streamlined approach helps you launch your product efficiently.",
  },
];

const RecentCardsData = [
  { title: "Config1", image: "/images/img_rectangle_34.png" },
  { title: "Config2", image: "/images/img_rectangle_34.png" },
  { title: "Config3", image: "/images/img_rectangle_34.png" },
];

const QACardsData = [
  {
    question: "How long does it take to build a website1?",
    answer:
      "Timelines depend on the spec of the website project, but here are some guidelines...1)Shopify projects usually take around four weeks.2)Craft CMS projects usually take a minimum of five weeks.3)Craft Commerce projects usually take a minimum of eight weeks.",
  },
  {
    question: "How long does it take to build a website2?",
    answer:
      "Timelines depend on the spec of the website project, but here are some guidelines...1)Shopify projects usually take around four weeks.2)Craft CMS projects usually take a minimum of five weeks.3)Craft Commerce projects usually take a minimum of eight weeks.",
  },
  {
    question: "How long does it take to build a website3?",
    answer:
      "Timelines depend on the spec of the website project, but here are some guidelines...1)Shopify projects usually take around four weeks.2)Craft CMS projects usually take a minimum of five weeks.3)Craft Commerce projects usually take a minimum of eight weeks.",
  },
  {
    question: "How long does it take to build a website4?",
    answer:
      "Timelines depend on the spec of the website project, but here are some guidelines...1)Shopify projects usually take around four weeks.2)Craft CMS projects usually take a minimum of five weeks.3)Craft Commerce projects usually take a minimum of eight weeks.",
  },
  {
    question: "How long does it take to build a website5?",
    answer:
      "Timelines depend on the spec of the website project, but here are some guidelines...1)Shopify projects usually take around four weeks.2)Craft CMS projects usually take a minimum of five weeks.3)Craft Commerce projects usually take a minimum of eight weeks.",
  },
  {
    question: "How long does it take to build a website6?",
    answer:
      "Timelines depend on the spec of the website project, but here are some guidelines...1)Shopify projects usually take around four weeks.2)Craft CMS projects usually take a minimum of five weeks.3)Craft Commerce projects usually take a minimum of eight weeks.",
  },
];
