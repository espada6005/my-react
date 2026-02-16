import useSWR from 'swr';

function useWeather() {
    const endpoint = 'https://dummyjson.com/products/1';;
    const { data } = useSWR(endpoint)
    return data;
}

export default function SWRDevide() {
    return (
        <div>
            <SWRHead />
            <SWRBody />
        </div>
    );
}

function SWRHead() {
    const data = useWeather();
    return (
        <figure>
            <img
                src={data?.thumbnail}
                alt={data?.title} />
            <figcaption>{data?.title}</figcaption>
        </figure>
    );
}

function SWRBody() {
    const data = useWeather();
    return (
        <ul>
            <li>id：{data?.id}</li>
            <li>description：{data?.description}</li>
        </ul>
    );
}