import useSWR from 'swr';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import StyledLink from '@/components/Link';
import { useState } from 'react';
import ProductForm from '@/components/ProductForm';
import Button from '@/components/Button';

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    console.log('productData', productData);

    const response = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, { method: 'DELETE' });

    if (response.ok) {
      await response.json();
      router.push('/');
      return;
    }

    if (!response.ok) {
      console.log(response.status);
      return;
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        <StyledLink href="/">Back to all</StyledLink>
        <Button
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          Edit Product
        </Button>
      </ProductCard>
      <Button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete Product
      </Button>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          value={data.product}
          isEditMode={true}
        />
      )}
    </>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
