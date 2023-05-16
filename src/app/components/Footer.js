import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <main className="ml-24 mt-20">
      <footer className="bg-striped pt-10 pt-lg-15">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-9 xl:col-span-8 order-2 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0">
                <div className="footer-widget text-center md:text-left ml-16">
                  <h6 className="text-white mb-2">Gen AI</h6>

                  <ul className="link-list list-unstyled mb-0 text-gray-500">
                    <li className="mt-2 text-sm">
                      <Link href="#">About</Link>
                    </li>

                    <li className="mt-3 text-sm">
                      <Link href="/about">Blog</Link>
                    </li>
                    <li className="mt-3 text-sm">
                      <Link href="/about">Sign in</Link>
                    </li>
                    <li className="mt-3 text-sm">
                      <Link href="/about">Register</Link>
                    </li>
                    <li className="mt-3 text-sm">
                      <Link href="/about">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget text-center md:text-left ml-8">
                  <h6 className="text-white mb-2">Use Cases</h6>
                  <ul className="link-list list-unstyled mb-0 text-gray-500">
                    <li className="text-sm">
                      <Link href="#">AI writer</Link>
                    </li>

                    <li className="mt-3 text-sm">
                      <Link href="/ai-writer">Businesses AI</Link>
                    </li>
                    <li className="mt-3 text-sm">
                      <Link href="/ai-writer">AI Blog writer</Link>
                    </li>
                    <li className="mt-3 text-sm">
                      <Link href="/ai-writer">AI Content Creator</Link>
                    </li>
                    <li className="mt-3 text-sm">
                      <Link href="/ai-writer">Article write</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer-widget text-center md:text-left ml-8">
                  <h6 className="text-white mb-4">News &amp; Update</h6>
                  <form action="#">
                    <div className="flex items-center mt-6">
                      <input
                        type="email"
                        className="form-control py-3 px-2 rounded-l-lg"
                        placeholder="Enter your email"
                      />
                      <button
                        className="py-3 px-4 bg-purple-500 border-purple-400 border-2 rounded-r-lg "
                        type="button"
                      >
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="text-white"
                        />
                      </button>
                    </div>
                  </form>
                  <ul className="list-unstyled d-flex flex-wrap align-center justify-center justify-md-start gap-3 social-list mb-0 mt-6">
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={faGithub}
                        color="gray"
                        className="text-xl"
                      />
                    </Link>

                    <Link href="#">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        color="gray"
                        className="ml-5 text-xl"
                      />
                    </Link>

                    <Link href="#">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        color="gray"
                        className="ml-5  text-xl"
                      />
                    </Link>

                    <Link href="#">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        color="gray"
                        className="ml-5  text-xl"
                      />
                    </Link>

                    <Link href="#">
                      <FontAwesomeIcon
                        icon={faGithub}
                        color="gray"
                        className="ml-5  text-xl"
                      />
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 order-1 lg:order-1 ml-auto">
              <div className="footer-widget text-center lg:text-left">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="GenAI Logo"
                    width={135}
                    height={34}
                    className="img-fluid"
                  />
                </Link>
                <p className="fs-sm mb-0 mt-4 text-sm text-gray-500 w-3/2">
                  A Magical Tool to Optimize you content for the first know who
                  you're targeting. Identify your target audience.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-6 mt-8">
            <p className="fs-sm mb-0 text-gray-400 text-sm mr-36">
              Copyright
              <span className="text-purple-500"> GenAI</span>. Design By
              Marvel_Theme
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
