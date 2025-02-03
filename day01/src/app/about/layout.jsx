import React from 'react'
import Link from 'next/link'
import './about.css'

const layout = ({ children }) => {
    return (
        <div>
            <h1 className='text-center mt-5 text-green-500 text-2xl'>hello this is common layout for about page</h1>
            <div className='text-center items-center flex justify-center'>
                <ul className='flex ml-5 gap-4 items-center'>
                    <li>
                        <h1 className='font-bold mr-5 text-2xl'>About Navbar</h1>
                    </li>
                    <li>
                        <Link href='/about'>About Page</Link>
                    </li>
                    <li>
                        <Link href='/about/aboutteacher'>About Teacher</Link>
                    </li>
                    <li>
                        <Link href='/about/aboutstudent'>About Student</Link>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    )
}

export default layout
