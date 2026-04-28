import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import { toast } from 'react-toastify'

const Profile = () => {
  const { token, backendUrl, navigate, setToken, setCartItems, getCartCount } = useContext(ShopContext)
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [orderCount, setOrderCount] = useState(0)

  const fetchProfile = async () => {
    try {
      const res = await axios.post(backendUrl + '/api/user/profile', {}, { headers: { token } })
      if (res.data.success) {
        setUser(res.data.user)
        setName(res.data.user.name)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setFetching(false)
    }
  }

  const fetchOrderCount = async () => {
    try {
      const res = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (res.data.success) {
        setOrderCount(res.data.orders?.length || 0)
      }
    } catch (error) {
      // silent
    }
  }

  const saveName = async () => {
    if (!name || name.trim().length < 2) {
      toast.error('Name must be at least 2 characters')
      return
    }
    setSaving(true)
    try {
      const res = await axios.post(backendUrl + '/api/user/update-profile', { name }, { headers: { token } })
      if (res.data.success) {
        setUser(res.data.user)
        setEditing(false)
        toast.success('Profile updated')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setSaving(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    fetchProfile()
    fetchOrderCount()
  }, [token])

  if (fetching) {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <div className='w-12 h-12 rounded-full border-[3px] border-gray-200 border-t-black animate-spin'></div>
      </div>
    )
  }

  if (!user) return null

  const initials = user.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div className='border-t pt-10 pb-20'>
      <div className='text-2xl text-center mb-10'>
        <Title text1={'MY '} text2={'PROFILE'} />
      </div>

      <div className='max-w-3xl mx-auto'>
        <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 shadow-sm'>
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
            <div className='w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-2xl font-medium tracking-wider shrink-0'>
              {initials}
            </div>
            <div className='flex-1 w-full'>
              <div className='mb-4'>
                <p className='text-xs uppercase tracking-wider text-gray-500 mb-1'>Full Name</p>
                {editing ? (
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='flex-1 border border-gray-300 px-3 py-2 outline-none focus:border-black transition'
                      disabled={saving}
                    />
                    <button
                      onClick={saveName}
                      disabled={saving}
                      className='bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 disabled:opacity-60'
                    >
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={() => { setEditing(false); setName(user.name) }}
                      disabled={saving}
                      className='border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100'
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className='flex items-center justify-between gap-3'>
                    <p className='text-lg font-medium text-gray-800'>{user.name}</p>
                    <button
                      onClick={() => setEditing(true)}
                      className='text-xs uppercase tracking-wider text-gray-500 hover:text-black border-b border-transparent hover:border-black transition'
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>

              <div className='mb-4'>
                <p className='text-xs uppercase tracking-wider text-gray-500 mb-1'>Email</p>
                <p className='text-gray-800'>{user.email}</p>
              </div>

              <div>
                <p className='text-xs uppercase tracking-wider text-gray-500 mb-1'>Member Since</p>
                <p className='text-gray-800'>
                  {user._id ? new Date(parseInt(user._id.substring(0, 8), 16) * 1000).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '—'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6'>
          <div className='border border-gray-200 rounded-lg p-5 text-center hover:shadow-md transition cursor-pointer' onClick={() => navigate('/orders')}>
            <p className='text-3xl font-light text-gray-800'>{orderCount}</p>
            <p className='text-xs uppercase tracking-wider text-gray-500 mt-1'>Orders</p>
          </div>
          <div className='border border-gray-200 rounded-lg p-5 text-center hover:shadow-md transition cursor-pointer' onClick={() => navigate('/cart')}>
            <p className='text-3xl font-light text-gray-800'>{getCartCount()}</p>
            <p className='text-xs uppercase tracking-wider text-gray-500 mt-1'>Cart Items</p>
          </div>
          <div className='border border-gray-200 rounded-lg p-5 text-center hover:shadow-md transition cursor-pointer' onClick={() => navigate('/collection')}>
            <p className='text-3xl font-light text-gray-800'>Shop</p>
            <p className='text-xs uppercase tracking-wider text-gray-500 mt-1'>Collection</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 mt-8'>
          <button
            onClick={() => navigate('/orders')}
            className='flex-1 border border-black text-black px-6 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition'
          >
            VIEW ORDERS
          </button>
          <button
            onClick={logout}
            className='flex-1 bg-black text-white px-6 py-3 text-sm tracking-wider hover:bg-gray-800 transition'
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
