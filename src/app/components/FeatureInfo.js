import Image from "next/image";
import img from "../image/illustration/feature-illustration-3-yellow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import feature1 from "../image/illustration/feature-illustration-1-yellow.svg";
import featureImg from "../image/illustration/feature-illustration2.svg";
import Link from "next/link";
const FeatureInfo = ({ extraClassList }) => {
  return (
    <main className="mr-28 ml-28 mt-20">
      <section className={`py-10 py-lg-15 ${extraClassList}`}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-14 xl:gap-x-20 items-center">
            <div
              className="lg:col-span-1"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <div className="content">
                <p className="text-purple-500">Features 1</p>
                <h1 className="text-white mb-8 text-5xl mt-3 font-bold leading-normal">
                  Let's Create AI-Powered Content With A Single Click.
                </h1>
                <p className="mb-6 text-gray-400 leading-normal">
                  To create powerful content, you need to know who you're
                  targeting. Identify your target audience and understand their
                  needs, interests, and pain points.
                </p>
                <ul className="list-disc list-inside mb-8">
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Start creating powerful content, for
                      your next ads
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />

                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Let's Communicate with your customers
                      with emotions
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Use visuals like images, videos, or
                      infographics to content more engaging
                    </span>
                  </li>
                </ul>

                <Link
                  href="login.html"
                  className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-purple-600 mt-4  hover:underline"
                >
                  Try Blog Content
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
              <div class="feature-img">
                <Image src={feature1} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}

      <section className={`py-10 py-lg-15 ${extraClassList}`}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-14 xl:gap-x-20 items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up-sm"
              data-aos-delay="250"
            >
              <div className="feature-img">
                <Image src={featureImg} alt="" class="img-fluid" />
              </div>
            </div>
            <div
              className="lg:col-span-1"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <div className="content">
                <p className="text-purple-500">Features 2</p>
                <h1 className="text-white mb-8 text-5xl mt-3 font-bold leading-snug">
                  A Magical Tool To Optimize Your Content For First Page
                  Rankings
                </h1>
                <p className="mb-6 text-gray-400 leading-normal">
                  A Magical Tool to Optimize you content for the first know who
                  you're targeting. Identify your target audience and understand
                  their needs, interests, and pain points.
                </p>
                <ul className="list-disc list-inside mb-8">
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Start creating powerful content, for
                      your next ads
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Let's Communicate with your customers
                      with emotions
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Use visuals like images, videos, orto
                      make your content more engaging
                    </span>
                  </li>
                </ul>
                <Link
                  href="login.html"
                  className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-purple-600 mt-4  hover:underline"
                >
                  Try Blog Content
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature 3 */}
      <section className={`py-10 py-lg-15 ${extraClassList}`}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-14 xl:gap-x-20 items-center">
            <div
              className="lg:col-span-1"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <div className="content">
                <p className="text-purple-500">Features 3</p>
                <h1 className="text-white mb-8 text-5xl mt-3 font-bold leading-snug">
                  Let's Create AI-Powered Content With A Single Click.
                </h1>
                <p className="mb-6 text-gray-400 leading-normal">
                  To create powerful content, you need to know who you're
                  targeting. Identify your target audience and understand their
                  needs, interests, and pain points.
                </p>
                <ul className="list-disc list-inside mb-8">
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Start creating powerful content, for
                      your next ads
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Communicate with your customers with
                      emotions
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Use visuals like images, videos, or
                      infographics to make your content more engaging
                    </span>
                  </li>
                </ul>
                <Link
                  href="login.html"
                  className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-purple-600 mt-4  hover:underline"
                >
                  Try Blog Content
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
              <div class="feature-img">
                <Image src={img} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeatureInfo;
