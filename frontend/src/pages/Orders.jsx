import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Orders = () => {
  const { backendUrl ,token , currency } = useContext(ShopContext)
  const [orderData , setorderData]= useState([])
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
        
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod']= order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
        
      }
      
    } catch (error) {
      
    }
  }

  useEffect(()=> {
    loadOrderData()
  },[token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY '} text2={'ORDERS'} />
      </div>

      <div className='mt-6'>
        { orderData.map((item, index) => (
          <div key={index} className='flex items-start sm:items-center gap-4 py-4 border-t w-full'>
            {/* Product Image */}
            <img
              className='w-16 sm:w-20'
              src={
                item?.image
                  ? Array.isArray(item.image) ? item.image[0] : item.image
                  : assets.placeholder
              }
              alt={item?.name || 'Product'}
            />

            {/* Product Details */}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between w-full text-sm sm:text-base text-gray-700'>
              <div>
                <p className='font-medium'>{item?.name || 'No Name'}</p>
                <div className='flex flex-wrap gap-4 mt-1 text-gray-700'>
                  <p>{currency}{item?.price || '0.00'}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                
              </div>
              <div className='md:w-1/2 flex justify-between mt-4 sm:mt-0'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
