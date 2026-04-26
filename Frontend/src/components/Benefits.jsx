import React from "react";
import Cashback from "../assets/Benefits/cashback.jpg";
import Coupon from "../assets/Benefits/coupon.jpg";
import HealthCare from "../assets/Benefits/healthcare.jpg";
import Job from "../assets/Benefits/jobOppurtunities.jpg";
import Kit from "../assets/Benefits/kit.jpg";
import Loan from "../assets/Benefits/loan.jpg";
import Vacation from "../assets/Benefits/vacation.jpg";

const Card = ({ image, title, desc, className }) => {
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden border border-white/10 
      bg-white/5 backdrop-blur-xl p-7 hover:scale-[1.02] transition-all duration-500 ${className}`}
    >
      {/* background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700"
      />

      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

      {/* content */}
      <div className="relative z-10">
        <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300 max-w-sm leading-relaxed">{desc}</p>
      </div>

      {/* glow border */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-emerald-400/40 transition" />
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="bg-black py-28 px-6 font-poppins">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">
            Benefits That{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Keep Giving
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every fee payment unlocks a world of rewards for your entire family
          </p>
        </div>

        {/* NEW BALANCED BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[260px]">

          {/* BIG HERO */}
          <Card
            image={Cashback}
            title="Cashback on Fees"
            desc="Earn up to 5% cashback on every school fee payment."
            className="lg:col-span-2 lg:row-span-2"
          />

          <Card
            image={Coupon}
            title="Discount Coupons"
            desc="Exclusive coupons for groceries and electronics."
          />

          <Card
            image={HealthCare}
            title="Healthcare Cards"
            desc="Family health cards with hospital discounts."
          />

          {/* LONG STRIP */}
          <Card
            image={Loan}
            title="Loan Assistance"
            desc="Easy EMI and education loans at best rates."
            className="lg:col-span-2"
          />

          <Card
            image={Job}
            title="Job Opportunities"
            desc="Career opportunities through school network."
          />

          <Card
            image={Kit}
            title="Joining Kit"
            desc="School essentials and exclusive merchandise."
          />

          {/* WIDE BOTTOM */}
          <Card
            image={Vacation}
            title="Vacation Deals"
            desc="Curated family vacation packages at special rates."
            className="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;