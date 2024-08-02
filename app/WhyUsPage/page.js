"use client";
import React, { useState } from "react";
import Navigation from "@/components/layouts/Navigation";
import { ChoosingUsData, sliderChoosingUs } from "@/components/data";
import Link from "next/link";
import Footer from "@/components/layouts/Footer";

const WhyUsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderChoosingUs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderChoosingUs.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="">
        <div className="relative h-screen">
          <img
            src="/images/about-bg-img.webp"
            alt="Why Choose Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10">
            <Navigation />
          </div>
        </div>

        <div className="container mx-auto mt-12">
          <h1 className="text-6xl font-400 mb-10">
            What do you get by choosing us?
          </h1>
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ChoosingUsData.map((data, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-24 h-24 mx-auto"
                  />
                  <h2 className="text-xl font-bold mt-4 mb-2">{data.title}</h2>
                  <p>{data.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="block bg-gray-800 text-white py-8">
          <div className="flex justify-between items-center p-10">
            <div className="flex-1 text-6xl">Let’s stay in touch</div>
            <div className="flex-1 text-2xl">
              Join our newsletter for a monthly tech content, distributed teams
              best practices and updates about SoftwareMill.

              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                  />
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto">
            <h1 className="text-6xl font-400 mb-10">What our clients say</h1>
          </div>
          <div className="container mx-auto p-4 mt-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 z-20"
              >
                &#10094;
              </button>
              <div className="flex overflow-hidden">
                {sliderChoosingUs.map((item, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out transform ${index === currentIndex ? "block" : "hidden"
                      }`}
                  >
                    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-auto md:mx-0 rounded-full shadow-md"
                      />
                      <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">
                          {item.title}
                        </h2>
                        <p className="mb-4 text-gray-600">{item.description}</p>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.name}
                          </p>
                          <p className="text-gray-500">{item.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>


        <Footer />


      </div>
    </>
  );
};

export default WhyUsPage;
