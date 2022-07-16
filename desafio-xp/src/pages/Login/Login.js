import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName, changePassword } from '../../redux/slices/user';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const isButtonDisabled = () => !(/\S+@\S+\.\S+/).test(email)
    || (password.length < 6);

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(changeName(email));
    dispatch(changePassword(password));

    navigate('/assets');
  };

  return (
    <div>
      <form>
        <h1>TradeX</h1>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button
          type="button"
          disabled={isButtonDisabled()}
          onClick={handleClick}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
