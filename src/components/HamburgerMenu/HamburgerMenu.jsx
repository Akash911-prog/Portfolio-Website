import React from 'react'

const HamburgerMenu = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center'>
            <nav className='flex flex-col gap-4 cursor-pointer'>
                <span className='navlinks'>About</span>
                <span className='navlinks'>Experience</span>
                <span className='navlinks'>Projects</span>
                <span className='navlinks'>Contact</span>
            </nav>
        </div>
    )
}

export default HamburgerMenu