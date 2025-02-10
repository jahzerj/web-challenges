import useSWR from 'swr';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Homepage() {
  const { data, isLoading, error } = useSWR('/api/products/');

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <div>
      {data.map((product) => (
        <Fragment key={product.id}>
          <div>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </div>
          <ul>
            <li>Category: {product.category}</li>
            <li>
              {product.currency}
              {product.price}
            </li>
          </ul>
        </Fragment>
      ))}
    </div>
  );
}
