import useSWR from 'swr';
import fetcher from './fetcher';

export default function SWRBasic() {
    const endpoint = 'https://dummyjson.com/product/1';
    const { data, isLoading, error } = useSWR(endpoint, fetcher);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
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