import React from 'react'
import Imag1 from '../../assets/images/test1.png';
import Imag2 from '../../assets/images/test2.png';
import Imag3 from '../../assets/images/test3.png';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const testimonials = [
    {
        name: 'Twisam',
        role: 'Full Stack Developer',
        text: 'From optometrist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills!',
        post: 'Coding Ninjas',
        company: 'Cogent e-Private ltd',
        image: Imag1,
    },
    {
        name: 'Onkar Lapote',
        role: 'SDC 1',
        text: 'Chose Coding Ninjas for structured, high quality learning due to lack of support & structure. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.',
        post: 'Coding Ninjas',
        company: 'Softwares Inc',
        image: Imag2,
    },
    {
        name: 'Durgesh Choubey',
        role: 'SDC 1',
        text: 'Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.',
        post: 'Coding Ninjas',
        company: 'Mastercard',
        image: Imag3,
    },
]

const TestimonialsSection = () => {
    return (
        <div className="max-w-6xl mx-auto text-white">
            <h2 className="text-xl font-semibold mb-4">Stories from people like you</h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
                {['Non tech to tech', 'Service to product', 'Tier 3 colleges', 'Job Bootcamp', 'Upskilling Courses'].map((tag, idx) => (
                    <button key={idx} className="bg-white/10 hover:bg-white/20 px-4 py-1 rounded-full text-sm">
                        {tag}
                    </button>
                ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-lg shadow-md flex flex-col">
                        <div className="flex items-center space-x-4 mb-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-white" />
                            <div>
                                <h4 className="text-md font-bold">{testimonial.name}</h4>
                                <p className="text-sm text-gray-300">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-200 flex-grow">{testimonial.text}</p>
                        <div className="text-sm text-gray-400 mt-4">
                            <div>Post: <span className="text-white">{testimonial.post}</span></div>
                            <div>{testimonial.company}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center my-8">
                <button className="flex mt-8 px-6 py-2 gap-4 bg-orange-500 rounded-full font-semibold">
                    Explore Offeings <MdKeyboardDoubleArrowUp className='text-2xl' />
                </button>
            </div>

            {/* Trust Bar */}
            <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
                <p>
                    <strong className="text-white">1,00,000+</strong> Coding Ninjas alumni from 4,000+ colleges working in top product companies
                </p>
                <div className="flex justify-center mt-2 gap-8 text-white text-sm">
                    <div>⭐ 4.9 (7000+ reviews)</div>
                    <div>⭐ 4.7 (23000+ reviews)</div>
                    <div>🎓 Course rating</div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection
