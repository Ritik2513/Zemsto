import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "3 Months Plan",
    price: "₹999",
    duration: "Quarterly",
    popular: false,
    features: [
      "Pay school fees via Zemsto",
      "Earn cashback on every payment",
      "Access discount coupons & offers",
      "Basic healthcare partner discounts",
      "Parent dashboard access",
    ],
  },
  {
    name: "6 Months Plan",
    price: "₹1799",
    duration: "Half-Yearly",
    popular: true,
    features: [
      "Everything in 3 Month plan",
      "Higher cashback rewards",
      "Healthcare cards for family",
      "Education loan assistance access",
      "Priority customer support",
      "Exclusive partner offers",
    ],
  },
  {
    name: "9 Months Plan",
    price: "₹2499",
    duration: "Academic Session",
    popular: false,
    features: [
      "Everything in 6 Month plan",
      "Family vacation discounts",
      "Joining kit & merchandise",
      "School competition entry access",
      "Premium reward marketplace",
    ],
  },
  {
    name: "12 Months Plan",
    price: "₹2999",
    duration: "Yearly",
    popular: false,
    features: [
      "All Zemsto benefits unlocked",
      "Maximum cashback tier",
      "Priority loan approvals",
      "Exclusive mega partner deals",
      "Early access to new features",
      "VIP priority support",
    ],
  },
];

const handlePlanClick = () => {
  window.open("https://admin.zemsto.com/", "_blank");
};

const Pricing = () => {
  return (
    <section id="plan" className="bg-[#F4F7FB] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0B3C5D]">
            Simple Subscription Plans
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Subscribe once, pay school fees seamlessly, and unlock rewards
            throughout the academic journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 bg-white border transition-all
              ${
                plan.popular
                  ? "border-[#2ECC71] shadow-2xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F39C12] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-[#0B3C5D]">{plan.name}</h3>
              <p className="text-sm text-gray-500">{plan.duration}</p>

              <div className="mt-6 mb-6">
                <span className="text-5xl font-extrabold text-[#0B3C5D]">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="text-[#2ECC71] h-5 w-5 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handlePlanClick}
                className={`w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition
  ${
    plan.popular
      ? "bg-[#2ECC71] hover:bg-[#27ae60]"
      : "bg-[#0B3C5D] hover:bg-[#082c44]"
  }`}
              >
                Choose Plan
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
