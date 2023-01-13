import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeObject} from "../../redux/cart/index"

function index() {


    let cart = useSelector(state => state.cart)
    let dispatch = useDispatch()


    let totalPrice = cart.cartItems?.reduce((acc,d) => {
        return d.price * d.quantity + acc;
    },0)

    console.log(totalPrice)

  return (
    <div className="md:container px-8 py-4 mx-auto my-10">
        
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Remove
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            {
                cart.cartItems?.map((item) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.title}
                        </th>
                        <td class="px-6 py-4">
                            {item.category}
                        </td>
                        <td class="px-6 py-4">
                            {item.quantity}
                        </td>
                        
                        <td class="px-6 py-4">
                            <button onClick={() => dispatch(removeObject({id:item.id}))} className='bg-[#be123c] text-white font-semibold px-4 rounded-pill py-1'>Remove</button>
                        </td>
                        <td class="px-6 py-4">
                            ${item.price}
                        </td>
                    </tr>
                ))
            }
            
                </tbody>
            </table>
        </div>
        <div className="d-flex mt-3 text-right">
            <h5>Total Price:</h5>
            <h4 className='font-bold'>${totalPrice}</h4>
        </div>
        <div className="d-flex mt-3 text-right">
            <button className='bg-[#22c55e] px-6 py-1 rounded-pill text-white'>Checkout</button>
        </div>
        
    </div>
  )
}

export default index