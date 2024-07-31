import BenefitsCard from "@/components/HomePageComponents/BenefitsCard";
import HelpCard from "@/components/HomePageComponents/HelpCard";
import RecentCard from "@/components/HomePageComponents/RecentCard";
import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/Navigation";
import Link from "next/link";
import classes from "./HomePage.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { FaReact } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className={classes.HeaderCard}>
        <Navigation />
        <h3>We Provide Web and App Development Services for Startups and SMBs</h3>
        <div className={classes.HeaderCard_para}>
          <p>
            We help businesses achieve digital transformation through our customized
            scalable white label solutions. Our team of experts will help you
          </p>

        </div>
      </div>
      <div className={classes.img_container}>
        <img src="\images\img_group_346.png" alt="image" />
        <div className={classes.img_container_lines}>
          <p>Feeling overwhelmed by the product development process?</p>
          <p>
            Struggling to translate your brilliant idea into a market-ready
            solution?
          </p>
        </div>
      </div>

      <div className="ml-5 mt-5 mb-5 max-w-full md:ml-10 md:mt-10 md:mb-20 lg:ml-20 lg:mt-60 lg:mb-20 max-w-4xl h-auto relative ">
        <p className="text-base md:text-3xl lg:text-3xl font-light leading-6 md:leading-10 lg:leading-10 text-left">
          At Haptico, we're your one-stop shop for crafting exceptional digital
          products and propelling them to success. We're a passionate team of
          <span className="font-medium"> developers, designers, and marketing experts</span> who believe
          in the power of collaboration. We partner with businesses like yours
          to bring your vision to life, from the initial concept to launch and
          beyond.
        </p>
      </div>

      <div className="flex flex-col items-end mr-4 mb-10 md:mr-6 md:mb-30 lg:mr-9 lg:mb-40 relative">
        <p className="text-right relative after:content-[''] after:block after:w-16 md:after:w-20 lg:after:w-24 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:right-0 text-black-200">
          Service We Offer
        </p>
        <h4 className="h-16 text-3xl md:text-4xl lg:text-6xl font-light leading-tight text-right text-black">
          Solutions Customized
          for Diverse Requirements
        </h4>
      </div>
      <ul className={`${classes.HelpCard_container} flex flex-wrap`}>
        {HelpCardData.map((OneCardData) => (
          <li key={OneCardData.title} className="w-full sm:w-1/2 lg:w-1/4 p-2">
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

      <div className="w-[97%] flex justify-end h-20 mt-[80px] mb-[50px] relative">
        <h4 className="text-7xl font-light leading-[80px] text-right text-black">Benefits of Working with Us</h4>
      </div>

      <div className="p-4">
        <hr className="my-4 border-gray-300" />
        <ul className="flex flex-wrap -mx-2">
          {BenefitsCardData.map((OneCardData) => (
            <li key={OneCardData.title} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 h-full flex flex-col">
                <img src={OneCardData.imageUrl} alt={OneCardData.title} className="w-full h-32 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-5">
                    <FaReact className="text-indigo-600 mr-2" /> {/* React Icon */}
                    <h5 className="text-2xl font-bold">{OneCardData.title}</h5>
                  </div>
                  <p className="text-gray-700 mb-4">{OneCardData.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {OneCardData.list.map((item) => (
                      <li key={item} className="text-gray-600 mb-6 leading-7">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>



      <div className={classes.title4_container}>
        <h4>
          Ready to stop chasing trends and start creating something truly
          remarkable?
        </h4>
      </div>
      <div className={classes.links_container}>
        <Link href={"/SignupPage"} className={classes.link1}>Get a Free Consultation</Link>
        <Link href={"/ServicePage"} className={classes.link2}>Learn More About Our Services<BsArrowUpRight fontSize="1em" strokeWidth="1.5" /></Link>
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
    title: "Evolve",
    image: "/images/helper1.png",
    description:
      "Build product & platform strategies based on customer needs & insights.",
    list: ["Design Thinking - led Product Discovery ", "Digital Platform & ProductManagement", "Business-IT Consulting"],
  },
  {
    title: "Engage",
    image: "/images/helper2.png",
    description:
      "Create exceptional experiences across platforms & devices to build lasting customer relationships.",
    list: ["Design Strategy", "UX/UI", "Creative Vision & Design", "Design Systems", "Design QC"],
  },
  {
    title: "Engineer",
    image: "/images/helper3.png",
    description:
      "Harness technologies to bring alive digital experience & enhance IT operations.",
    list: ["Technology Vision & Architecture", "Consumer & Enterprise Application Development", "Application Modernization", "Testing & Quality Assurance", "Embedded Engineering Ecosystem"],
  },
  {
    title: "Empower",
    image: "/images/helper4.png",
    description:
      "Implement processes & optimize business operations through data & security solutions.",
    list: ["Data & Analytics", "Cybersecurity", "Enterprise Applications", "Cloud & Infrastructure"],
  },
];

// const HelpCardData = [
//   {
//     title: "Development",
//     image: "/images/img_rectangle_5.png",
//     description:
//       "Turn design ideas into usable digital products that provide overarching value and a seamless customer experience.",
//     list: ["Mobile App Development", "Web Development", "Progressive Web App Development", "UI/UX Design"],
//   },
//   {
//     title: "Engineering",
//     image: "/images/img_rectangle_6.png",
//     description:
//       "Craft and build innovative software tools and applications to achieve sustainable outcomes and business goals.",
//     list: ["Product Engineering", "Application Modernization", "Data Engineering"],
//   },
//   {
//     title: "Blockchain",
//     image: "/images/img_rectangle_7.png",
//     description:
//       "Our experienced blockchain development team can boost your crypto-venture with our range of tailored solutions.",
//     list: ["NFT Marketplace", "defi-menuDeFi Solutions", "ICO Services"],
//   },
//   {
//     title: "Blockchain",
//     image: "/images/img_rectangle_7.png",
//     description:
//       "Our experienced blockchain development team can boost your crypto-venture with our range of tailored solutions.",
//     list: ["NFT Marketplace", "defi-menuDeFi Solutions", "ICO Services"],
//   },
// ];

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
    list: ["Transparent Communication: We prioritize clear and open communication to ensure your vision and goals are fully understood and implemented.",
      "Dedicated Team: Work with a dedicated team of experienced professionals who are committed to your project's success.",
      "Agile Methodologies: Our agile development process ensures flexibility and adaptability, allowing us to quickly respond to your feedback and evolving requirements."],
    imageUrl: "/images/withus1.jpeg" // Example image URL
  },
  {
    title: "Faster Time to Market",
    description:
      "Our streamlined approach helps you launch your product efficiently.",
    list: ["Efficient Processes: Our streamlined development processes are designed to accelerate project timelines without compromising on quality.",
      "Rapid Prototyping: We leverage rapid prototyping techniques to quickly bring your ideas to life and gather valuable user feedback early in the development cycle.",
      "Continuous Delivery: With our continuous delivery approach, we ensure that new features and updates are deployed quickly and reliably."],
    imageUrl: "/images/withus2.jpeg" // Example image URL
  },
  {
    title: "Scalable Solutions",
    description: "We build products that can grow alongside your business.",
    list: ["Custom Development: We build tailored solutions that are designed to grow with your business and adapt to changing market demands.",
      "Modern Technologies: Utilizing the latest technologies and best practices, we create scalable and future-proof web applications.",
      "Cloud Integration: Our expertise in cloud integration ensures that your web solutions are scalable, secure, and highly available."],
    imageUrl: "/images/withus3.jpg" // Example image URL
  },
  {
    title: "Measurable Results",
    description:
      "We track key metrics to demonstrate the success of your product and marketing efforts.",
    list: ["Data-Driven Approach: We use analytics and data-driven insights to guide our development process and optimize your web solutions for performance and user engagement.",
      "Performance Monitoring: Continuous monitoring and optimization ensure that your web applications perform at their best, providing an excellent user experience.",
      "ROI Focus: Our goal is to deliver solutions that not only meet your technical requirements but also drive tangible business results and a strong return on investment."],
    imageUrl: "/images/withus4.jpeg" // Example image URL
  },
];