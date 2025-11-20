import React from 'react'

export default function Navbar() {
    
  return (
    <div>
        <div className='max-w-7xl m-auto flex justify-between items-center mt-[43px]'>
            <div>
                <img src="./NavbarLogo.svg" alt=""/>
            </div>
            <div className='flex gap-[32px]'>
                <a style={{fontFamily: 'Barlow, sans-serif'}} href="">HOME</a>
                <a style={{fontFamily: 'Barlow, sans-serif'}} href="">ABOUT US</a>
                <a className=' uppercase' style={{fontFamily: 'Barlow, sans-serif' }} href="">Create your plan</a>
            </div>
        </div>
    </div>
  )
}
