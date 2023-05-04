import PropductsList from './../ProductsList';
import ProductBag from './../ProductBag';
import React, { useState } from 'react';

export const ProductContext = React.createContext();

const ProductPage = () => {
  const [count, setCount] = useState(0);
  const [choosedProducts, setChoosedProducts] = useState([]);
  const [summary, setSummary] = useState(0);

  const countHandler = v => setCount(v);

  const chooseProductHandler = p => {
    const newProductsArr = [...choosedProducts];
    newProductsArr.push(p);
    setChoosedProducts(newProductsArr);
  };

  const setSummaryPrice = v => {
    setSummary(summary => summary + v);
  };

  return (
    <ProductContext.Provider
      value={{
        count: count,
        countHandler: countHandler,
        chooseProductHandler: chooseProductHandler,
        setSummary: setSummaryPrice,
      }}
    >
      {
        <ProductBag
          count={count}
          choosedProducts={choosedProducts}
          summary={summary}
        />
      }
      {<PropductsList />}
    </ProductContext.Provider>
  );
};

export default ProductPage;
