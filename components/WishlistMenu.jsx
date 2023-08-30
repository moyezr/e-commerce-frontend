import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';
import { useUserData } from '../context';
import Link from 'next/link';

const WishlistMenu = () => {

    const [isMounted, setIsMounted] = useState(false)

    const { wishlistedIds, user } = useUserData();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <Link href={user ? "/wishlist" : "/sign-in"}className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {wishlistedIds.length}
            </div>
        </Link>
    )
}

export default WishlistMenu