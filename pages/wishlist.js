import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper"
import ProductCard from "../components/ProductCard"
import { useUserData } from "../context";
import { getWishlistedProducts } from "../utils/api";
import ClipLoader from "react-spinners/ClipLoader";

const WishlistPage = () => {

    const [wishlistedProducts, setWishlistedProducts] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);

    const { wishlistedIds } = useUserData();

    useEffect(() => {
        getWishlistedProducts(wishlistedIds).then((res) => {
            setWishlistedProducts(res)
            console.log("RES", res)
        }).finally(() => {
            setHasFetched(true);
        });
    }, [wishlistedIds])

    return (
        <Wrapper>

            <h1 className='tex-3xl sm:text-4xl md:text-5xl font-bold text-center py-8'>Wishlist ❤️</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {!hasFetched && <div className="pt-16">
                    <ClipLoader size={100} color="#000000" />

                </div>
                }
                {
                    (hasFetched && wishlistedProducts.length == 0) && (

                        <div className="max-w-screen justify-center items-center pt-8">

                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold min-w-fit">
                                You haven&apos;t Wishlisted Any Product
                            </h4>
                        </div>

                    )
                }
                {
                    hasFetched && wishlistedProducts?.length > 0 &&
                    wishlistedProducts.map((item, i) => (
                        <ProductCard data={item} key={i} />
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default WishlistPage;

