import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
    
  return (
    <div>
        <div className='max-w-7xl m-auto flex justify-between items-center mt-[43px]'>
            <div>
                <img src="./NavbarLogo.svg" alt=""/>
            </div>
            <div className='flex gap-[32px]'>
                <Link to={'/'} style={{fontFamily: 'Barlow, sans-serif'}} >HOME</Link>
                <Link to={'/ABOUTUS'} style={{fontFamily: 'Barlow, sans-serif'}} >ABOUT US</Link>
                <Link to={'/CreativePlon'} className=' uppercase' style={{fontFamily: 'Barlow, sans-serif' }} >Create your plan</Link>
            </div>
        </div>
    </div>
  )
}
