import { useEffect, useState } from 'react';
import fetcher from './fetcher';

export default function SWRPre() {
    const [data, setData] = useState(null);
    const [isRefresh, setIsRefresh] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const endpoint = 'https://dummyjson.com/products/1';

    useEffect(() => {
        if (!isRefresh) { return; }
        setLoading(true);
        setError('');
        fetcher(endpoint)
            .then(result => {
                setData(result);
                setIsRefresh(false);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [isRefresh]);

    if (isLoading) { 
        return <p>Loading...</p>; 
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <figure>
            <img
                src={data?.thumbnail}
                alt={data?.title} />
            <figcaption>{data?.description}</figcaption>
        </figure>
    );
};