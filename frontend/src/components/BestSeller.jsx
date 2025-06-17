import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';


const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const bestProduct = Array.isArray(products) ? products.filter((item) => item.bestseller) : [];
    setBestseller(bestProduct.slice(0, 5))
   
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST '} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusamus provident.

        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestseller.map((item, index) => (

            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />

          ))
        }

      </div>

    </div>
  )
}

export default BestSeller
