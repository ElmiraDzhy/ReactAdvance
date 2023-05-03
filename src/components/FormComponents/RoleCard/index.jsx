import React from 'react';
import styles from './RoleCard.module.scss';
import CustomField from '../CustomField';

function RoleCard(props) {
  const { iconSrc, fieldName, title, descriptionText } = props;

  return (
    <div className={styles.roleCard}>
      <div className={styles.iconGroup}>
        <img src={iconSrc} alt="icon" />
        <CustomField
          name={fieldName}
          type="radio"
          className={styles.radioField}
        />
      </div>
      <h3>{title}</h3>
      <p>{descriptionText}</p>
    </div>
  );
}

export default RoleCard;
