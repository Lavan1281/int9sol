import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaInfinity } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdCopyright } from "react-icons/md";



const Footer = () => {
  return (
    
    <div className='p-8 bg-gray-300 text-black'>
       
        <div className='max-w-7xl mx-auto'>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-0 sm:gap-2">
                <div className="mb-6 ml-14 sm:ml-20 lg:ml-20 text-sm ">
                    <h4 className='text-xl font-[700] pb-4'>Our Address</h4>
                    US: 35111 Newark Blvd Ste <br /> F - #5045, Newark, CA 94560 <br />

                    <p className='mt-2'>India: No 1A, Somu street, Ranipet, Tamil Nadu, 632401.</p><br />
                    <h4 className='text-xl font-[700] pb-4'>Call Us</h4>
                    <p className='pb-3'>
                    US: 510.771.7340 <br />
                    India: +91 9342760037 <br />
                    </p>
                    
                    <h4 className='text-xl font-[700] pb-3'>Email Us</h4>

                    contactus@int9solutions.co


                    


                    <div className='flex text-gray-600'>
                        <a href="">
                        <h1 className='text-lg font-bold pt-2 hover:text-[#00ff00] cursor-pointer pb-5'>in</h1>
                        </a>
                        <a href="">
                        <BiSolidMessageRoundedDetail className='mt-4 text-sm ml-2 hover:text-[#00ff00]' />

                        </a>
                        <a href="">
                        <FaTwitter  className='mt-4 text-sm ml-2 hover:text-[#00ff00]'/>
                        </a>
                        
                        <a href="">
                        <FaInfinity className='mt-4 text-sm ml-2 hover:text-[#00ff00]'/>

                        </a>
                    </div>
                </div>
                <div className="mb-5 text-sm ml-14">
                    <h4 className='text-xl font-[700] pb-4'>Our Services</h4>
                    <ul>
                        
                        <li className='pb-3 hover:text-lime-500'><Link to='/aboutus'>Data science & engineering</Link></li>
                        <li className='pb-3 hover:text-[#00ff00]'><Link to='/oppportunities'>Cloud migration & support</Link></li>
                        <a href=""><li className='pb-3 hover:text-[#00ff00]'>Managed support services</li></a>
                        <a href=""><li className='pb-3 hover:text-[#00ff00]'>IT Staffing</li></a>                        
                    </ul>
                   
                </div>
                <div className="mb-5 text-sm ml-14 sm:ml-16 md:ml-20 lg:ml-0">
                <h4 className='text-xl font-[700] pb-4'>Our Blog</h4>
                    <ul>
                        <li className='pb-3 hover:text-[#00ff00] cursor-pointer'>5 Content-Distribution Tools For Writers, Marketers And Thought Leaders In Tech</li>
                        <li className='pb-3 hover:text-[#00ff00] cursor-pointer'>New Machine Learning Algorithm Uncovers Time-Delayed <br /> Interactions In Cells</li>
                        <li className='pb-3 hover:text-[#00ff00] cursor-pointer'>Our Picks: Top Software Development Blogs</li>
                        <li className='pb-3 hover:text-[#00ff00] cursor-pointer'>How Big Data Analytics Impact Your Business Success Technology Partners Credentials</li>                                   
                    </ul>
                </div>
                <div className="mb-5 text-sm ml-14">
                    <h4 className='text-xl font-[700] pb-3'>Technology Partners</h4>
                    <ul>
                    <li className='pb-3 hover:text-lime-500'>Tableau</li>
                    <li className='pb-3 hover:text-lime-500'>Red Hat</li>
                    <li className='pb-3 hover:text-lime-500'>Snowflake</li>
                        
                    </ul>
                    <h4 className='text-xl font-[700] pb-3'>Credentials</h4>
                    <ul>
                    <li className='pb-3 text-xl hover:text-lime-500'>Verify</li>

                    </ul>


                </div>
            </div>
            

        </div>
        <hr className='pb-5 w-full border-t-2'></hr>
        <div className="mx-14 sm:mx-32 md:mx:96 lg:mx-96">
            <p className='text-sm  flex'>
                Made by <MdCopyright className='mt-1 mx-1' /> <span className='text-[#ff0000] '>INT9 Solutions</span> 2024. All Right Reserved
            </p>
        </div>

    </div>
  )
}

export default Footer









