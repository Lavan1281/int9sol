import React from 'react'
import'./Homepage.css'
import {Parallax} from 'react-parallax'
import { Link } from 'react-router-dom'
import Ourservices from './Ourservices'
import Slider from './Slider'

const Homepage = () => {
  return (
    <div>
     <hr className='hrh'/>
        <Parallax strength={600} className='h-[30rem]  bg-black w-full bg-cover bg-center -z-10 ' 
        bgImage='https://img.freepik.com/free-photo/modern-office-design-with-computer-equipment-inside-generated-by-ai_188544-22422.jpg?size=626&ext=jpg&uid=R121285716&ga=GA1.1.83358929.1690444912&semt=sph'>
            <div className="content ">
                <div 
                className=" mt-20 mx-20 md:mt-20 md:mx-20  text-2xl sm:text-3xl sm:leading-normal md:text-4xl md:leading-normal  font-semibold text-white ">
                  Loading the Data Science & Cloud migration. <br />
                 <span>Driving  results  with experience.</span><br/>
                 optimally.
                    
                </div>
                <div className="flex mt-10 sm:mt-3 mx-20 ">
                  <hr className='w-16' />
                  <p className='text-5xl -mt-10 font-semibold text-[#ff0000]'>.</p>
                  <hr className='w-16'/>
                </div>
                <div className=" mx-20 text-white mb-10 mt-5 font-semibold text-lg">
                  Reliable, Cost-effective and professoinal
                </div>
                <Link to='/' className='mx-20 mt-2 text-sm font-bold bg-[#00ff00]  text-black rounded px-6 py-3'>Talk to us</Link>
            </div>
            
        </Parallax>
        <div className="mx-24 my-12 text-xl lg:text-2xl text-gray-600 ">
        INT9 Solutions helps companies visualize their<span className='text-blue-700 '> data and big data</span> into 
        <span className='text-blue-700 ml-1'>actionable assets,</span>
        experience  predictable outcomes through business marts,  <span className='text-blue-700 '>
        Machine learning(ML) </span>and <span>cloud analytics.</span>
        
        </div>

        <div className='h-[24rem] py-5  bg-black w-full bg-cover bg-center -z-10  ' style={{backgroundImage: "url(https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?size=626&ext=jpg&uid=R121285716&ga=GA1.1.83358929.1690444912&semt=sph)"}}  >
            <div className="text-center my-10">
              <div className="text-white text-4xl mb-4 font-semibold ">
              Join Our Newsletter
              </div>
              <div className="flex ml-[12rem] sm:ml-[15rem] lg:ml-[34rem]">
                <hr className='w-16'/>
                <p className='text-5xl -mt-10 text-[#ff0000]'>.</p>
                <hr className='w-16'/>


              </div>
              <p className='text-white mx-5 text-lg mt-4 mb-3 '>Subscribe now and receive weekly newsletter with open positions, available profiles,
                 upcoming events and technical articles!</p>
                 <input type="text" className=' px-5 py-2 w-[36rem] mb-5 mx-10  outline-none ' placeholder='Enter your email' /><br />
                 <button className='bg-[#00ff00] font-semibold rounded px-4 py-2'>Subscribe</button>



            </div>
            
        </div>
        <Slider/>
        <Ourservices/>
        

        <div className="my-16 mx-10 sm:mx-32 md:mx-32 lg:mx-52   text-xl text-gray-500 ">
          <p>Our unparalleled technical solutions can support businesses of all sizes.
             Our top class local & global experts specialize in helping 
             clients realize their dream of having their eMarketing portolio.
</p>
        </div>
        
        <div className="bg-blue-950 py-7">
         <div className="text-white text-center text-4xl mb-4 font-semibold ">
              Our Commitments
              </div>
              <div className="flex lg:ml-[34rem] sm:ml-[16rem]">
                <hr className='w-16'/>
                <p className='text-5xl -mt-10 text-[#ff0000]'>.</p>
                <hr className='w-16'/>
              </div>
              <div className="timeline">
                <div className="container left-container ">
                  <div className="text-box border border-white">
                    <h2 className='bg-[#00ff00] -mt-3 ml-8 w-28 px-3'>Innovation</h2>
                    <p className='text-white px-[30px] py-[20px]'>We find innovation as the de-facto standard that we strive in every corner.</p>
                    <span className='left-arrow'></span>
                  </div>
                </div>
                <div className="container right-container">
                  <div className="text-box border border-white">
                    <h2 className='bg-[#00ff00] -mt-3 ml-8 w-28 px-3'>Clients</h2>
                    <p className='text-white px-[30px] py-[20px]'>Our clients value our transparency and we like it that way.</p>
                    <span className='right-arrow'></span>
                  </div>
                </div>
                <div className="container left-container">
                  <div className="text-box border border-white">
                    <h2 className='bg-[#00ff00] -mt-3 ml-8 w-28 px-3'>People</h2>
                    <p className='text-white px-[30px] py-[20px]'>Our strength lies in our talent, hence we build a culture around our people.</p>
                    <span className='left-arrow'></span>
                  </div>
                </div>
                <div className="container right-container">
                  <div className="text-box border border-white">
                    <h2 className='bg-[#00ff00] -mt-3 ml-8 w-28 px-3'>Process</h2>
                    <p className='text-white px-[30px] py-[20px]'>We understand the unique value is achieved through disciplined process and so do our customers.</p>
                    <span className='right-arrow'></span>
                  </div>
                </div>
                <div className="container left-container">
                  <div className="text-box border border-white">
                    <h2 className='bg-[#00ff00] -mt-3 ml-8 w-52 px-3'>Customized solutions</h2>
                    <p className='text-white px-[30px] py-[20px]'>We utilize smart tools to build customized data analytics solutions.</p>
                    <span className='left-arrow'></span>
                  </div>
                </div>
                <div className="container right-container">
                  <div className="text-box border border-white">
                    <h2 className='bg-[#00ff00] -mt-3 ml-8 w-28 px-3'>Quality</h2>
                    <p className='text-white px-[30px] py-[20px]'>We bring all hands on the deck to make quality as a practice.</p>
                    <span className='right-arrow'></span>
                  </div>
                </div>







              </div>



        </div>
      
    </div>
  )
}

export default Homepage