import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName, changePassword } from '../../redux/slices/user';

const { useRef } = require('react');

function Login() {
  const nameElement = useRef();
  const passwordElement = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(changeName(nameElement.current.value));
    dispatch(changePassword(passwordElement.current.value));

    navigate('/assets');
  };

  // const email = useSelector((state) => state.user.email);
  // const password = useSelector((state) => state.user.password);

  // const isButtonDisabled = () => !(/\S+@\S+\.\S+/).test(email)
  // || (password.length <= 6);

  return (
    <div>
      <form>
        <h1>TradeX</h1>
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
        // disabled={isButtonDisabled()}
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
