import React, { useReducer } from 'react';
import { format, isBefore } from 'date-fns';
import styles from './ToDoForm.module.css';
import classNames from 'classnames';

const initialState = {
  toDoItem: '',
  isDone: false,
  time: new Date(),
  isInputValid: true,
  isDataValid: true,
};

function reducer(state, action) {
  return {
    ...state,
    ...action.value,
  };
}

const ToDoForm = props => {
  const { callback } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { toDoItem, isDone, time, isInputValid, isDataValid } = state;

  const submitHandler = e => {
    e.preventDefault();
    if (isDataValid && isInputValid) {
      callback(state);
    } else {
      alert('Input valid data');
    }
  };

  const generalHandler = ({ target }) => {
    switch (target.type) {
      case 'text': {
        if (target.value.includes(' ')) {
          dispatch({
            type: target.type,
            value: { isInputValid: false },
          });
        } else {
          dispatch({
            type: target.type,
            value: { isInputValid: true },
          });
        }
        dispatch({
          type: target.type,
          value: { toDoItem: target.value },
        });
        break;
      }

      case 'checkbox': {
        dispatch({
          value: { isDone: target.checked },
        });
        break;
      }

      case 'datetime-local': {
        if (isBefore(new Date(target.value), new Date())) {
          dispatch({
            value: { isDataValid: false },
          });
        } else {
          dispatch({
            value: { isDataValid: true },
          });
        }

        dispatch({
          value: { time: new Date(target.value) },
        });
        break;
      }

      default:
    }
  };

  const className = classNames([styles.inputTodo], {
    [styles.inputInalid]: !isInputValid,
    [styles.inputValid]: isInputValid,
  });
  const dataClassName = classNames({ [styles.dataInvalid]: !isDataValid });

  return (
    <>
      <form onSubmit={submitHandler} className={styles.container}>
        <input
          name="toDoItem"
          type="text"
          value={toDoItem}
          onChange={generalHandler}
          className={className}
          placeholder="What needs to be done?"
          autoFocus
        />

        <label>
          isDone?
          <input
            name="check"
            type="checkbox"
            checked={isDone}
            onChange={generalHandler}
          />
        </label>

        <input
          name="time"
          type="datetime-local"
          value={format(time, 'yyyy-MM-dd hh:mm')}
          onChange={generalHandler}
          className={dataClassName}
        />
        <button className={styles.addBtn}>+</button>
      </form>
    </>
  );
};

export default ToDoForm;
