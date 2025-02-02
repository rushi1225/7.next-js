import React from 'react'
import Link from 'next/link'
import './about.css'

const layout = ({ children }) => {
    return (
        <div>
            <h1 className='text-center mt-5 text-green-500 text-2xl'>hello this is common layout for about page</h1>
            <div className='text-center items-center flex justify-center'>
            <ul>
                <li className='flex ml-5 gap-4'>
                    <Link href='/about'>About Page</Link>
                    <br />
                    <Link href='/about/aboutteacher'>About Teacher</Link>
                    <br />
                    <Link href='/about/aboutstudent'>About Student</Link>
                </li>
            </ul>
            </div>
            {children}
        </div>
    )
}

export default layout
