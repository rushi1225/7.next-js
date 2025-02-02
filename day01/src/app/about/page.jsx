'use client'
import React from 'react'
import Link from "next/link";

//navigate
import { useRouter } from 'next/navigation';

const About = () => {

    const router = useRouter()

    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1 className='text-4xl text-center'>About page</h1>

            {/* linking */}
            <div>
                <Link href='/'>Home</Link>
                <br />
                <button onClick={() => router.push("/contact")}> Contact page</button>
                <br />
                <button onClick={() => navigate("/about")}> About page</button>
            </div>
        </div>
    )
}

export default About
