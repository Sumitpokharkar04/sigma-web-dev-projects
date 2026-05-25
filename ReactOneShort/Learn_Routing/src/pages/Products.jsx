import React from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
    return (

        <div className='flex justify-center gap-4 m-25 p-25 font-bold text-2xl'>
            <h1>This is Products Page</h1>
            <Link className='bg-amber-500' to='/Products/Men'>Men</Link>
            <Link className='bg-pink-600' to='/Products/Women'>Women</Link>
        </div>
        
    )
}

export default Products
