import { AiFillHeart } from "react-icons/ai"
import { clerkClient, useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify'
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { isResSent } from "next/dist/shared/lib/utils";
import { useUserData } from "../context";

const WishlistButton = ({ isBig = false, productId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWishlisted, setisWishlisted] = useState(false)



  const { userId } = useAuth();

  // const { user: userData } = useUser();

  //       const wishlistedIds = userData?.unsafeMetadata?.wishlistedIds;

  //       useEffect(() => {
  //         if(wishlistedIds?.includes(productId)) {
  //           setisWishlisted(true);
  //         }
  //       }, [wishlistedIds])


  // const { userId } = user;


  const { user, wishlistedIds, setWishlistedIds } = useUserData();

  useEffect(() => {
    if (wishlistedIds.includes(productId)) {
      setisWishlisted(true);
    }
  }, [wishlistedIds])



  const router = useRouter();
  const wishlistHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true)

    if (!userId) {
      setIsLoading(false);
      router.push("/sign-in");

    } else {
      try {


        console.log("Wishlisted Ids", wishlistedIds)
        let response = null;
        if (wishlistedIds?.length > 0) {
          console.log("if ran")

          if (wishlistedIds.includes(productId)) {

            let newIds = wishlistedIds.filter(i => i !== productId);
            response = await fetch("/api/wishlist", {
              method: "POST",
              headers: {
                'Content-Type': "application/json",
              },
              body: JSON.stringify({
                userId,
                wishlistedIds: newIds
              })
            })

            toast.success("Removed From Wishlist")

          } else {
            response = await fetch("/api/wishlist", {
              method: "POST",
              headers: {
                'Content-Type': "application/json",
              },
              body: JSON.stringify({
                userId,
                wishlistedIds: [...wishlistedIds, productId]
              })
            })

            toast.success("Added to Wishlist")

          }
        } else {
          console.log("else ran")
          response = await fetch("/api/wishlist", {
            method: "POST",
            headersr: {
              'Content-Type': "application/json",
            },
            body: JSON.stringify({
              userId,
              wishlistedIds: [productId]
            })
          })

          toast.success("Added to Wishlist")

        }

        console.log("response", response)

        setisWishlisted(prev => !prev);
      } catch (error) {
        console.log("WISHLIST BUTTON ERROR", error)
        toast.error("Something Went Wrong");
      } finally {
        setIsLoading(false)
      }

    }
  }

  return (
    <>

      <button onClick={wishlistHandler} className={`absolute ${isBig ? "top-2" : "bottom-2"} right-2 z-[20]`}>
        <AiFillHeart size={isBig ? 40 : 25} className={` wishlist_button ${isWishlisted ? "text-red-500" : "text-white"} `} />
        <Loading isLoading={isLoading} />
      </button>
    </>
  )
}

export default WishlistButton