import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
      <div className={styles.captionWrapper} onClick={clickHandler} >
        <h2 className={styles.captionText}>{caption}</h2>
        {isOpen ? (
          <Icon path={mdiClose} size={1} />
        ) : (
          <Icon path={mdiPlus} size={1}  />
        )}
      </div>
      <p className={classNameContent}>{content}</p>
    </article>
  );
}

export default FAQitem;


const PROP_SHEMA = {
  caption: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

FAQitem.propType = {
  itemBody: PropTypes.shape(PROP_SHEMA).isRequired,
}

FAQitem.defaultProps = {
  itemBody: {
    caption: 'Test Caption Squadhelp component',
    content: 'Squadhelp component. It is a default content. Please pass real content through props',
  }
}
