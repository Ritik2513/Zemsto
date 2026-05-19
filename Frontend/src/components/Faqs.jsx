import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

const faqsData = [
  {
    q: "How do I pay school fees via Zemsto?",
    a: "You can pay your child’s school fees directly through Zemsto using UPI, debit/credit card or net banking. Once payment is completed, you automatically become eligible for cashback and rewards.",
  },
  {
    q: "When will I receive my cashback and rewards?",
    a: "Cashback is credited to your Zemsto wallet within 24–72 hours after successful fee payment. Rewards and partner benefits are unlocked instantly inside your dashboard.",
  },
  {
    q: "Is my financial data secure with Zemsto?",
    a: "Yes. Zemsto uses bank-grade encryption and secure payment gateways. Your payment data is never stored on our servers, ensuring complete privacy and protection.",
  },
  {
    q: "What if my school isn’t listed on the platform?",
    a: "No worries! You can still pay fees using Zemsto. Simply request your school from the app and we’ll onboard them quickly while you continue to earn cashback.",
  },
  {
    q: "How do the health benefits work?",
    a: "Every fee payment unlocks complimentary family health perks such as tele-consultations, discounts on medicines, and preventive health packages from our partner providers.",
  },
];

const FaqItem = ({ item, index, active, setActive }) => {
  const isOpen = active === index;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setActive(isOpen ? null : index)}
        className="w-full flex justify-between items-center p-5 md:p-6 text-left"
      >
        <span className="font-semibold text-gray-800 text-sm md:text-lg">
          {item.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-900"
        >
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="px-5 md:px-6 pb-6 text-gray-500 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faqs = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#f5f7fb] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm text-amber-500 font-semibold tracking-widest">
              HELP CENTER
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-4 text-sm md:text-lg">
              Everything you need to know about the Zemsto experience.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqsData.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                index={index}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>

          {/* Support CTA */}
          <div id="contact" className="mt-14 bg-[#062c42] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <h3 className="text-xl md:text-2xl font-semibold">
              Still have questions?
            </h3>
            <p className="text-gray-300 mt-3">
              Our dedicated support team is available 24/7 to assist you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button className="flex items-center justify-center gap-2 bg-[#0b3b57] px-6 py-3 rounded-full font-semibold hover:bg-[#114d73] transition">
                <Mail size={18} />
                Email Us: info@zemsto.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
