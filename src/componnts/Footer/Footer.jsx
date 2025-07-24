import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 text-white">
        {/* Contact */}
        <div>
          <img src="https://ninjasfiles.s3.amazonaws.com/0000000000001394.png" alt="coding ninjas logo" className="h-6 mb-4" />
          <h3 className="font-semibold mb-2">Contact us</h3>
          <p className="flex items-center gap-2 mb-1 text-gray-300"><FaPhoneAlt className="text-orange-400" /> 1800-123-3598</p>
          <p className="flex items-center gap-2 mb-4 text-gray-300"><FaEnvelope className="text-orange-400" /> contact@codingninjas.com</p>
          <div>
            <h4 className="font-semibold mb-2">Our offerings</h4>
            <p className="mb-1 text-orange-400">codingninjas <span className="text-white">Job Bootcamp</span></p>
            <p className="text-orange-400">code360 <span className="text-white">by coding ninjas</span></p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-2">Coding Ninjas</h4>
          <ul className="space-y-1 text-gray-300">
            <a href='#'>Careers</a> <br />
            <a href='#'>Privacy policy</a> <br />
            <a href='#'>Terms & conditions</a> <br />
            <a href='#'>Pricing & refund policy</a> <br />
            <a href='#'>Bug bounty</a> <br />
            <a href='#'>Review</a> <br />
            <a href='#'>Press release</a> <br />
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-1 text-gray-300">
            <a href='#'>Job Bootcamp</a> <br />
            <a href='#'>Code 360</a> <br />
            <a href='#'>Professional Certifications</a> <br />
            <a href='#'>Student Certifications</a> <br />
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-2">Community</h4>
          <ul className="space-y-1 text-gray-300">
            <a href='#'>10% Club</a> <br />
            <a href='#'>Student Chapters</a> <br />
            <a href='#'>Hire from us</a> <br />
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex md:justify-end items-end mt-6 md:mt-0">
          <div className="flex gap-4 text-white text-xl">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-white/60 text-xs">
        Copyright © Sunrise Mentors Pvt. Ltd.
      </div>
    </footer>
  )
}

export default Footer
