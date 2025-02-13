import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const faqs = [
  {
    question: "What is Ingenium?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    question: "How can I participate?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    question: "When is the event?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    question: "Where is the venue?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_pgydmdp',
        'template_19r2ytw',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Vishvkumar',
          to_email: 'techband01@gmail.com'
        },
        'WGL1tzK4G42kch_L0'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[url('/bg-texture.jpg')] min-h-screen w-full py-16 px-4 sm:px-6 md:px-8">
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,15,91,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,15,91,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="w-full flex justify-center mt-20 mb-16">
          <div className="w-48 md:w-60">
            <img src="/Logos/Ing_White_2025.png" alt="Ingenium Logo" className="w-full h-auto" />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-colPink/20">
            <h2 className="font-primaryFont text-3xl sm:text-4xl text-white mb-6 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/10 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/10 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full bg-white/10 border border-colPink/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-colPink"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-colPink text-white rounded-full py-3 hover:bg-pink-700 transition-colors duration-300"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          {/* FAQs */}
          <div className="space-y-6">
            <h2 className="font-primaryFont text-3xl sm:text-4xl text-white mb-8 text-center">FAQs</h2>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-colPink/40 rounded-lg overflow-hidden"
                initial={false}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-white bg-black/30 backdrop-blur-sm"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-secFont1 text-left">{faq.question}</span>
                  {openFaq === index ? (
                    <FaMinus className="text-colPink" />
                  ) : (
                    <FaPlus className="text-colPink" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  className="overflow-hidden bg-black/20"
                >
                  <p className="px-6 py-4 text-gray-300 font-secFont1">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 