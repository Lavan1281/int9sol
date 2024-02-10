import React from 'react'
import {Parallax} from 'react-parallax'

import { IoIosPlay } from "react-icons/io";
import { GiLightBulb } from "react-icons/gi";
import { GoNote } from "react-icons/go";
import { MdSettingsSuggest } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";




const Ourservices = () => {
  return (
    <div className=''>
      <Parallax strength={600} className='sm:h-[80rem] lg:h-[48rem] h-[80rem] bg-black w-full bg-cover bg-center -z-10 ' 
        bgImage='https://img.freepik.com/premium-photo/business-economic-growth-global-business-network-data-analysis-financial-banking_34200-779.jpg?size=626&ext=jpg&uid=R121285716&ga=GA1.1.83358929.1690444912&semt=sph'>
       <div className="text-black text-center text-4xl mb-4 font-semibold mt-20">
              Our Services
              </div>
              <div className="flex ml-[13rem] lg:ml-[34rem] sm:ml-[16rem]">
                <hr className='w-16 border-t-black'/>
                <p className='text-5xl -mt-10 text-[#ff0000]'>.</p>
                <hr className='w-16 border-t-black'/>
              </div>
              <div className="grid ml-10 sm:grid-cols-1 lg:grid-cols-2 lg:mx-20 sm:ml-10 ">
                <div className="  text-justify bg-white  border mt-9 mr-9  px-5 py-6 rounded shadow-white shadow-sm">
                <GiLightBulb className='text-blue-950 text-4xl px-2 py-2 mb-3 bg-gray-200 rounded-full '/>
                <p 
                className='text-lg font-semibold mb-2 '>Data Science & Engineering</p>
                <p className='text-gray-600 '>Years of experience in building pipelines, integration to variety of data sources, data profiling and exposing the data on a flexible web-services framework. Deriving predictive and prescriptive analytics from the sales & marketing data by using data points.

</p>

                </div>
                
                <div className="  text-justify  bg-white border mt-9 mr-9 sm:h-60 md:h-64  px-5 py-6 rounded shadow-white shadow-sm">
                <GoNote className='text-blue-950 text-4xl px-2 py-2 mb-3 bg-gray-200 rounded-full '/>
                <p 
                className='text-lg font-semibold mb-2 '>Cloud Migration & Support</p>
                <p className='text-gray-600 '>We help you to port, design and develop applications on industry leading cloud infrastructure.

</p>

                </div>
                
                
                <div className="  text-justify bg-white h-60 border mt-9 mr-9  px-5 py-6 rounded shadow-white shadow-sm">
                <MdSettingsSuggest className='text-blue-950 text-4xl px-2 py-2 mb-3 bg-gray-200 rounded-full '/>
                <p 
                className='text-lg font-semibold mb-2 '>Managed Support Services</p>
                <p className='text-gray-600 '>First line helpdesk support, Ticketing & issue tracking, Comprehensive reporting and Manage social media pages.

</p>

                </div>
                
                <div className="  text-justify  border h-60 bg-white mt-9 mr-9  px-5 py-6 rounded shadow-white shadow-sm">
                <BsFillPersonLinesFill className='text-blue-950 text-3xl px-1 py-1 mb-3 bg-gray-200 rounded-full '/>
                <p 
                className='text-lg font-semibold mb-2 '>IT Staffing</p>
                <p className='text-gray-600 '>We work with clients to fulfill their contingent and contract to hire needs. Our sourcing leaders pre-screen the candidates to ensure they are good match.



</p>

                </div>
                
                
                
              </div>
              </Parallax>
    </div>
  )
}

export default Ourservices