import React from "react";
import Header from "../components/Header";
import FeaturedArticles from "../components/FeaturedArticles"; // Ensure this component exists
import ukvi from "../assets/ukvi_new.jpg"; // Update the path to the actual image file

const GeneralUkvi = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          IELTS for UKVI Academic
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          If you want to study in the UK or apply for professional registration,
          you might need to take an IELTS for UKVI Academic test. It is a Secure
          English Language test (SELT) approved by the UK Home Office for visa
          applications to the United Kingdom.
        </p>
        <img
          src={ukvi}
          alt="IELTS Information"
          className="w-full max-w-md rounded-lg shadow-md"
        />
        <FeaturedArticles />
      </div>
    </>
  );
};

export default GeneralUkvi;