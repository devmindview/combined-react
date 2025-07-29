import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FadeInFromBottom from "./elements/FadeInFromBottom";

const faqData = [
  {
    question: "What is the delivery time?",
    answer: "Our typical delivery time is 3–5 business days, depending on your location.",
  },
  {
    question: "Are your products 100% natural?",
    answer: "Yes, all our ayurvedic products are made from 100% natural and herbal ingredients.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we deliver only within India. International shipping will be added soon.",
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Yes, returns and exchanges are accepted within 7 days of delivery if the product is unused and sealed.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <FadeInFromBottom>
        <h2 className="text-4xl text-center mb-12 text-green-800">
        Frequently Asked Questions
      </h2>
      </FadeInFromBottom>

      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
              >
                <span className="text-base sm:text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ExpandLessIcon className="text-green-600" />
                ) : (
                  <ExpandMoreIcon className="text-gray-500" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
