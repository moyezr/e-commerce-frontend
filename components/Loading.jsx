import React from 'react'
import { MoonLoader } from 'react-spinners'
const Loading = ({ isLoading, setIsLoading }) => {


    if(!isLoading) {
        return null;
    }

    return (

        <div className='fixed top-0 left-0 w-screen min-h-screen z-[10000] bg-black/20 flex items-center justify-center'>

            <MoonLoader
                color="#ffffff"
                size={100}
            />
        </div>
    )
}

export default Loading