




// basic routing

'use client'
import React from 'react'
import Link from "next/link";

//navigate
import { useRouter } from 'next/navigation';

const Contact = () => {

    const router = useRouter()

    const navigate = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1 className='text-4xl text-center'>Contact page</h1>

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















export default Contact
