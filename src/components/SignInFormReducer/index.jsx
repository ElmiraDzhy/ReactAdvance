import React, { useEffect, useReducer } from 'react';
import { format } from 'date-fns';
import { reducer, INITIAL_STATE } from '../../reducers/FormReducer';
import { CONSTANTS } from '../constants';

function SignInFormReducer() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { firstName, lastName, email, password, birthday, isFetching, error } =
    state;
  const { ACTIONSTYPES } = CONSTANTS;
  const changeHandler = ({ target: { value, name } }) => {
    const action = {
      value,
      type: name,
    };

    dispatch(action);
  };

  useEffect(() => {
    if (state.isFetching) {
      fetch('./userData.json')
        .then(res => res.json())
        .then(data =>
          dispatch({
            type: ACTIONSTYPES.LOADSUCCESS,
            value: data,
          })
        )
        .catch(e =>
          dispatch({
            type: ACTIONSTYPES.ERROR,
            value: e,
          })
        );
    }
  }, [state.isFetching]);

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
  };

  const resetHandler = e => {
    e.preventDefault();

    dispatch({
      type: ACTIONSTYPES.RESET,
    });
  };

  const fetchData = e => {
    e.preventDefault();
    dispatch({
      type: ACTIONSTYPES.LOAD,
    });
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        height: '500px',
        justifyContent: 'space-around',
      }}
    >
      {isFetching && <div>Loading</div>}
      {error && <div>error</div>}
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={changeHandler}
      />
      <input type="email" name="email" value={email} onChange={changeHandler} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={changeHandler}
      />
      <input
        type="date"
        name="birthday"
        value={format(birthday, 'yyyy-MM-dd')}
        onChange={changeHandler}
      />

      <div>
        <button onClick={submitHandler}>Submit</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={fetchData}>data</button>
      </div>
    </form>
  );
}

export default SignInFormReducer;
