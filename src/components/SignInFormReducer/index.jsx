import React, { useState } from 'react';

function SignInFormReducer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const changeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'firstName': {
        setFirstName(value);
        break;
      }
      case 'lastName': {
        setLastName(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      case 'birthday': {
        setBirthday(value);
        break;
      }

      case 'gender': {
        setGender(value);
        break;
      }

      default: {
      }
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password,
      birthday,
      gender,
    });
  };

  return (
    <form onSubmit={submitHandler}>
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
      <input
        type="email"
        name="email"
        value={email}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={changeHandler}
      />
      <input
        type="text"
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
          onChange={setFirstName}
        />
        Other
      </label>

      <button>Submit</button>
    </form>
  );
}

export default SignInFormReducer;
