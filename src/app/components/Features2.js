import Image from "next/image";
import logo2 from "../image/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo4 from "../image/logos/logo4.png";
import Link from "next/link";
const Features2 = () => {
  return (
    <main className="mr-28 ml-28 mt-26 ">
      <div className="container">
        <div className="flex justify-center mb-18">
          <div className="w-full lg:w-9/12">
            <div className="text-center text-5xl">
              <p
                className="text-primary-dark"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                GenAI Use Cases
              </p>
              <h1
                className="text-white mb-0 leading-snug font-bold"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                Write Better Content Faster, The Future Of AI Writing Tools is
                Here
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-20" data-aos="fade-up">
        <div className="w-1/4 mr-3">
          <Image
            src={logo4}
            alt="Image 1"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-5">
            Writing Blog Content
          </h1>
          <p className="text-gray-400 mt-5">
            Writing blog content with GenAI, make sure you have a clear
            understanding of who your audience is.
          </p>

          <Link
            href="login.html"
            className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
          >
            Try Blog Content
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="w-1/4 mr-3">
          <Image
            src={logo4}
            alt="Image 3"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-5">Digital Ad Copy</h1>
          <p className="text-gray-400 mt-5">
            A Magical Tool to Optimize you content for the first know who you're
            targeting. Identify your target. 3
          </p>
          <Link
            href="login.html"
            className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
          >
            Try Digital Ad
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="w-1/4 mr-3">
          <Image
            src={logo4}
            alt="Image 4"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-5">Website Copy</h1>
          <p className="text-gray-400 mt-5">
            Optimize you content for the first know who you're targeting.
            Identify your target audience.
          </p>
          <Link
            href="login.html"
            className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
          >
            Try Website Copy
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="w-1/4 ">
          <Image
            src={logo4}
            alt="Image 3"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <h1 className="text-white text-xl font-bold mt-5">
            Social Media Content
          </h1>
          <p className="text-gray-400 mt-5">
            First know who you're targeting. Identify your target audience and
            understand their needs.
          </p>
          <Link
            href="login.html"
            className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
          >
            Try Social Media Content
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      <div className="mt-24" data-aos="fade-up">
        <div className="flex">
          <div className="w-1/4 mr-3">
            <Image
              src={logo4}
              alt="Image 1"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-white text-xl font-bold mt-5">
              Product Description
            </h1>
            <p className="text-gray-400 mt-5">
              First know who you're targeting. Identify your target audience and
              understand their needs.
            </p>
            <Link
              href="login.html"
              className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
            >
              Try Landing Page Copy
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="w-1/4 mr-3">
            <Image
              src={logo4}
              alt="Image 3"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-white text-xl font-bold mt-5">
              Landing Page Copy
            </h1>
            <p className="text-gray-400 mt-5">
              A Magical Tool to Optimize you content for the first know who
              you're targeting. Identify your target.
            </p>
            <Link
              href="login.html"
              className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
            >
              Try Marketing Copy
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="w-1/4 mr-3">
            <Image
              src={logo4}
              alt="Image 4"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-white text-xl font-bold mt-5">
              Marketing Copy
            </h1>
            <p className="text-gray-400 mt-5">
              Writing blog content with GenAI, make sure you have a clear
              understanding of who your audience is.
            </p>
            <Link
              href="login.html"
              className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
            >
              Try eCommerce Copy
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="w-1/4 ">
            <Image
              src={logo4}
              alt="Image 4"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-white text-xl font-bold mt-5">
              eCommerce Copy
            </h1>
            <p className="text-gray-400 mt-5">
              Optimize you content for the first know who you're targeting.
              Identify your target audience.
            </p>
            <Link
              href="login.html"
              className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-gray-600 mt-4  hover:underline"
            >
              Try Product Description
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Features2;
