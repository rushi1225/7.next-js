import React from 'react'
import Link from "next/link";



const Contact = () => {
    return (
        <div>
            <h1 className='text-4xl text-center'>Contact Page</h1>

            {/* linking */}
            <div>
                <Link href='/'>Home</Link>
                <br />
                <Link href='/about'>About</Link>
                <br />
                <Link href='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Contact
