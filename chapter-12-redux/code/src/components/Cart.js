import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector(store => store.cart.items)

    function handleClearCart() {
      dispatch(clearCart())
    }

    console.log(cartItems)

  return (
    <div>
      <h1 className='font-bold text-3xl'>Cart Items</h1>
      {cartItems.length > 1 && <button onClick={() => handleClearCart()} className="p-2 bg-red-600 rounded-md text-white">Clear Card</button>}
      <div className='flex flex-wrap'>
        {cartItems.map((item, index) => {
            return (
                <div key={index} className='border border-black m-2 p-2 w-[200px]'>
                    <h1 className='font-bold text-2xl'>{item.strMeal}</h1>
                    <img src={item.strMealThumb}></img>
                    <h2 className='font-bold text-xl'>{item.strArea}</h2>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Cart