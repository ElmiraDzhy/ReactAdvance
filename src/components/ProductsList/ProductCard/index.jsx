import React, { useContext } from 'react';
import styles from './ProductCard.module.css';
import RateStars from './RateStars';
import { ProductContext } from './../../ProductsPage';

function ProductCard(props) {
  const {
    title,
    price,
    image,
    rating: { rate },
    description,
  } = props.data;

  const { count, countHandler, chooseProductHandler, setSummary } =
    useContext(ProductContext);
  const onClick = () => {
    chooseProductHandler({ title, price, image });
    countHandler(count + 1);
    setSummary(price);
  };

  return (
    <article className={styles.container}>
      <img className={styles.image} src={image} alt="" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.wrapper}>
        <RateStars rate={rate} /> <p className={styles.price}>${price}</p>
      </div>
      <button onClick={onClick} className={styles.btn}>
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;
