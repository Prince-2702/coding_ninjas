import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="bg-black text-white w-full h-auto md:flex grid items-center justify-center p-12">

      {/* Left Content */}
      <div className=" p-12 m-8">
        <h2 className="text-green-400 text-lg  font-medium">Restricted by opportunities?</h2>
        <h1 className="text-6xl font-bold mt-8 pr-8">Get the tech career</h1>
        <h1 className="text-6xl font-bold mt-2 pr-5">you deserve. Faster.</h1>

        <div className="mt-40 space-y-6">
          <div className="flex items-start space-x-3 bg-gray-900 p-4 shadow-xl shadow-gray-500/20">
            <span className="text-green-400 text-xl"><VscVerifiedFilled /></span>
            <p><span className="font-bold">128% average hike</span> via our placement cell</p>
          </div>
          <div className="flex items-start space-x-3 bg-gray-900 p-4 shadow-xl shadow-gray-500/20">
            <span className="text-green-400 text-xl"><VscVerifiedFilled /></span>
            <p><span className="font-bold">1.5 Lac+ learners</span> cracked top tech companies</p>
          </div>
          <div className="flex items-start space-x-3 bg-gray-900 p-4 shadow-xl shadow-gray-500/20">
            <span className="text-green-400 text-xl"><VscVerifiedFilled /></span>
            <p><span className="font-bold">1,400+ alumni in MAANG</span> & 103 unicorn startups</p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-white text-black p-8 border-8 border-black h-full max-w-96 rounded-3xl shadow-2xl shadow-yellow-900/90">
        <h2 className="text-xl font-semibold mb-4">Let's find the right course for you</h2>

        <form className="space-y-4">
          {/* Experience */}
          <fieldset className="space-y-2">
            <legend className="text-sm text-gray-500 font-medium">Experience</legend>
            <div className="space-y-1 text-sm">
              <label className="block"><input type="radio" name="exp" className="mr-2" /> Working Professional - Technical Roles</label>
              <label className="block"><input type="radio" name="exp" className="mr-2" /> Working Professional - Non Technical</label>
              <label className="block"><input type="radio" name="exp" className="mr-2" /> College Student - Final Year</label>
              <label className="block"><input type="radio" name="exp" className="mr-2" /> College Student - 1st to Pre-final Year</label>
              <label className="block"><input type="radio" name="exp" className="mr-2" /> Others</label>
            </div>
          </fieldset>

          {/* Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">Select topic of interest</label>
            <select className="w-full border border-gray-500 rounded p-2">
              <option value="">Choose an option</option>
              <option value="DSA">Data Structures & Algorithms</option>
              <option value="Web">Web Development</option>
              <option value="ML">Machine Learning</option>
            </select>
          </div>

          {/* Inputs */}
          <p className="text-sm"> Name</p>
          <input type="text" placeholder="Enter name" className="w-full border border-gray-500 rounded p-2" />
          <p className="text-sm">Phone Number</p>
          <input type="text" placeholder="Enter phone number" className="w-full border border-gray-500 rounded p-2" />
          <p className="text-sm">Email</p>
          <input type="email" placeholder="Enter email" className="w-full border border-gray-500 rounded p-2" />

          {/* Submit Button */}
          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition">
            Find your course
          </button>

          <p className="text-xs text-gray-500 mt-2">
            I authorize Coding Ninjas to contact me with course updates & offers via Email/SMS/WhatsApp/Call. I have read and agree to the
            <span className="underline"> Privacy Policy </span> &
            <span className="underline"> Terms of Use</span>.
          </p>
        </form>
      </div>


    </div>
  );
};

export default Hero;
