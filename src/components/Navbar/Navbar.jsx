"use client"
import React, { useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu'
import './Navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex items-center justify-between px-2'>
            <div className="name text-2xl m-2 font-bold">Akash Samanta</div>
            <nav className="links hidden sm:flex justify-between gap-4 bg-glass/10 border-b border-glass/10 px-3 py-1 rounded-xl mt-1 ">
                <span className='links-items'>About</span>
                <span className='links-items'>Experience</span>
                <span className='links-items'>Projects</span>
                <span className='links-items'>Contact</span>
                <ThemeToggle />
            </nav>

            <div className="btns flex gap-3 sm:hidden">

                <ThemeToggle size={24} />

                <button className={`hamburger-icon cursor-pointer z-10 ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                    <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="menu-icon" >
                            <line id="line1" x1="1.5" y1="2" x2="18.5" y2="2" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line id="line2" x1="1.5" y1="7.5" x2="18.5" y2="7.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <line id="line3" x1="1.5" y1="13" x2="18.5" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </g>
                    </svg>
                </button>
            </div>

            {open && <HamburgerMenu />}
        </div>
    )
}

export default Navbar
