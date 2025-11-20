import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GiCoffeeBeans } from 'react-icons/gi'

export default function Footer() {
    return (
        <footer className="max-w-7xl m-auto bg-[#2C343E] py-6">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <GiCoffeeBeans className="text-[#0E9187] text-2xl" />
                    <span className="text-white text-xl font-semibold" style={{ fontFamily: "Barlow, sans-serif" }}>
                        coffeeroasters
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-10 text-xs tracking-widest">
                    <a className="text-[#83888F] uppercase" href="#">Home</a>
                    <a className="text-[#83888F] uppercase" href="#">About Us</a>
                    <a className="text-[#83888F] uppercase" href="#">Create Your Plan</a>
                </nav>
                <div className="flex items-center gap-5 text-white text-xl">
                    <FaFacebookSquare className="cursor-pointer hover:opacity-80" />
                    <FaTwitter className="cursor-pointer hover:opacity-80" />
                    <FaInstagram className="cursor-pointer hover:opacity-80" />
                </div>
            </div>
        </footer>
    )
}
