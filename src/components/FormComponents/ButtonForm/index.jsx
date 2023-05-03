import React from 'react';
import styles from './ButtonForm.module.scss';

function ButtonForm(props) {
  return (
    <button type="submit" className={styles.button} {...props}>
      {props.children}
    </button>
  );
}

export default ButtonForm;
