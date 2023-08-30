export const getDiscountedPricePercentage = (
    originalPrice,
    discountedPrice
) => {
    const discount = originalPrice - discountedPrice;

    const discountPercentage = (discount / originalPrice) * 100;

    return discountPercentage.toFixed(2);
};



export const fetchFromLocalStorage  = () => {
    if(typeof window !== "undefined") {
        let cartItems = localStorage.getItem("cartItems");
            console.log("In json format", cartItems)
        if(cartItems) {
            let items = JSON.parse(cartItems);

            console.log("ITEM", items)
            return items;
        } else return null;
    }
}

export const storeToLocalStorage = (cartItems) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("cartItems", cartItems);
    }
}