import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import toast, { Toaster } from 'react-hot-toast';
import { changeName } from '../../redux/slices/user';
import * as S from './style';
import Logo from '../../images/logoLogin1.svg';

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

    navigate('/assets');
  };

  return (
    <S.Container>
      <S.Content>
        <h1>Trade-X</h1>
        <form>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={handleChange}
            />
          </label>
          <S.Button
            type="button"
            disabled={isButtonDisabled()}
            onClick={handleClick}
          >
            Entrar
          </S.Button>
        </form>
      </S.Content>
      <S.Aside>
        <img src={Logo} alt="Imagem gráfico de trade" />
      </S.Aside>
    </S.Container>
  );
}

export default Login;
