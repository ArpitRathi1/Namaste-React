import React, { useEffect, useState } from 'react'

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{

        const handleOnline = () => {
            setIsOnline(true)
        }

        const handleOffline = () => {
            setIsOnline(false)
        }

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        // It is always a good practice to removeEventListener when we remove our component.
        // Because your browser will keep holding eventListener and eventListeners are heavy

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }

    },[])

    return isOnline
}

export default useOnline
