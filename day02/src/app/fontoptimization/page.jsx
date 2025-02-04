import React from 'react'

import { Roboto } from 'next/font/google'
import Link from 'next/link'

const myfont = Roboto({
    weight: '100',
    subsets: ['latin'],
    display: 'swap'
})
const FontOptimization = () => {
    return (
        <div>
            <h1 className='text-2xl text-center'>Font Optimization</h1>
            <br />
            <h1 className={myfont.className}>Font Optimization with next js apply this h1</h1>



            <br /><br /><br />
            <Link href="/">Home page</Link>
        </div>
    )
}

export default FontOptimization
