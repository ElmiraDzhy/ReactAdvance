import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'firstName':
    case 'lastName':
    case 'email':
    case 'password':
    case 'birthday':
    case 'gender': {
      return {
        ...state,
        [action.type]: action.value,
      };
    }
    case 'form submitted': {
      return {
        ...state,
        isFetching: true,
      };
    }
    case 'reset': {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        gender: '',
        isFetching: false,
      };
    }

    case 'load': {
      return {
        ...action.data,
      };
    }

    default: {
      return state;
    }
  }
}

function SignInFormReducer() {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    gender: '',
    isFetching: false,
  });

  const changeHandler = ({ target: { value, name } }) => {
    const action = {
      value,
      type: name,
    };

    dispatch(action);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: 'form submitted',
    });
  };

  const resetHandler = e => {
    e.preventDefault();

    dispatch({
      type: 'reset',
    });
  };

  const fetchData = e => {
    e.preventDefault();

    fetch('./userData.json')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'load',
          data: { ...data },
        })
      );
  };

  const { firstName, lastName, email, password, birthday, gender, isFetching } =
    state;

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
        value={birthday}
        onChange={changeHandler}
      />

      <p>Gender</p>
      <label>
        <input
          type="radio"
          name="gender"
          value={gender}
          onChange={changeHandler}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          onChange={changeHandler}
          value={gender}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value={gender}
          onChange={changeHandler}
        />
        Other
      </label>
      <div>
        <button onClick={submitHandler}>Submit</button>
        <button onClick={resetHandler}>reset</button>
        <button onClick={fetchData}>data</button>
      </div>
    </form>
  );
}

export default SignInFormReducer;
