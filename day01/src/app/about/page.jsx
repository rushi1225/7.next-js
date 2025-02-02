// nested routing



import React from 'react'
import Link from "next/link";



const About = () => {
    return (
        <div>
            <h1 className='text-4xl text-center'>About Page</h1>

            {/* linking */}
            <div>
                <Link href='/'>Home</Link>
                <br />
                <Link href='/about'>About</Link>
                <br />
                <Link href='/contact'>Contact</Link>
            </div>

             <br />
                        <Link href='/about/aboutteacher'>About Teacher</Link>
                        <br />
                        <Link href='/about/aboutstudent'>About Student</Link>
        </div>
    )
}



export default About
