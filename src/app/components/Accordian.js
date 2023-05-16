"use client";
import { useState } from "react";

const Accordion = ({ index, title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-400" data-aos="fade-up">
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-3 text-2xl mb-4 font-medium text-left bg-black text-gray-400 hover:text-purple-500 focus:outline-none focus:bg-black transition duration-150 ease-in-out"
        onClick={() => onToggle(index)}
      >
        <span>{title}</span>
        <svg
          className={`h-6 w-6 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v4a1 1 0 002 0v-4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-black text-gray-500 text-lg">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const accordions = [
    {
      title: "Accordion 1Questions e Answers!",
      content:
        "Lorem ipsum cepteur sint occaecat cupicaecat cupidatat necat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudo officia deserunt mollit anim id est laborudollit anim id est laborudolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Accordion 2 ccordion 1Questions About our s",
      content:
        "Secepteur sint occaecat cupidatat non unt, sunt in culpa qui officia deserunt mollit anim id est laborudo est laborudopa qui officia deserunt mollit anim id est laborud do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Accordion 3 ccordion 1Qswers",
      content:
        "Ut enim ad minim cepteur sin, sunt in  qui officia deserunt mollit anim id est laborudoit anim id est laborudot in culpa qui officia deserunt mollit anim id est laboruveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Accordion 4 ccordion 1Questions Ab=swers",
      content:
        "Ducepteur sint ocdent, sunt inn culpa qui officia deserunt mollit anim id est laborudo mollit anim id est laborudoicia deserunt mollit anim id est laboruis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Accordion 5 ccordion 1Questionrs",
      content:
        "Excepteur sint occqui est laborudosint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborudoi officia deserunt mollit anim id est laborum.",
    },
  ];

  const handleToggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1); // close the accordion if it's already open
    } else {
      setOpenIndex(index); // open the clicked accordion and close the others
    }
  };

  return (
    <div className="mr-96 ml-96 mt-32">
      <div className="container" data-aos="fade-up">
        <div className="flex justify-center mb-18">
          <div className="w-full lg:w-10/12">
            <div className="text-center">
              <h1
                className="mb-20 text-white text-5xl font-bold leading-snug"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                Questions About our GenAI?{" "}
                <br className="hidden md:inline-block" />
                We have Answers!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          index={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={openIndex === index}
          onToggle={handleToggleAccordion}
        />
      ))}
    </div>
  );
};

export default AccordionSection;
