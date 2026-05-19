import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Admin from "../assets/Dashboard/admin.png";
import Parent from "../assets/Dashboard/parent.png";
import School from "../assets/Dashboard/school.png";

/* animation variants */
const imageVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.4 } }
};

const tabVariant = {
  inactive: { scale: 1 },
  active: { scale: 1.03 }
};

const SeamlessInvesting = () => {
  const [active, setActive] = useState("admin");

  const dashboardData = {
    admin: {
      img: Admin,
      title: "Admin Dashboard",
      desc: "Full platform control with analytics, school onboarding, payment tracking, and performance insights in one powerful command center."
    },
    parent: {
      img: Parent,
      title: "Parent Dashboard",
      desc: "Pay school fees, track rewards, manage children’s profiles, and unlock family benefits — all from one simple and intuitive interface."
    },
    school: {
      img: School,
      title: "School Dashboard",
      desc: "Manage admissions, track fee collections, access financial reports, and engage parents through a smart digital ecosystem."
    }
  };

  const current = dashboardData[active];

  return (
    <section 
    id="dashboard"
    className="py-24 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Powerful Dashboard for Everyone
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Seamlessly manage payments, rewards, and operations with beautifully
            designed dashboards tailored for every user.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-14">
          
          {/* LEFT IMAGE */}
          <div className="flex-1 flex justify-center relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.img}
                src={current.img}
                variants={imageVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                className="rounded-3xl w-full max-w-xl"
              />
            </AnimatePresence>

            {/* floating glow */}
            <div className="absolute -z-10 w-72 h-72 bg-indigo-300/30 blur-3xl rounded-full top-10"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl font-bold text-gray-900">
              {current.title}
            </h3>

            <p className="text-gray-600 text-lg max-w-lg">
              {current.desc}
            </p>

            {/* TABS */}
            <div className="space-y-4 pt-4">

              {/* ADMIN */}
              <motion.div
                variants={tabVariant}
                animate={active === "admin" ? "active" : "inactive"}
                onClick={() => setActive("admin")}
                className={`cursor-pointer rounded-xl p-6 border transition shadow-sm
                ${
                  active === "admin"
                    ? "bg-indigo-50 border-indigo-200"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                <h4 className="text-xl font-semibold">Admin Control Center</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Monitor the entire ecosystem with real-time analytics,
                  revenue dashboards, and smart automation tools.
                </p>
              </motion.div>

              {/* PARENT */}
              <motion.div
                variants={tabVariant}
                animate={active === "parent" ? "active" : "inactive"}
                onClick={() => setActive("parent")}
                className={`cursor-pointer rounded-xl p-6 border transition shadow-sm
                ${
                  active === "parent"
                    ? "bg-indigo-50 border-indigo-200"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                <h4 className="text-xl font-semibold">Parent Experience</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Simplified fee payments, rewards tracking, and child progress
                  monitoring in a single elegant dashboard.
                </p>
              </motion.div>

              {/* SCHOOL */}
              <motion.div
                variants={tabVariant}
                animate={active === "school" ? "active" : "inactive"}
                onClick={() => setActive("school")}
                className={`cursor-pointer rounded-xl p-6 border transition shadow-sm
                ${
                  active === "school"
                    ? "bg-indigo-50 border-indigo-200"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                <h4 className="text-xl font-semibold">School Management</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Automate fee collection, admissions, reporting, and parent
                  communication effortlessly.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessInvesting;