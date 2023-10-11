import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'

const App = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className='Navbar w-screen px-10 py-5 flex flex-row justify-between items-center bg-black'>
        <img src='../zeelogo.svg' />
        <div className='but-con flex flex-row gap-3 justify-center items-center'>
          {/* <button className='text-white font-semibold font-montserrat hover:bg-white hover:text-black px-5 py-3 rounded-[50px] hover:transition hover:ease-linear text-[12px]'>Rules & Regulations</button>
          <button className='font-semibold font-montserrat bg-white hover:text-white hover:bg-[#C91A07] px-5 py-2 rounded-[50px] hover:border-none hover:transition hover:ease-linear text-[12px]'>Login</button> */}
          <Navbar />
        </div></div>
      <div className="hero-container w-screen">
        <div className="button-con w-screen my-0 flex flex-col justify-center items-center bg-[#da6d61] py-5">
          <button className="bg-[#C91A07] text-white font-montserrat font-semibold px-5 py-2 text-xl rounded-[10px] hover:bg-black hover:transition hover:ease-linear hover:translate-y-3">
            Register Now
          </button>
        </div>
        <div className="Hero w-screen flex flex-row justify-center items-center z-0 relative">
          {isMobileView ? (
            <img src="herocartoon.svg" className="h-max w-screen" alt="Mobile Image" />
          ) : (
            <img src="herobanner.svg" className="h-max w-screen" alt="Desktop Image" />
          )}
        </div>

      </div>
      <div className="info-container w-[100%] flex flex-row justify-center items-center">
        {isMobileView ? (
          <img src="redimage.svg" alt="Mobile Info Image" />
        ) : (
          <img src="bannermoncho.svg" alt="Desktop Info Image" />
        )}
      </div>
      <div className='footer bg-black flex flex-col justify-center items-center pt-10 '>
        <img src="../footerlogo.svg" alt="" />
        <p className='text-white my-5 font-montserrat font-semibold'>Mukto Mancho: Amar Tomar Sobar</p>
        <p className='text-white my-2 font-montserrat font-normal'>Follow us on:</p>
        <div className='flex flex-row justify-center items-center gap-2 mt-2'>
          <img src="../insta.svg" alt="" className='hover:cursor-pointer' />
          <img src="../twitter.svg" alt="" className='hover:cursor-pointer' />
          <img src="../youtube.svg" alt="" className='hover:cursor-pointer' />
        </div>
        <p className='text-white font-montserrat font-normal text-[12px] mt-20 mb-5'>ZEE BANGLA, ALL RIGHT RESERVED</p>
      </div>
    </div>

  )
}

export default App