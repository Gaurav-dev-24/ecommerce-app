import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const TRACKING_STAGES = [
  { key: 'Order Placed', label: 'Order Placed', desc: 'We have received your order.' },
  { key: 'Packing', label: 'Packing', desc: 'Your order is being packed.' },
  { key: 'Shipped', label: 'Shipped', desc: 'Your order is on its way.' },
  { key: 'Out for delivery', label: 'Out for Delivery', desc: 'Order will be delivered today.' },
  { key: 'Delivered', label: 'Delivered', desc: 'Enjoy your purchase!' },
]

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setorderData] = useState([])
  const [trackingItem, setTrackingItem] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      setRefreshing(true)
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
      }
    } catch (error) {
      // silent
    } finally {
      setRefreshing(false)
    }
  }

  const openTracking = async (item) => {
    setTrackingItem(item)
    await loadOrderData()
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  const currentStageIndex = trackingItem
    ? Math.max(0, TRACKING_STAGES.findIndex(s => s.key.toLowerCase() === (trackingItem.status || '').toLowerCase()))
    : 0

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY '} text2={'ORDERS'} />
      </div>

      {orderData.length === 0 && !refreshing && (
        <div className='py-20 text-center text-gray-500 text-sm'>
          <p>You have no orders yet.</p>
        </div>
      )}

      <div className='mt-6'>
        {orderData.map((item, index) => (
          <div key={index} className='flex items-start sm:items-center gap-4 py-4 border-t w-full'>
            <img
              className='w-16 sm:w-20'
              src={
                item?.image
                  ? Array.isArray(item.image) ? item.image[0] : item.image
                  : assets.placeholder
              }
              alt={item?.name || 'Product'}
            />

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
                <button
                  onClick={() => openTracking(item)}
                  className='border px-4 py-2 text-sm font-medium rounded-sm hover:bg-black hover:text-white transition-colors'
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {trackingItem && (
        <div
          className='fixed inset-0 z-[9998] bg-black/50 flex items-center justify-center p-4'
          onClick={() => setTrackingItem(null)}
        >
          <div
            className='bg-white w-full max-w-lg rounded-lg shadow-xl max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between px-5 sm:px-6 py-4 border-b'>
              <p className='text-base sm:text-lg font-medium tracking-wider'>ORDER TRACKING</p>
              <button
                onClick={() => setTrackingItem(null)}
                className='text-gray-500 hover:text-black text-xl leading-none'
                aria-label='Close'
              >
                ×
              </button>
            </div>

            <div className='px-5 sm:px-6 py-4 border-b'>
              <div className='flex items-start gap-3'>
                <img
                  className='w-14 sm:w-16 shrink-0'
                  src={
                    trackingItem?.image
                      ? Array.isArray(trackingItem.image) ? trackingItem.image[0] : trackingItem.image
                      : assets.placeholder
                  }
                  alt={trackingItem?.name || 'Product'}
                />
                <div className='text-sm flex-1 min-w-0'>
                  <p className='font-medium truncate'>{trackingItem.name}</p>
                  <p className='text-gray-500 text-xs mt-1'>
                    Size: {trackingItem.size} · Qty: {trackingItem.quantity}
                  </p>
                  <p className='text-gray-500 text-xs mt-1'>
                    Ordered: {new Date(trackingItem.date).toDateString()}
                  </p>
                  <p className='text-gray-500 text-xs mt-1'>
                    Payment: {trackingItem.paymentMethod} {trackingItem.payment ? '· Paid' : '· Pending'}
                  </p>
                </div>
              </div>
            </div>

            <div className='px-5 sm:px-6 py-5'>
              <div className='flex items-center justify-between mb-4'>
                <p className='text-xs uppercase tracking-wider text-gray-500'>Status Timeline</p>
                <button
                  onClick={loadOrderData}
                  disabled={refreshing}
                  className='text-xs text-gray-600 hover:text-black flex items-center gap-1 disabled:opacity-50'
                >
                  {refreshing ? (
                    <span className='inline-block w-3 h-3 border-[1.5px] border-gray-400 border-t-transparent rounded-full animate-spin'></span>
                  ) : '↻'}
                  Refresh
                </button>
              </div>

              <div className='relative'>
                {TRACKING_STAGES.map((stage, idx) => {
                  const isDone = idx <= currentStageIndex
                  const isCurrent = idx === currentStageIndex
                  return (
                    <div key={stage.key} className='flex gap-4 pb-5 last:pb-0 relative'>
                      {idx < TRACKING_STAGES.length - 1 && (
                        <span
                          className={`absolute left-[11px] top-7 bottom-0 w-[2px] ${idx < currentStageIndex ? 'bg-black' : 'bg-gray-200'}`}
                        ></span>
                      )}
                      <div className='relative z-10 shrink-0'>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            isDone
                              ? 'bg-black border-black text-white'
                              : 'bg-white border-gray-300 text-gray-300'
                          } ${isCurrent ? 'ring-4 ring-gray-200' : ''}`}
                        >
                          {isDone ? (
                            <svg viewBox='0 0 16 16' className='w-3 h-3 fill-current'>
                              <path d='M6 11.5L2.5 8l1-1L6 9.5l6.5-6.5 1 1L6 11.5z' />
                            </svg>
                          ) : (
                            <span className='text-[10px]'>{idx + 1}</span>
                          )}
                        </div>
                      </div>
                      <div className='flex-1 -mt-0.5'>
                        <p className={`text-sm font-medium ${isDone ? 'text-gray-900' : 'text-gray-400'}`}>
                          {stage.label}
                        </p>
                        <p className={`text-xs mt-0.5 ${isDone ? 'text-gray-500' : 'text-gray-400'}`}>
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='px-5 sm:px-6 py-4 border-t bg-gray-50'>
              <button
                onClick={() => setTrackingItem(null)}
                className='w-full bg-black text-white py-2.5 text-sm tracking-wider hover:bg-gray-800 transition-colors'
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders
