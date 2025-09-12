import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0) // first FAQ open by default
  const navigate = useNavigate()

  const faqs = [
    {
      question: "What is Data Migration?",
      answer:
        "Data migration involves transferring your organization's data and assets from one system to another. This could entail moving your storage system from a network share to a cloud-based system."
    },
    {
      question: "What is Cloud Storage?",
      answer: "Cloud storage is a service model in which data is maintained, managed, backed up remotely, and made available to users over a network (typically the internet)."
    },
    {
      question: "Why is Cloud Storage better than a File System?",
      answer: "Cloud storage offers scalability, accessibility from anywhere, and reduced maintenance compared to traditional file systems."
    },
    {
      question: "When should I use custom software versus off-the-shelf software?",
      answer: "Custom software is ideal when your business has unique needs, while off-the-shelf software works well for common, general requirements."
    },
    {
      question: "What happens after we submit a contact form?",
      answer: "Our team will review your inquiry and get back to you within 24–48 hours with the next steps."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index) // close if already open
  }

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-800 mb-4 transform transition-all duration-300 hover:scale-105 hover:text-teal-900">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Click on a question to see the details.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-2 border-teal-500 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${openIndex === index ? "bg-teal-50" : "bg-white"
              }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center group transition-colors duration-300 hover:bg-teal-100 rounded-xl"
            >
              <span
                className={`text-lg font-medium transition-colors duration-300 ${openIndex === index
                    ? "text-teal-900 group-hover:text-teal-950"
                    : "text-teal-800 group-hover:text-teal-950"
                  }`}
              >
                {faq.question}
              </span>
              <span
                className={`text-2xl font-bold transform transition-all duration-300 ${openIndex === index
                    ? "text-teal-700 rotate-180 group-hover:text-teal-900"
                    : "text-teal-500 group-hover:text-teal-900"
                  }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 opacity-100 animate-fadeIn border-t border-teal-200">
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h3 className="text-3xl font-bold text-teal-800 mb-4 transform transition-all duration-300 hover:scale-105 hover:text-teal-900">
            Have More Questions?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Send us a message! We're here to help.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transform transition-all duration-300 hover:bg-teal-700 hover:scale-110 shadow-lg hover:shadow-2xl active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQs
