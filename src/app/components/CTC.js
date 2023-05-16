import Link from "next/link";
import Image from "next/image";
import InfoImages from "../image/info.jpg";
const CTC = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-28">
        <h1
          className="font-bold text-4xl text-white leading-snug"
          data-aos="fade-up"
        >
          Using <span className="text-purple-500">GenAI</span> you can save
          hours each week creating long-form content.
        </h1>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          href="/"
          className=" inline-block text-white bg-gradient-to-r from-purple-400 to-pink-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Start Writing - It's Free
        </Link>
      </div>

      {/* Hero image */}
      <Image
        src={InfoImages}
        alt="Info Image"
        width={1100}
        height={400}
        className="border-2 border-yellow-500 mt-16 rounded-2xl"
        data-aos="fade-up"
      />
    </div>
  );
};

export default CTC;
