import useSWR from 'swr';
import fetcher from './fetcher';

export default function SWRRender() {
    const endpoint = 'https://dummyjson.com/products/1';
    // const { data, error, isLoading, isValidating } = useSWR(endpoint, fetcher);
    // console.log(`${data} | ${error} | ${isLoading} | ${isValidating}`);

    // if (isLoading) { return <p>Loading...</p>; }
    // if (error) { return <p>Error: {error.message}</p>; }

    // // 結果データ（data）だけを参照
    const { data } = useSWR(endpoint, fetcher);
    console.log(data);

    if (!data) { return <p>Loading...</p>; }

    return (
        <figure>
            <img
                src={data?.thumbnail}
                alt={data?.title} />
            <figcaption>{data?.description}</figcaption>
        </figure>
    );
}
