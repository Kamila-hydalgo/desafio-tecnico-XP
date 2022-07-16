import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../../redux/slices/user';

const { useRef } = require('react');

function Login() {
  const nameElement = useRef();
  const passwordElement = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const email = useSelector((state) => state.user.email);
  // const password = useSelector((state) => state.user.password);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(nameElement.current.value, passwordElement.current.value);

    dispatch(changeName({
      email: nameElement.current.value,
    }));

    navigate('/assets');
  };

  // const isButtonDisabled = () => !(/\S+@\S+\.\S+/).test(email)
  // || (password.length <= 6);

  return (
    <div>
      <input
        id="email"
        type="email"
        name="email"
        ref={nameElement}
      />
      <input
        id="password"
        type="password"
        name="password"
        ref={passwordElement}
      />
      <button
        type="button"
        // disabled={isButtonDisabled}
        onClick={handleSubmit}
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
