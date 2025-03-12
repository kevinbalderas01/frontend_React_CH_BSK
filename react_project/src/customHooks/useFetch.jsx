import { useEffect, useState } from "react";

export const useFetch = (url)=>{
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(error => setError(error))
        .finally(()=> setLoading(false))
    }, [url])

    return {data, loading, error}
}