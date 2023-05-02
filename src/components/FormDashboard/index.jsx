import React from 'react'
import styles from './FormContainer.module.scss';

function FormContainer(props) {
  return (
    <div className={styles.wrapper}>
      <h1>SignUp</h1>
      <form className={styles.form}>
        <input type="text" />
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormContainer;
