import React from 'react'
import Navbar from './componnts/Navbar/Navbar'
import Hero from './componnts/Hero/Hero'
import OurOfferings from './componnts/Offerings/Offerings'
import Information from './componnts/Information/Information'
import WhyUsPage from './componnts/WhyUsPage/WhyUsPage'
import ComparisonTable from './componnts/Comparision/ComparisonTable'
import TestimonialsSection from './componnts/TestimonialsSection/TestimonialsSection'
import Footer from './componnts/Footer/Footer'
import ImportantLinks from './componnts/ImportantLinks/ImportantLinks'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='min-h-screen'>
        <OurOfferings />
      </div>
      <Information />
      <WhyUsPage />
      <div className='min-h-screen bg-[#0a0f2c] text-white flex flex-col items-center justify-center p-2'>
        <ComparisonTable />
      </div>
      <div className='min-h-screen bg-black text-white p-40'>
        <TestimonialsSection />
      </div>
      <Footer />
      <div className='bg-black text-white p-6 min-h-screen'>
        <ImportantLinks />
      </div>
    </div>
  )
}

export default App