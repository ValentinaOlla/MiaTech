import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("Errore durante la chiamata fetch");
            }
            const result = await response.json();
            setData(result);
        } catch(error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading,
        reload: fetchData
    }
}