//use prod comp or client comp in server comp in ->productlist->page .jsx
'use client'
import React from 'react'

const Prodcomp = ({ price }) => {
    return (
        <div>
            <button onClick={() => alert(price)} className='bg-red-500 p-3 rounded-full m-5' >Check price</button>
        </div>
    )
}

export default Prodcomp
