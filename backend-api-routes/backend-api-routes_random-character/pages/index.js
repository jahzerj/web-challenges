import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR('/api/random-character', fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log('data:', data);

  return (
    <h1>
      Hi my name is {data.firstName} {data.lastName}
    </h1>
  );
}
