import { useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (!loading) setLoading(true);
        if (error) setError(false);
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
            if(loading) setLoading(false);
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