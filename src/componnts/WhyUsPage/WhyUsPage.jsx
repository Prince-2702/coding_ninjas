import React from "react";
import { IoMdChatboxes } from "react-icons/io";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";


const features = [
  {
    icon: (
      <span className="bg-green-600/20 text-green-600 p-3 rounded-full">
        <IoMdChatboxes />
      </span>
    ),
    title: "Fastest 1:1 doubt support",
  },
  {
    icon: (
      <span className="bg-blue-600/20 text-blue-600 p-3 rounded-full">
        <FaChalkboardUser />
      </span>
    ),
    title: "Stanford/IIT/MAANG faculty",
  },
  {
    icon: (
      <span className="bg-orange-600/20 text-orange-600 p-3 rounded-full">
        <FaBriefcase />
      </span>
    ),
    title: "Placement assistance",
  },
];


const FeatureCard = ({ icon, title }) => (
  <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg shadow mb-4 w-72">
    {icon}
    <span className="text-white font-medium">{title}</span>
  </div>
);

const WhyUsPage = () => (
  <div className="min-h-screen bg-black flex flex-col justify-center items-center relative">
    <h1 className="absolute top-16 text-[9rem] font-extrabold text-gray-200 opacity-10 select-none">WHY US</h1>
    <div className="flex space-x-12 mt-40 relative z-10">
      <div className="pt-40 ">
      <div className="grid justify-center items-ceter bg-gray-800 h-[400px] w-[300px] rounded-2xl">
        <div className="p-7">
          <img src="src/assets/images/sir.png" alt="" srcset="" className="rounded-2xl" />
        </div>
        <div className="grid justify-center items-center textcenter">
          <p className="text-orange-400 font-semibold text-xl">Ankush Singla</p>
        </div>
          <p className="text-gray-300 text-center">Co-Founder of Coding Ninjas | Mentor</p>
      </div>
    </div>
      <div className="flex flex-col justify-center pt-40 space-y-3">
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </div>
    </div>
  </div>
);

export default WhyUsPage;
