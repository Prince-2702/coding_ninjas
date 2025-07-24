import React from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ComparisonTable = () => {
  const features = [
    {
      title: "Structured + problem solving based",
      codingNinjas: true,
      freeResources: false,
      otherCourses: true,
    },
    {
      title: "Fastest 1:1 doubt support",
      codingNinjas: true,
      freeResources: false,
      otherCourses: false,
    },
    {
      title: "Integrated prep platform",
      codingNinjas: true,
      freeResources: false,
      otherCourses: false,
    },
    {
      title: "Profiles highlighted on Naukri",
      codingNinjas: true,
      freeResources: false,
      otherCourses: false,
    },
  ]

  const renderIcon = (available) =>
    available ? (
      <FaCheckCircle className="text-yellow-400 mx-auto" />
    ) : (
      <FaTimesCircle className="text-white/50 mx-auto" />
    )

  return (
    <div className="bg-white/5 p-6 rounded-xl shadow-md w-full max-w-4xl">
      <h2 className="text-center text-blue-400 text-xl mb-4 font-semibold">
        The Coding Ninjas advantage
      </h2>
      <table className="w-full text-center border-separate border-spacing-y-4">
        <thead className="text-white/70 text-sm">
          <tr>
            <th className="text-left pl-4"> </th>
            <th>Coding Ninjas</th>
            <th>Free resources</th>
            <th>Other courses</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx} className="bg-white/10 rounded-xl">
              <td className="text-left py-3 pl-4">{feature.title}</td>
              <td>{renderIcon(feature.codingNinjas)}</td>
              <td>{renderIcon(feature.freeResources)}</td>
              <td>{renderIcon(feature.otherCourses)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-pink-400 font-medium">codingninjas</span>
          <span className="text-orange-400 text-sm">Your dream role, faster and with confidence! 🚀</span>
        </div>
        <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
          <div className="bg-pink-500 h-2 w-3/4"></div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-white/70 text-sm">Others</span>
          <span className="text-white/50 text-sm">Average role, under-confident</span>
        </div>
        <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden mt-1">
          <div className="bg-white/50 h-2 w-1/4"></div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex mt-8 px-6 py-2 gap-4 bg-orange-500 rounded-full font-semibold">
          Explore Offeings <MdKeyboardDoubleArrowUp className='text-2xl' />
        </button>
      </div>
    </div>
  )
}

export default ComparisonTable
