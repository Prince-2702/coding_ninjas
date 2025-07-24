import React from 'react'

const ImportantLinks = () => {
  return (
    <div className="max-w-7xl mx-auto text-sm text-white space-y-8">
      {/* Important Links */}
      <div>
        <h2 className="font-bold text-3xl mb-4 pb-9">Important Links</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-2xl mb-1 text-gray-300 pb-2">Job Bootcamp for professionals</p>
            <p className="space-x-2">
              <a href="#" className="underline">Web Development Bootcamp (MERN & Springboot)</a>
              <span>|</span>
              <a href="#" className="underline">Data Analytics Job Bootcamp</a>
            </p>
          </div>
          <div className='pl-12'>
            <p className="font-bold text-2xl mb-1 text-gray-300 pb-2">IIT Certifications for Professionals</p>
            <p className="space-x-2">
              <a href="#" className="underline">PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati</a><br />
              <a href="#" className="underline">PG Certification in Data Science by E&ICT Academy, IIT Guwahati</a><br />
              <a href="#" className="underline">Generative AI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras</a>
            </p>
          </div>
          <div>
            <p className="font-bold text-2xl mb-1 text-gray-300 pb-2 pt-8">IIT Certifications for Students</p>
            <p className="space-y-1">
              <a href="#" className="underline block">Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati</a>
              <a href="#" className="underline block">Training and Internship Certification in Advanced DSA by IITM Pravartak, TIH IIT Madras</a>
              <a href="#" className="underline block">Training and Internship Certification in Full Stack Web Dev with Generative AI + DSA by IITM Pravartak, TIH IIT Madras</a>
            </p>
          </div>
          <div className='pl-12'>
            <p className="font-bold text-2xl mb-1 text-gray-300 pb-2 pt-8 ">Our New Launches</p>
            <a href="#" className="underline">Advanced Certification in GenAI & Multi Agent Systems</a>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
        <div>
          <p className="font-medium text-gray-300 mb-2">We accept payments using:</p>
          <div className="flex items-center space-x-4">
            <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6" alt="visa" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" className="h-6" alt="paypal" />
            <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded">No Cost EMI</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-blue-500 text-white px-3 py-1 text-xs rounded-full font-medium">100% safe & secure payment</span>
         
        </div>
      </div>
      <div className='grid text-gray-900 animate-pulse items-center justify-center pt-20'>
        <h1 className='text-9xl font-bold'>Coding Ninjas</h1>
      </div>
    </div>
  )
}

export default ImportantLinks
