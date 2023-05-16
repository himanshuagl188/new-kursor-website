"use client";
import Link from "next/link";
import Image from "next/image";
import InfoImages from "../image/info.jpg";
import reviews from "../image/reviews/review.svg";
import review2 from "../image/reviews/review2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroHome = () => {
 
  return (
    <section>
      {/* Hero content */}
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center ">

            <h1 className="h1 mb-4 text-5xl font-bold text-white leading-snug " data-aos="fade-up">
            Search. Write. Create. Explore on one click with Kursor
            </h1>

          <div className="flex justify-center space-x-4 mt-6">
            <Link
              href="/"
              className="mt-3 inline-block text-white bg-gradient-to-r  from-purple-400 to-pink-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              data-aos="fade-up"
            >
              Start Writing - It's Free
            </Link>
          </div>
        </div>
      </div>

      {/* Screen Image  */}
      <Image
        src={InfoImages}
        alt="Info Image"
        width={1000}
        height={600}
        className="border-2 border-purple-500 rounded-3xl mb-4"
        data-aos="fade-up" // Add the data-aos attribute with the animation effect
      />


      <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 items-center justify-center mt-8 mb-0 text-gray-400">
        <li>
          <FontAwesomeIcon icon={faCircle} className="h-2 w-2 text-gray-500" />
          &nbsp;&nbsp; Write Blogs 10X Faster
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faCircle}
            className="h-2 w-2 text-gray-500"
          />{" "}
          &nbsp;&nbsp;Write Higher Converting Posts
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faCircle} className="h-2 w-2 text-gray-500" />
          &nbsp;&nbsp; Write More Engaging Emails
        </li>
      </ul>

      <div className="flex items-center justify-center mt-12 review-badges">
        <Image src={review2} alt="" className="w-48 h-12 ml-8 mr-8" />
        <Image src={reviews} alt="" className="w-48 h-12 " />
      </div>
    </section>
  );
};

export default HeroHome;
