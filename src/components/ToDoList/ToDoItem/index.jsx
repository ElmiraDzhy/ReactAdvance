import React, { useState } from 'react';
import { format } from 'date-fns';
import styles from './ToDoItem.module.css';
import PropTypes from 'prop-types';

const ToDoItem = props => {
  const {
    changeIsDone,
    removeListItem,
    changeText,
    data: { id, isDone, time, toDoItem },
  } = props;

  const [editMode, setEditMode] = useState(false);

  const onChange = e => {
    changeIsDone(e.target.checked, id);
  };

  const onClick = () => {
    removeListItem(id);
  };

  const changeView = () => {
    setEditMode(editMode => !editMode);
  };

  const bodyChangeHandler = ({ target: { value } }) => {
    changeText(value, id);
  };

  const body = editMode ? (
    <input value={toDoItem} onChange={bodyChangeHandler} />
  ) : (
    toDoItem
  );

  return (
    <li className={styles.container}>
      <input type="checkbox" checked={isDone} onChange={onChange} />
      <span>{body}</span> -<span>{format(time, 'yyyy-MM-dd hh:mm')}</span>
      <button className={styles.delBtn} onClick={onClick}>
        delete
      </button>
      <button onClick={changeView}>edit</button>
    </li>
  );
};

const dataProp = {
  isDone: PropTypes.bool.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
  toDoItem: PropTypes.string.isRequired,
};

ToDoItem.propTypes = {
  data: PropTypes.shape(dataProp).isRequired,
  changeIsDone: PropTypes.func.isRequired,
  removeListItem: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  changeIsDone: () => {},
  removeListItem: () => {},
  changeText: () => {},
};

export default ToDoItem;
