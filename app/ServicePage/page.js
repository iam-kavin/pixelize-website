import React from "react";
import Navigation from "@/components/layouts/Navigation";
import Link from "next/link";


const ServicePage = () => {
  return (
    <>
      <div className="">
        <div className="relative h-[700px] bg-[#f2db64] rounded-b-[40px]">
          <Navigation />
          <div className="relative z-10 px-4 md:px-20">
            <h2 className="text-3xl md:text-6xl pt-10 md:pt-20 pb-3">
              Engineering digital transformation by design
            </h2>
            <p className="text-lg md:text-2xl">
              Driving digital transformation through strategy, design, product engineering, data analytics & business process change
            </p>
          </div>
          <div className="absolute w-full pt-20">
            <img
              src="/images/img_rectangle_1.png"
              alt="image"
              className="mx-auto w-3/4 md:w-1/2 "
            />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-20 py-10 mt-40">
        <h3 className="text-3xl md:text-6xl pb-20 text-centre">Digital <span className="text-[#f2db64]">transformation services </span></h3>
        <p className="text-lg md:text-2xl leading-relaxed md:leading-loose text-center	">
          We provide end-to-end digital transformation services and solutions in digital consulting, customer experience designs, UI/UX designs, mobile app development, AI & machine learning solutions, automation, platform engineering, data analytics, enterprise software development, SAP implementation, cybersecurity solutions and other emerging technologies.
        </p>

        <div className="">
          {ServiceDetails.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-10 py-10">
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-6xl pb-5">{service.title}</h3>
                <p className="text-lg md:text-3xl pb-5 leading-relaxed md:leading-10	">{service.title2}</p>
                <p className="text-lg md:text-xl pb-5 leading-relaxed md:leading-10">{service.description}</p>
                <ul>
                  {service.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-[3rem]">{"- " + item}</li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 min-h-[300px] p-4  rounded-lg flex items-center justify-center">
                <img src={service.image} alt="image" className="max-h-full max-w-full object-cover rounded-md" />
              </div>

            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default ServicePage;


const ServiceDetails = [
  {
    title: "Digital Consulting",
    title2: "Accelerate product innovation, navigate business challenges, and create successful business strategies.",
    description:
      "Our digital consultants bring in cross-industry expertise to drive business success – from product launches to IT transitions. We combine actionable user-centric strategies with business and technology acumen.",
    list: ["Design thinking-led product discovery", "Digital platform & product management", "Business-IT alignment consulting", "Design thinking workshops"],
    image: "/images/img_rectangle_13.png",// 750&480
  },
  {
    title: "Customer Experience Design",
    title2: "Engage customers with exceptional experiences across platforms and devices to build lasting relationships.",
    description:
      "Our team of experienced designers are creative thinkers and problem solvers. Beyond just good-looking designs, we craft solutions that have a business impact. Our understanding of the product intent, consumer behavior, business objectives, and technology helps in crafting design solutions that help build customer loyalty.",
    list: ["Design strategy", "Design audit", "Creative vision", "UX/UI", "Design systems"],
    image: "/images/img_rectangle_13.png",
  },
  {
    title: "Platform Engineering & IT Modernization",
    title2: "Proven engineering skills and experience to bring alive great digital experiences.",
    description:
      "With over 25 years of proven expertise in engineering software solutions, we enjoy a reputation for delivering great digital products across platforms and devices. Our skilled team of developers has deep experience in emerging tech such as blockchain, AI/ML, Voice, and more.",
    list: ["Technology vision & architecture", "Consumer & enterprise application development", "Digital business technology platform", "Application modernization", "Agile delivery teams", "Testing-as-a-service"],
    image: "/images/img_rectangle_13.png",
  },
  {
    title: "Data & Analytics",
    title2: "Not just data but insights that help drive personalization and profitability.",
    description:
      "Our data analytics team generates data-driven insights to strengthen your decision-making and stimulate your business performance. We work to enhance your analytical and CRM abilities with real-time behavior analytics resources.",
    list: ["Data strategy & consulting", "Data experiment studio", "Applied data science", "Intelligent systems", "DataOps"],
    image: "/images/img_rectangle_13.png",
  },
  {
    title: "Enterprise Applications",
    title2: "Transform to an intelligent enterprise with end-to-end SAP services from Robosoft",
    description:
      "We offer a complete suite of SAP solutions designed to transform your business ecosystem. From strategy to implementation – our SAP specialists optimize your processes, aiding your transition into an Intelligent Enterprise.",
    list: ["SAP consulting & business advisory", "SAP implementation", "Application managed services (AMS)", "Cloud services"],
    image: "/images/img_rectangle_13.png",
  },
  {
    title: "Cybersecurity",
    title2: "Shield your organization from cyber threats with 360-degree security.",
    description:
      "Our cybersecurity specialists assess your security infrastructure and adopt a compliance-led security approach shielding the confidentiality, integrity, and availability of information across your enterprise.",
    list: ["Cyber strategy", "Application security", "Data security", "Endpoint security", "Cloud security"],
    image: "/images/img_rectangle_13.png",
  },
]


