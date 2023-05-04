import React from 'react';
import Spinner from '../UserList/Spinner';
import ProductCard from './ProductCard';
import useData from '../hooks/useData';

const PropductsList = () => {
  const {
    data: users,
    error,
    isFetching,
  } = useData(() =>
    fetch('https://fakestoreapi.com/products').then(res => res.json())
  );

  const products = users.map(p => <ProductCard key={p.id} data={p} />);

  if (isFetching) {
    return <Spinner />;
  }

  if (error) {
    return <div className="">Error...</div>;
  }

  return <section>{products}</section>;
};

export default PropductsList;
