
//fetch product api using server components

import React from 'react'

const ProductList = async () => {
    const req = await fetch('https://dummyjson.com/products')
    const res = await req.json()
    return res.products
}





const ProdServerComp = async ()=> {
    const products = await ProductList();
    return (
        <div>
            <h1 className='text-center text-2xl'>products using server components</h1>
            {
                products.map((item) => (
                    <div>
                        <h1>Name : {item.title}, <br></br>  category: {item.category}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default ProdServerComp
