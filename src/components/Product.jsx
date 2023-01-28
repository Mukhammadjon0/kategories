import React from 'react'

function Product({name, image, id, type}) {
  return (
    <div className='w-full p-3 bg-slate-500'>
        <img className='w-full h-52 cursor-pointer' src={image} alt="product" />
        <h1 className='text-xl font-semibold'>{name}</h1>

    </div>
  )
}

export default Product