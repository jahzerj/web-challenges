import useSWR from 'swr';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

export default function Homepage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <div>
      <div>{data.name}</div>
      <ul>
        <li>Category: {data.category}</li>
        <li>Description: {data.description}</li>
        <li>
          Price: {data.currency}
          {data.price}
        </li>
      </ul>
      <Link href="/products">Back</Link>
    </div>
  );
}
