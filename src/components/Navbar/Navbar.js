import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-2'>
            <div className="name text-2xl m-2">Akash Samanta</div>
            <nav className="links flex justify-between gap-4  bg-white/10 border-b border-white/10 px-3 py-1 rounded-xl mt-1">
                <span className='links-items'>Home</span>
                <span className='links-items'>Experience</span>
                <span className='links-items'>Projects</span>
                <span className='links-items'>Contact</span>
            </nav>
        </div>
    )
}

export default Navbar
