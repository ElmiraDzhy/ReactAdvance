import React from 'react';
import styles from './ProductCard.module.css';
import RateStars from './RateStars';

function ProductCard(props) {
  const {
    title,
    price,
    image,
    rating: { rate },
    description
  } = props.data;
  return (
    <article className={styles.container}>
      <img className={styles.image} src={image} alt="" />
      <h1>{ title }</h1>
      <p className={ styles.description }>{description }</p>
      <div className={styles.wrapper}>
        <RateStars rate={rate} />{' '}
        <p className={styles.price}>${price}</p>
      </div>
      <button className={styles.btn}>Add to cart</button>
    </article>
  );
}

export default ProductCard;
