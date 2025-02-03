"use client"
import { useState, useEffect } from 'react'


const ProductsPage = () => {
    const [product, setProducts] = useState([])

    useEffect(async () => {
        const req = await fetch("https://dummyjson.com/products");
        const res = await req.json();

        const productdata = res.products;

        setProducts(productdata)
    }, [])

    return (
        <div>
            <h1 className='text-2xl text-center p-5 bg-green-400'>Product List</h1>
            {
                product.map((item) => (
                    <>
                        <h1>Name: {item.title}</h1>
                        <h1>Name: {item.price}</h1>
                    </>
                ))
            }
        </div>
    )
}

export default ProductsPage
