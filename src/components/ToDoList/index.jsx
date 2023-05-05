import React, { useReducer } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import { getTime } from 'date-fns';
import styles from './ToDoList.module.css';

function reducer(state, action) {
  return { todoList: [...action.value] };
}

const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, { todoList: [] });
  const { todoList } = state;

	const addNewItem = data => {
    dispatch({
      value: [...todoList, { ...data, id: todoList.length }],
    });
  };

  const changeIsDone = (isDone, id) => {
    const newList = todoList.map(td => {
      if (td.id === id) {
        td.isDone = isDone;
      }
      return td;
    });
    dispatch({ value: newList });
  };

  const removeListItem = id => {
    const newList = todoList.filter(td => {
      if (td.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    dispatch({ value: newList });
  };

  const changeTextItem = (newText, id) => {
    const newList = todoList.map(item => {
      if (item.id === id) {
        item.toDoItem = newText;
      }
      return item;
    });
    dispatch({ value: newList });
  };

  const sortList = () => {
    const newList = [...todoList];
    newList.sort((a, b) => {
      return getTime(a.time) > getTime(b.time) ? 1 : -1;
    });

    dispatch({ value: newList });
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do List</h1>
      <ToDoForm callback={addNewItem} />
      <button className={styles.btn} onClick={sortList}>
        SORT
      </button>
      <ul>
        {todoList && todoList.map(todo => (
          <ToDoItem
            data={todo}
            key={todo.id}
            removeListItem={removeListItem}
            changeIsDone={changeIsDone}
            changeText={changeTextItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
