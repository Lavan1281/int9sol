import React from 'react'

const Slider = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ml-10
    md:ml-28 md:mr-[5rem] my-14 lg:my-20'>
        <div className="lg:mr-10 mr-24 ml-14 mb-10 sm:mb-10 lg:mb-0 shadow-gray-400 rounded shadow-md">
            <img className='h-56 w-full'
            src="https://img.freepik.com/premium-photo/new-modern-block-flats-green-area-with-blue-sky-mixed-media_641298-13816.jpg?size=626&ext=jpg&uid=R121285716&ga=GA1.1.83358929.1690444912&semt=ais" alt="" />
            <h2 className='mt-3 text-gray-800 text-xl mx-5'>Our Consultants and Partners have helped</h2>
            {/* <hr className='border-[#00ff00] ml-14'/> */}
            <p className='text-base mx-5 text-gray-800 mt-3'>A real estate company to drive revenue, sales, occupancy rates through ETL, data factory and pleasing visuals.</p>
            <button className='bg-[#00ff00] px-2 py-1 mx-5 my-5'>Read More</button>
        </div>
        
        <div className="  mr-24 ml-14 mb-10 md:mr-10 lg:mr-9 sm:mr-10 sm:h-[472px]  lg:ml-0 shadow-gray-400 rounded shadow-md">
            <img className='h-56 w-full'
             src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg?t=st=1707512556~exp=1707513156~hmac=4ad91b5c103834da763673e48991a4c0c1a4615c7f0f5adde68ef025b7d1c1eb" alt="" />
            <h2 className='mt-3 text-gray-800 text-xl mx-5'>Our Consultants and Partners have helped</h2>
            <p className='text-base mx-5 text-gray-800 mt-3'>A storage giant to migrate data into data warehouses and drive smart marketing analytics.</p>

            <button className='bg-[#00ff00] px-2 py-1 mx-5 my-5'>Read More</button>
        </div>
        <div className="  mr-24 ml-14 mb-10  md:mr-10 lg:mr-9 sm:-mr-[7rem] sm:ml-36 lg:-mr-0 lg:ml-0 shadow-gray-400 rounded shadow-md">
            <img className='h-56 w-full'
             src="https://img.freepik.com/premium-photo/swhite-umbrella-protecting-gold-coin-security-businessman_73523-1126.jpg?size=626&ext=jpg&uid=R121285716&ga=GA1.1.83358929.1690444912&semt=ais" alt="" />
            <h2 className='mt-3 text-gray-800 text-xl mx-5'>Our Consultants and Partners have helped</h2>
            <p className='text-base mx-5 text-gray-800 mt-3'>A storage giant to migrate data into data warehouses and drive smart marketing analytics.</p>

            <button className='bg-[#00ff00] px-2 py-1 mx-5 my-5'>Read More</button>
        </div>

    </div>
  )
}

export default Slider