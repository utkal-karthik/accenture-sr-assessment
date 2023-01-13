import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart,addIncrement,decrement} from "../../redux/cart/index"


function index() {


    const [quantity,setQuantity] = React.useState(1)
    let router = useRouter()
    let dispatch = useDispatch();
    let {id} = router.query;

    let data = useSelector(state => state.products)
    let cart = useSelector(state => state.cart)
    const filteredProduct = data.data?.find((item) => item.id == id);

    console.log(cart)

    const handleItem = () => {
        dispatch(addToCart({item:filteredProduct}))
        router.push('/cart')
    }

    const addItem = () => {
        dispatch(addIncrement({item:filteredProduct}))
    }

    const removeItem = () => {
        dispatch(decrement({item:filteredProduct}))
    }

    


  return (
    <div className="md:container px-8 py-4 mx-auto my-10">
        <div class="grid grid-cols-4 gap-4">
            <div>
                <Image src={filteredProduct?.image} height={200} width={200}/>
            </div>
            <div className='col-span-3'>
                <h1>{filteredProduct?.title}</h1>
                <p className='mt-2'>{filteredProduct?.description}</p>
                <h3 className='mt-2'>${filteredProduct?.price}</h3>
                <div className="flex mt-3">
                   <div className="flex items-center px-4 bg-indigo-300">
                        <button onClick={() => {
                            removeItem()


                            quantity >= 1 ? setQuantity(quantity - 1) : setQuantity(1)}} className="mr-4">-</button>
                            <p>{quantity}</p>
                        <button onClick={() => {
                            addItem()
                            setQuantity(quantity + 1)}} className="ml-4">+</button>
                   </div>
                    <button onClick={() => {
                        // router.push("/cart")
                        handleItem()
                    }} className='rounded-full bg-indigo-500 px-4 py-1 text-white ml-2'>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index