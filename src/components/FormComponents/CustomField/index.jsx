import { Field } from 'formik';
import React from 'react';
import styles from './CustomField.module.scss';
import classNames from 'classnames';

function CustomField(props) {
  return (
    <Field {...props}>
      {({ field, meta: { error, touched } }) => {
        const className = classNames(styles.field, {
          [styles.invalid]: error && touched,
        });

        return (
          <>
            <input {...field} className={className} {...props} />
            {error && touched && <p className={styles.errorMessage}>{error}</p>}
          </>
        );
      }}
    </Field>
  );
}

export default CustomField;
