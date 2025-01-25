import React, { useState } from "react";

// Component to handle individual FAQ items
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <h3 className="text-lg font-bold text-red-700">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▲
        </span>
      </button>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

// Component to display the FAQ section
const Faq = () => {
  const faqData = [
    {
      question: "What is the difference between IELTS Academic and IELTS General Training?",
      answer:
        "If you plan to migrate to Canada, Australia, New Zealand, the UK or the USA, taking an IELTS General Training test makes sense. Or if you are planning on studying in secondary education, or enrolling in vocational training, this might still be the right choice. But if you plan to study in higher education or want professional registration in an English-speaking country, you might need to take an IELTS Academic test.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      {faqData.map((faq, index) => (
        <FaqItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default Faq;

