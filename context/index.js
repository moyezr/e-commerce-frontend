import { useAuth, useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [wishlistedIds, setWishlistedIds] = useState([]);

    const { userId } = useAuth();

    const { user } = useUser();

    useEffect(() => {

        setUserData(user
        )
    }, [userId]);

    useEffect(() => {
        if (userId && user.unsafeMetadata?.wishlistedIds) {
            setWishlistedIds(user.unsafeMetadata.wishlistedIds)
        }
    }, [userId]);


    console.log("WishlistedIds ", wishlistedIds)
    return (
        <UserContext.Provider value={{
            user: userData,
            wishlistedIds,
            setWishlistedIds,

        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

export const useUserData = () => useContext(UserContext);


