import React from 'react';
import { FaCampground } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { PiCertificateFill } from "react-icons/pi";
import Imag1 from '../../assets/images/IIT-guwahati.jpg';
import Imag2 from '../../assets/images/IIT-madras.jpg';
import i1 from '../../assets/images/imag1.png';
import i2 from '../../assets/images/imag2.png';
import i3 from '../../assets/images/imag3.png';
import i4 from '../../assets/images/imag4.png';
import i5 from '../../assets/images/imag5.png';
import i6 from '../../assets/images/imag6.png';
import { MdAutoAwesome } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";

const offerings = [
  {
    title: "PG Certification in Data Analytics with GenAI",
    category: "E&ICT Academy, IIT Guwahati",
    duration: "6 months",
    seats: i1,
    image: Imag1, // Replace with actual image if needed
  },
  {
    title: "PG Certification in Data Science with GenAI",
    category: "E&ICT Academy, IIT Guwahati",
    duration: "6 months",
    seats: i2,
    image: Imag1,
  },
  {
    title: "Advanced Certification in GenAI for Non-Tech Professionals",
    category: "IITM Praartak, THI IIT Madras",
    duration: "6 months",
    seats: i3,
    image: Imag2,
  },
  {
    title: "Training and Internship Certification in Advanced DSA",
    category: "E&ICT Academy, IIT Guwahati",
    duration: "4 months",
    seats: i4,
    image: Imag1,
  },
  {
    title: "Training and Internship Certification in Data Analytics",
    category: "IITM Praartak, THI IIT Madras",
    duration: "4 months",
    seats: i5,
    image: Imag2,
  },
  {
    title: "Training and Internship Certification in Full Stack Web Development",
    category: "IITM Praartak, THI IIT Madras",
    duration: "4 months",
    seats: i6,
    image: Imag2,
  }
];

const OurOfferings = () => {
  return (
    <div className="grid sm:grid-cols-1 w-full h-auto px-4 py-10 bg-gray-100 ">
      <h1 className="flex flex-wrap justify-center items-center text-9xl font-bold text-center mb-8 text-gray-300">OUR OFFERINGS</h1>

      <div className='grid sm:grid-cols-1 pt-20'>
        <div className='flex flex-cols-1'>
          <h2 className="flex text-xl font-semibold mx-6 text-gray-700 gap-4"><FaCampground className='text-4xl bg-gray-200 rounded-full p-2  text-yellow-500' /> Job Bootcamp</h2>
          <p className='bg-gray-300 text-sm p-1 rounded-r-full '>For graduates</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-10l drop-shadow-xl">
          <div className="grid relative p-8 w-[450px] h-[180px] justify-center items-center bg-gray-200 rounded-2xl mt-20">
            <p className="flex font-medium text-xl text-black-600 gap-4">
              <span className='bg-white rounded-full p-4 mb-3'><FaLayerGroup className=' text-blue-500 text-2xl ' /></span>
              Full Stack Web Development with GenAI</p>
            <div className='flex absolute bg-white gap-14  text-xs p-3 rounded-b-lg mt-4 w-[450px] h-[50px]  bottom-0'>
              <p className='mt-1'>140+ Hre of content</p>
              <p className='ml-3 mt-1' >600+ Problems</p>
              <p className='ml-7 mt-1'>10K+ Learners</p>
            </div>
          </div>
          <div className="flex relative p-8 w-[450px] h-[180px] justify-center items-center bg-gray-200 rounded-2xl mt-20">
            <p className="flex font-medium text-xl text-black-600 gap-5">
              <span className='bg-white rounded-full p-4 mb-3'><BiBarChartAlt2 className=' text-2xl text-blue-500 ' /></span>
              Data Analytics with GenAI</p>
            <div className='flex absolute bg-white gap-14  text-xs p-3 rounded-b-lg mt-4 w-[450px] h-[50px]  bottom-0'>
              <p className='mt-1'>100+ Hre of content</p>
              <p className='ml-3 mt-1'>300+ Problems</p>
              <p className='ml-7 mt-1'>2000+ Learners</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-20 px-4 py-10 min-h-screen  ">
        <div className='flex md:flex-cols-1'>
          <h2 className="flex text-xl font-semibold mx-6 text-gray-700 gap-4"><PiCertificateFill className='text-4xl bg-gray-200 rounded-full p-2 text-yellow-500' />IT Certifications</h2>
        </div>
        <div className='grid justify-center items-center'>
          <div className='flex w-[1000px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mx-2 mt-20 gap-8">
              {offerings.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-4 border-yellow-600">
                  <img src={item.image} alt={item.title} className="w-[230px] h-[120px] m-8 rounded-2xl" />
                  <div className="p-4">
                    <h3 className=" font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <br />
                    <h3 className=" font-semibold text-yellow-800 m-4">{item.category}</h3>
                    <br />
                    <hr className='bg-gray-100 h-[3px]'/>
                    <div className='flex gap-6'>
                      <img src={item.seats} className='mt-2' />
                      <h3 className='mt-4 text-sm'>{item.duration}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20'>
        <div className='flex flex-cols-1'>
          <h2 className="flex text-xl font-semibold mx-6 text-gray-700 gap-4"><MdAutoAwesome  className='text-4xl bg-gray-200 rounded-full p-2  text-yellow-500' /> New Launches</h2>
          <p className='bg-gray-300 text-sm p-1 rounded-r-full '>For graduates</p>
        </div>
        <div className="flex justify-center gap-8 mb-10l drop-shadow-xl">
          <div className="grid relative p-8 w-[800px] h-[180px] justify-center items-center bg-gray-200 rounded-2xl mt-20">
            <p className="flex font-medium text-2xl text-black-600 gap-4">
              <span className='bg-white rounded-full p-4 mb-3'><LiaCertificateSolid className=' text-blue-500 text-2xl ' /></span>
              Advance Certification in GenAI & Muti Agent Systems</p>
            <div className='flex absolute bg-white gap-14  text-xs p-3 rounded-b-lg mt-4 w-[800px] h-[50px]  bottom-0'>
              <p className='mt-1'>100+ Hre of content</p>
              <p className='ml-40 mt-1' >300+ Problems</p>
              <p className='ml-60 mt-1'>500+ Learners</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default OurOfferings;
