import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`
        },
    }

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
}

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            'Content-Type': "application/json"

        },
        body: JSON.stringify(payload)
    });

    const data = await res.json();

    return data;
}

export const wishlistedIds = async (userId) => {
    const res = await fetch(`${API_URL}$}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            'Content-Type': "application/json"

        },
        body: JSON.stringify(payload)
    });
}


export const getWishlistedProducts = async (wishlistedIds) => {
    try {

        if (wishlistedIds.length > 0) {
            let url = `/api/products?`

            for (let i = 0; i < wishlistedIds.length; i++) {
                url += `filters[id][$in][${i}]=${wishlistedIds[i]}&`
            }

            console.log("FINAL URL ", url);
            url += "populate=*";

            const products = await fetchDataFromApi(url);
            return products.data;

        } else {
            return [];
        }

    } catch (error) {
        console.log("ERROR FETCHING WISHLISTED PRODUCTS", error)
        return []
    }
}