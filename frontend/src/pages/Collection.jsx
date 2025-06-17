import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem'


const Collection = () => {
  const { products , search , showSearch } = useContext(ShopContext);
  const [showfilter, setShowfilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  }
  
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
      
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));

        break;
       
      default:
        applyFilter();
        break;
    }
  }


  useEffect(()=> {
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();

  },[sortType])
  

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Mobile Filter Toggle Button */}
      <button
        onClick={() => setShowfilter(!showfilter)}
        className="sm:hidden mb-4 flex items-center gap-2 text-lg"
      >
        {showfilter ? 'Hide Filters' : 'Show Filters'}
        <img
          src={assets.dropdown_icon}
          className={`h-3 ${showfilter ? 'rotate-180' : ''}`}
          alt=""
        />
      </button>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* FILTERS SECTION (Hidden on mobile unless expanded) */}
        <div className={`w-full sm:w-56 ${showfilter ? 'block' : 'hidden sm:block'}`}>
          <p
            onClick={() => setShowfilter(!showfilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-6 sm:cursor-default"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden ${showfilter ? 'rotate-180' : ''}`}
              alt=""
            />
          </p>
          <div className={`flex flex-col gap-7`}>
            {/* CATEGORIES BOX */}
            <div className={`border border-gray-300 rounded pl-5 py-3 ${showfilter ? '' : 'hidden'} sm:block`}>
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-3 text-sm font-light text-gray-700">
                <label className="flex gap-2">
                  <input className="w-4 h-4" type="checkbox" value={'Men'} onChange={toggleCategory} />
                  Men
                </label>
                <label className="flex gap-2">
                  <input className="w-4 h-4" type="checkbox" value={'Women'} onChange={toggleCategory} />
                  Women
                </label>
                <label className="flex gap-2">
                  <input className="w-4 h-4" type="checkbox" value={'Kids'} onChange={toggleCategory} />
                  Kids
                </label>
              </div>
            </div>
            {/* TYPE BOX */}
            <div className={`border border-gray-300 rounded pl-5 py-3 ${showfilter ? '' : 'hidden'} sm:block`}>
              <p className="mb-3 text-sm font-medium">TYPE</p>
              <div className="flex flex-col gap-3 text-sm font-light text-gray-700">
                <label className="flex gap-2">
                  <input className="w-4 h-4" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />
                  Topwear
                </label>
                <label className="flex gap-2">
                  <input className="w-4 h-4" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />
                  Bottomwear
                </label>
                <label className="flex gap-2">
                  <input className="w-4 h-4" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />
                  Winterwear
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <Title text1={'ALL '} text2={'COLLECTIONS'} />
            <select onChange={(e)=>setSortType(e.target.value)
            } className="border border-gray-300 text-sm px-3 py-2 rounded">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Product Grid (Responsive columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;