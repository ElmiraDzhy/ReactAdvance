import React, { useState } from 'react';
// import { PropTypes } from '@mui/material';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiPlus, mdiClose } from '@mdi/js';
import styles from './FAQitem.module.scss';

function FAQitem(props) {
  const {
    itemBody: { caption, content },
  } = props;
  const [isOpen, setMode] = useState(false);

  const clickHandler = () => {
    setMode(mode => !mode);
  };

  const className = classNames(styles.container, {
    [styles.containerOpen]: isOpen,
  });
  const classNameContent = classNames(styles.content, {
    [styles.contentOpen]: isOpen,
  });

  return (
    <article className={className}>
      <div className={styles.captionWrapper}>
        <h2 className={styles.captionText}>{caption}</h2>
        {isOpen ? (
          <Icon path={mdiClose} size={1} onClick={clickHandler} />
        ) : (
          <Icon path={mdiPlus} size={1} onClick={clickHandler} />
        )}
      </div>
      <p className={classNameContent}>{content}</p>
    </article>
  );
}

export default FAQitem;

// FAQitem.propType = {
//   itemBody: PropTypes.
// }
