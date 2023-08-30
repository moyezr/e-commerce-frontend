import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const CartIcon = () => {

    const [isMounted, setIsMounted] = useState(false)

    const { cartItems } = useSelector((state) => state.cart);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null
    }
    
  return (
    <Link href="/cart">
    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
        <BsCart className="text-[15px] md:text-[20px]" />
        {cartItems.length > 0 && (
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {cartItems.length}
            </div>
        )}
    </div>
</Link>
  )
}

export default CartIcon