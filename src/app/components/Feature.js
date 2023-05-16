import Image from "next/image";
import logo1 from "../image/logos/logo1.png";
import logo2 from "../image/logos/logo2.png";

const Feature = () => {
  return (
    <main className="mr-28 ml-28 mt-20">
      <section className="py-10 py-lg-15">
        <div className="container">
          <div className="text-center mb-18">
            <h1
              className="mb-0 text-white text-5xl font-bold leading-normal"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              Generate Creative AI Copy On-The-Spot,{" "}
              <br className="d-none d-lg-block" />
              Across Your Favorite Tools
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14 mt-20">
            <div
              className="flex flex-col gap-6 lg:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 flex-shrink-0 d-flex items-center justify-center rounded-3 p-2 border-black bg-gradient-to-r from-black to-black text-white border-gray-500 border-opacity-10">
                <Image
                  src={logo2}
                  alt="Generates quality contents"
                  width={32}
                  height={32}
                />
              </div>
              <div className="content">
                <h4 className="mb-4 text-white text-2xl font-bold">
                  Generates the Qualitys contents
                </h4>
                <p className="text-gray-400">
                  This tool helps you find the right keywords to target for your
                  content. By using the Google Keyword Planner, you can see how
                  often people
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-6 lg:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="250"
            >
              <div className="w-14 h-14 flex-shrink-0 d-flex items-center justify-center rounded-3 p-2 border-gray-300">
                <Image
                  src={logo1}
                  alt="Provides Useful Suggestions"
                  width={32}
                  height={32}
                />
              </div>
              <div className="content">
                <h4 className="mb-4 text-white text-2xl font-bold">
                  Provides Useful Suggestions
                </h4>
                <p className="text-gray-400">
                  GenAI writing tools can analyze data and generate insights to
                  help writers create more compelling and new one informative
                  content.
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-6 lg:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="300"
            >
              <div className="w-14 h-14 flex-shrink-0 d-flex items-center justify-center rounded-3 p-2 ">
                <Image
                  src={logo2}
                  alt="Improves Products Productivity"
                  width={32}
                  height={32}
                />
              </div>
              <div className="content">
                <h4 className="mb-4 text-white text-2xl font-bold">
                  Improves Products Productivity
                </h4>
                <p className="text-gray-400">
                  Emotions are a powerful tool in advertising. Use emotions that
                  resonate with your audience to create a new only one
                  connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Feature;
