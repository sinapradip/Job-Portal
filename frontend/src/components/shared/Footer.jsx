import React from 'react'

export  function Footer() {
  return (
    <div className='flex items-center justify-between mx-auto  max-w-7xl border-t border-[#D7D7D7] p-[12px]'>

      <div>
        <div className='flex flex-col gap-[4px] mx-auto'>
          <h1 className='text-xl font-bold'>Job<span className='text-[#6A38C2]'>Portal</span></h1>
          <p className='text-[#444444]'>© 2024. All rights reserved.</p>
        </div>
        <div></div>
      </div>

      <div className='flex gap-[12px]'>
        <img src="/icons/linkedin.svg" alt="linkedinicon" />
        <img src="/icons/facebook.svg" alt="facebookicon" />
        <img src="/icons/instagram.svg" alt="instagramicon" />
        <img src="/icons/x.svg" alt="xicon" />
      </div>

    </div>
  )
}
