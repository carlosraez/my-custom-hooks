import { useState, useEffect, useRef } from 'react'

export const useFech = ( url ) => {
    
    const isMounted = useRef(true)

    useEffect(() => {
        
        return () => {
            isMounted.current = false
        }
    }, [])

    const [state, setstate] = useState({
        data:null,
        loading:true,
        error: null
    })

    useEffect(() => {
        
        setstate({
            data:null,
            loading:true,
            error:null
        })

        fetch(url)
        .then( resp => resp.json() )
        .then( data => {
                setstate({
                    loading:false,
                    error: null,
                    data
                })
        })
    }, [url])


    return state
}
